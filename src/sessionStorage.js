
// const sessionStorage = window.sessionStorage

/**
 * 存字段值
 * @param {String} key
 * @param {String|Object|Array|Boolean|...} value
 * @return [Undefined]
 */
export function $setItem (key, value) {
  let jsonValue = JSON.stringify(value)
  sessionStorage.setItem(key, jsonValue)
}

/**
 * 存多组字段值
 * @param {Object} jsonObject
 * @return [Undefined]
 */
export function $setItems (jsonObject) {
  Object.keys(jsonObject).forEach(key => $setItem(key, jsonObject[key]))
}

/**
 * 获取字段值
 * @param {String} key
 * @return [String|Object|Array|Boolean|...]
 */
export function $getItem (key) {
  let value = sessionStorage.getItem(key)
  return value === null ? null : JSON.parse(value)
}

/**
 * 获取多组字段值
 * @param {Array} keys
 * @return [Object]
 */
export function $getItems (...keys) {
  let jsonObject = {}
  keys.forEach((key) => {
    jsonObject[key] = $getItem(key)
  })
  return jsonObject
}

/**
 * 删除字段值
 * @param {String} key
 * @return [Undefined]
 */
export function $removeItem (key) {
  sessionStorage.removeItem(key)
}

/**
 * 删除多组字段值
 * @param {Array} keys
 * @return [Undefined]
 */
export function $removeItems (...keys) {
  keys.forEach((key) => {
    $removeItem(key)
  })
}

/**
 * 清除所有字段
 * @return [Undefined]
 */
export function $clear () {
  sessionStorage.clear()
}

export default {
  $setItem,
  $setItems,
  $getItem,
  $getItems,
  $removeItem,
  $removeItems,
  $clear
}
