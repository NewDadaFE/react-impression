/**
 * 获取指定 target 路径
 * @param {array} dataSource 查找数组
 * @param {any} target 目标 value
 * @returns {array} 目标路径数组
 */
export const getValuePathsByTarget = (dataSource, target) => {
  let result = []
  if (!dataSource || dataSource.length === 0 || !target) return []

  const constructPaths = (data, target, path) => {
    data.forEach(({ value, child }) => {
      path.push(value)
      if (value === target) {
        result = JSON.parse(JSON.stringify(path))
        return
      }
      if (child && child.length) {
        constructPaths(child, target, path)
      }
      path.pop()
    })
  }

  constructPaths(dataSource, target, [])
  return result
}
