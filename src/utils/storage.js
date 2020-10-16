import Taro from '@tarojs/taro'

/**
 * 存储storage某一项
 * @param 可能是一个对象，也可能是两个string
 */
export function saveInStorage() {
  if(arguments.length === 1 && typeof arguments[0] !== 'string') {
    // 对象的情况
    Object.keys(arguments[0]).map(key => {
      Taro.setStorageSync(key, arguments[0][key])
    })
  }else {
    Taro.setStorageSync(arguments[0], arguments[1])
  }
}

/**
 * 获取storage某一项或多项
 * @prop {String} key 名称
 */
export function fetchStorage(key) {
  return Taro.getStorageSync(key)
}

/**
 * 删除storage某一项
 * @param {String} key 名称
 */
export function cancelStorage(key) {
  return Taro.removeStorageSync(key)
}
