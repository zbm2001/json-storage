/*
 * @name: json-storage
 * @version: 0.1.0
 * @description: localStorage and sessionStorage of json data
 * @author: zbm2001@aliyun.com
 * @license: Apache 2.0
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// const localStorage = window.localStorage
// const StoragePrototype = window.Storage.prototype
// const setItem = StoragePrototype.setItem
// const getItem = StoragePrototype.getItem
// const removeItem = StoragePrototype.removeItem
//
// // 本地存储对象化处理
// assign(StoragePrototype, {
//   setItem (key, value) {
//     setItem.call(this, key, JSON.stringify(value))
//   },
//   setItems (jsonObject) {
//     Object.keys(jsonObject).forEach(key => setItem.call(this, key, JSON.stringify(jsonObject[key])))
//   },
//   getItem (key) {
//     let value = getItem.call(this, key)
//     return value === null ? null : JSON.parse(value)
//   },
//   getItems (...keys) {
//     let jsonObject = {}
//     keys.forEach(key => jsonObject[key] = getItem.call(this, key))
//     return jsonObject
//   },
//   removeItems (...keys) {
//     keys.forEach(key => removeItem.call(this, key))
//   }
// })

/**
 * 存字段值
 * @param {String} key
 * @param {String|Object|Array|Boolean|...} value
 * @return [Undefined]
 */
function setItem(key, value) {
  var jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

/**
 * 存多组字段值
 * @param {Object} jsonObject
 * @return [Undefined]
 */
function setItems(jsonObject) {
  Object.keys(jsonObject).forEach(function (key) { return setItem(key, jsonObject[key]); });
}

/**
 * 获取字段值
 * @param {String} key
 * @return [String|Object|Array|Boolean|...]
 */
function getItem(key) {
  var value = localStorage.getItem(key);
  return value === null ? null : JSON.parse(value)
}

/**
 * 获取多组字段值
 * @param {Array} keys
 * @return [Object]
 */
function getItems() {
  var keys = [], len = arguments.length;
  while ( len-- ) keys[ len ] = arguments[ len ];

  var jsonObject = {};
  keys.forEach(function (key) {
    jsonObject[key] = getItem(key);
  });
  return jsonObject
}

/**
 * 删除字段值
 * @param {String} key
 * @return [Undefined]
 */
function removeItem(key) {
  localStorage.removeItem(key);
}

/**
 * 删除多组字段值
 * @param {Array} keys
 * @return [Undefined]
 */
function removeItems() {
  var keys = [], len = arguments.length;
  while ( len-- ) keys[ len ] = arguments[ len ];

  keys.forEach(function (key) {
    removeItem(key);
  });
}

/**
 * 清除所有字段
 * @return [Undefined]
 */
function clear() {
  localStorage.clear();
}

var localStorage$1 = {
  setItem: setItem,
  setItems: setItems,
  getItem: getItem,
  getItems: getItems,
  removeItem: removeItem,
  removeItems: removeItems,
  clear: clear
};

// const sessionStorage = window.sessionStorage

/**
 * 存字段值
 * @param {String} key
 * @param {String|Object|Array|Boolean|...} value
 * @return [Undefined]
 */
function $setItem (key, value) {
  var jsonValue = JSON.stringify(value);
  sessionStorage.setItem(key, jsonValue);
}

/**
 * 存多组字段值
 * @param {Object} jsonObject
 * @return [Undefined]
 */
function $setItems (jsonObject) {
  Object.keys(jsonObject).forEach(function (key) { return $setItem(key, jsonObject[key]); });
}

/**
 * 获取字段值
 * @param {String} key
 * @return [String|Object|Array|Boolean|...]
 */
function $getItem (key) {
  var value = sessionStorage.getItem(key);
  return value === null ? null : JSON.parse(value)
}

/**
 * 获取多组字段值
 * @param {Array} keys
 * @return [Object]
 */
function $getItems () {
  var keys = [], len = arguments.length;
  while ( len-- ) keys[ len ] = arguments[ len ];

  var jsonObject = {};
  keys.forEach(function (key) {
    jsonObject[key] = $getItem(key);
  });
  return jsonObject
}

/**
 * 删除字段值
 * @param {String} key
 * @return [Undefined]
 */
function $removeItem (key) {
  sessionStorage.removeItem(key);
}

/**
 * 删除多组字段值
 * @param {Array} keys
 * @return [Undefined]
 */
function $removeItems () {
  var keys = [], len = arguments.length;
  while ( len-- ) keys[ len ] = arguments[ len ];

  keys.forEach(function (key) {
    $removeItem(key);
  });
}

/**
 * 清除所有字段
 * @return [Undefined]
 */
function $clear () {
  sessionStorage.clear();
}

var sessionStorage$1 = {
  $setItem: $setItem,
  $setItems: $setItems,
  $getItem: $getItem,
  $getItems: $getItems,
  $removeItem: $removeItem,
  $removeItems: $removeItems,
  $clear: $clear
};

var index = {
  localStorage: localStorage$1,
  sessionStorage: sessionStorage$1
};

exports.$clear = $clear;
exports.$getItem = $getItem;
exports.$getItems = $getItems;
exports.$removeItem = $removeItem;
exports.$removeItems = $removeItems;
exports.$setItem = $setItem;
exports.$setItems = $setItems;
exports.clear = clear;
exports.default = index;
exports.getItem = getItem;
exports.getItems = getItems;
exports.removeItem = removeItem;
exports.removeItems = removeItems;
exports.setItem = setItem;
exports.setItems = setItems;
