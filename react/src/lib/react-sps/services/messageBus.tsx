import { PostMessage, IPostMessage } from './postMessage';
import { destroy } from './destroy';
import { EventHandler } from './eventHandler';

var _allowedOrigin: string = '*';

export class MessageBus {
  frame: any;
  handlers: any;
  self: any;
  constructor(frame: any, self?: any) {
    this.frame = frame;
    this.handlers = {};
    this.self = self || window;

    this.self.addEventListener('message', this.messageHandler, false);
  }

  /**
     * Private handler for the Post Messages coming to this window.
     *
     * @param {MessageEvent} event
     */
  messageHandler(event: any) {
    var isStr = typeof event.data === 'string';
    var isMine = event.source === this.frame;
    if (isStr && isMine) {
      var msg = PostMessage.parse(event.data);
      this.trigger(msg.cmd, msg);
    }
  }

  /**
     * Whitelist messages from a specific origin.
     *
     * @param {String} origin
     */
  allowOrigin(origin: string) {
    _allowedOrigin = origin;
  }

  /**
   * Send a PostMessage to the frame.
   *
   * @param {String} cmd
   * @param {Any} body
   * @param {IPostMessageOptions} [opts]
   * @returns {IPostMessageSent}
   */
  send(cmd: string, body?: any, opts?: any) {
    body = body || '';
    opts = opts || {};
    opts.cmd = cmd;
    opts.body = body;
    var msg = new PostMessage(opts);
    return msg.sendTo(this.frame, _allowedOrigin);
  }

  /**
   * Trigger all of the callbacks for a given command.
   *
   * @param {String} cmd
   * @param {IPostMessageOptions} [opts]
   */
  trigger = function(cmd: string, opts: any) {
    var handler = this.handlers[cmd];
    if (handler) {
      handler.trigger(opts.body, opts);
    }
  };

  /**
   * Destroy all event handlers (remove their callbacks) and remove the "global"
   * window listener for post messages. This instance will no longer receive any
   * messages or trigger any events after this.
   */
  destroy = function() {
    try {
      this.self.removeEventListener('message', this.messageHandler);
      destroy(this.handlers);
      destroy(this);
    } catch (e) {
      // Swallowing errors during destruction, usually just IE complaining
      // about something or other. No big deal, keep calm and carry on.
    }
  };

  /**
   * Create an EventHandler for a given command.  You can register an optional
   * callback function that will be fired when a message is received with the
   * given command. The returned event object contains utilities to handle the
   * incoming messages.
   *
   * var event = bus.on('foo').respondWith('bar');
   *
   * @param {String} cmd
   * @param {Function} [callbackFn]
   * @returns {IOnMessageEvent}
   */
  on(cmd: string, callbackFn: Function) {
    var unregisterFns: Array<Function> = [];
    var handler = this.handlers[cmd] || new EventHandler();
    this.handlers[cmd] = handler;

    if (callbackFn) {
      unregisterFns.push(handler.register(callbackFn));
    }

    var destroy = function() {
      this.handlers[cmd].destroy();
      unregisterFns.forEach(function(unregister) {
        unregister();
      });
      return event;
    };

    var respondWith = function(response: any) {
      var unregister = handler.register(function(
        body: string,
        incomingMsg: IPostMessage
      ) {
        var result;
        var message;

        // Start building the response PostMessage content.
        // Notice the outgoing message id is the same as the
        // incomingMsg id and the body is 'response'. This is
        // what it takes to send a response message.

        var content = {
          legacy: incomingMsg.legacy,
          response: incomingMsg.cmd,
          id: incomingMsg.id,
          cmd: 'response',
          body: '',
        };

        if (typeof response === 'function') {
          result = response(body, incomingMsg);
        } else {
          result = response;
        }

        if (result && result.then) {
          // Result of the response handler is a promise,
          // so when the promise resolves, send off the
          // response PostMessage to the frame.

          result.then(function(answer: any) {
            content.body = answer;
            message = new PostMessage(content);
            message.sendTo(this.frame);
          });
        } else {
          // Result of the response handler is not a promise
          // so send the result of the function as the body
          // of the PostMessage.

          content.body = result;
          message = new PostMessage(content);
          message.sendTo(this.frame, _allowedOrigin);
        }
      });

      unregisterFns.push(unregister);
      return event;
    };

    /**
       * Define the event object that is returned from on() and it's
       * chainable methods destroy() and respondWith().
       */
    var event = {
      handler: handler,
      destroy: destroy,
      respondWith: respondWith,
    };

    return event;
  }

  once(cmd: string, callbackFn: Function) {
    var event = this.on(cmd, function() {
      callbackFn.apply(this, arguments);
      event.destroy();
    });
    return event;
  }
}

// Do we even need MessageBus on the window?
// Typescript cast for now.
(window as any).sps = (window as any).sps || {};
(window as any).sps.MessageBus = MessageBus;
