import * as R from 'ramda'
/**
 * 返回当前元素所在的位置
 */

export const getTargetIndex = (item, arr = [], key) => {
  let ind = null
  // item中不存在key
  if (!Object.prototype.hasOwnProperty.call(item, key)) {
    return ind
  }
  ind = R.findIndex(R.propEq(key, item[key]))(arr)
  return ind
}

export const getTargetList = (data = [], key) => {
  return data.reduce((pre, cur) => {
    if (Object.prototype.hasOwnProperty.call(cur, key)) {
      return pre.concat([cur[key]])
    }
  }, [])
}
