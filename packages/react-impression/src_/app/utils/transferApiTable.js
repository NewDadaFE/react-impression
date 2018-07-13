/**
 *
 * @param paramsArray  [[],[]...] 表示每个api属性对应的几种说明，包括参数，类型等
 * @returns {string} 返回一个markdown识别的table写法（横竖线分割的形式）
 */

export const transfer = paramsArray => {
  if (Object.prototype.toString.call(paramsArray) !== '[object Array]') {
    return ''
  }
  if (paramsArray.length === 0) return ''

  const attrTitle = ['参数', '说明', '类型', '默认值']
  const apiTitle = ['名称', '描述']

  let arrLineLen = paramsArray[0].length

  const tempArrTitle = arrLineLen === attrTitle.length ? attrTitle : apiTitle
  const titleLine = new Array(arrLineLen).fill('--')

  const tempArr = [tempArrTitle, titleLine, ...paramsArray]

  return tempArr.map(each => each.join(' | ')).join('\n')
}
