import set from 'lodash/set';
import each from 'lodash/each';
import zipObject from 'lodash/zipObject';
import compact from 'lodash/compact';
import map from 'lodash/map';

/**
 * Simple function for getting query string parameters from javascript.
 * Optionally provide a url to search (defaults to current url)
 *
 * @param name
 * @param url
 * @returns {String}
 */
export function getParameterByName(name:string, url:string):string {
  if (url === null) {
    url = window.location.search;
  }

  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  if (results === null) {
    return "";
  }
  return decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * Return object of all the URL search query params. No regex, compact.
 *
 * Solution taken from:
 * http://www.timetler.com/2013/11/14/location-search-split-one-liner/
 *
 * @returns {Object}
 */
export function getParams(url:string) {
  url = url || window.location.href;
  var parts = this.parseUrl(url)
    .search.slice(1)
    .split("&");
  var partMap = map(parts, function(item:string) {
    if (item) {
      return item.split("=");
    }
  });
  return zipObject(compact(partMap));
}

/**
 * Given two urls, returns true if they have the same host and protocol
 *
 * @param url1
 * @param url2
 * @returns {boolean}
 */
export function hostAndProtocolMatch(url1:string, url2:string) {
  var a = this.parseUrl(url1);
  var b = this.parseUrl(url2);
  return a.host === b.host && a.protocol === b.protocol;
}

/**
 * Joins all arguments together into a URL string. Removes duplicate slashes
 * (but leaves the double slashes in a protocol, eg: http://foo/bar/baz).
 *
 * @param {...string}
 * @returns {String}
 */
export function join() {
  var arr = Array.apply(null, arguments);
  var str = arr.join("/");
  return str.replace(/([^:]\/)\/+/g, "$1"); // remove double slashes
}

/**
 * Parse a url so that its components can be accessed individually
 * from http://stackoverflow.com/questions/6644654/
 *
 * @param url
 * @returns {Element}
 */
export function parseUrl(url:string) {
  var a = document.createElement("a");
  a.href = url;
  return a;
}

/**
 * Add a query parameter to a url, or change it if it already exists
 * from http://stackoverflow.com/questions/5999118/
 *
 * @param url
 * @param key
 * @param val
 * @returns {string}
 */
export function updateQueryString(url:string, key:string, val:any) {
  url = url || window.location.href;

  var query:Array<string> = [];
  var parts = this.parseUrl(url);
  var params = this.getParams(url);

  var host = parts.origin;
  var path = parts.pathname;
  var hash = parts.hash;

  set(params, key, val);
  if (val === null) {
    delete params[key];
  }

  each(params, function(key, val) {
    query.push(key + "=" + val);
  });

  var queryAsString = query.join("&");

  return host + path + (queryAsString ? "?" + queryAsString : "") + hash;
}
