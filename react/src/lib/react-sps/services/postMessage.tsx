import { uid } from './uid';

var _window = window;

export interface IPostMessage {
  id: string;
  cmd: string;
  body: string;
  legacy: boolean;
  response: string;
}

export class PostMessage implements IPostMessage {
  id: string;
  cmd: string;
  body: string;
  legacy: boolean;
  response: string;
  constructor(opts: any) {
    this.id = opts.id || uid();
    this.cmd = opts.cmd || '';
    this.body = opts.body || '';
    this.legacy = opts.legacy || false;
    this.response = opts.response || '';
  }
  setContext(context: any) {
    _window = context;
  }

  sendTo(frame: any, origin?: any) {
    origin = origin || '*';
    var msg = '';

    if (this.legacy) {
      msg =
        'RUBICON_' +
        JSON.stringify({
          type: this.cmd,
          params: this.body,
        });
    } else {
      msg = JSON.stringify({
        id: this.id,
        cmd: this.cmd,
        body: this.body,
        response: this.response,
      });
    }

    try {
      frame.postMessage(msg, origin);
    } catch (e) {
      console.error(e);
    }

    return {
      /**
       * Register a "fire-once" callback to catch this message response.
       *
       * @param {Function} callback
       * @param {Number} [timeout]
       * @returns {Function} unregister function
       */
      onResponse: function(callback: Function, timeout: Number) {
        timeout = timeout || -1;

        var timerId: any;
        var content: any;

        var listener = function(event: any) {
          var isStr = typeof event.data === 'string';
          var isMine = event.source === frame;

          if (isStr && isMine) {
            content = PostMessage.parse(event.data);
            var isForMe = content.id === this.id;
            var isResponse = content.cmd === 'response';
            if (isResponse && isForMe) {
              callback(content.body, content);
              removeListener();
            }
          }
        };

        var removeListener = function() {
          _window.removeEventListener('message', listener);
          clearTimeout(timerId);
        };

        if (timeout >= 0) {
          timerId = setTimeout(removeListener, timeout);
        }

        _window.addEventListener('message', listener, false);

        return removeListener;
      },
    };
  }
  static parse(str: string) {
    var legacy = false;

    if (str.substr(0, 8) === 'RUBICON_') {
      str = str.slice(8);
      legacy = true;
    }

    try {
      var msg = JSON.parse(str);
      if (legacy) {
        return {
          id: uid(),
          cmd: msg.type,
          body: msg.params,
          legacy: legacy,
        };
      }
      return msg;
    } catch (e) {
      return {
        id: '',
        cmd: '',
        body: '',
        legacy: legacy,
      };
    }
  }
}
