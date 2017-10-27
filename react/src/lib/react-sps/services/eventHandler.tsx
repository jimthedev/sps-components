/**
 * Basic event handler class that can be used to register and unregister
 * handlers in a concise and convenient way.
 *
 * Example:
 *
 *    var onChange = new EventHandler();
 *    var unregister = onChange.register(myCallback);
 *
 *    onChange.trigger('fooBar', 'baz');
 *    unregister();
 *
 * @constructor
 */
export class EventHandler {
  callbacks: Array<Function>;

  /**
     * Register an arbitrary handler function. Returns a function that when
     * called will unregister the supplied handler.
     *
     * @param {Function} handler
     * @returns {Function} unregister handler
     */
  register(callback: Function) {
    this.callbacks.push(callback);
    return function() {
      this.callbacks = this.callbacks.filter(function(item: any) {
        return item !== callback;
      });
    };
  }

  /**
     * Execute registered handlers with the same args used to trigger.
     *
     */
  trigger() {
    var args = arguments;
    this.callbacks.forEach(function(handler) {
      if (typeof handler === 'function') {
        handler.apply(this, args);
      }
    });
  }

  /**
     * Remove all registered callbacks.
     */
  destroy() {
    this.callbacks.length = 0;
  }
}
