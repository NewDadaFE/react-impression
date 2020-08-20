import ReactDOM from 'react-dom'
import { findDOMNode } from 'react-dom'

/**
 * 初始化.
 */
const init = () => {
  const bodyClick = document.body.onclick

  document.body.popLayers = []
  document.body.onclick = event => {
    bodyClick && bodyClick(event)
    // 清空时间弹出层
    document.body.popLayers.forEach(component => {
      const componentDom = findDOMNode(component)

      if (!componentDom.contains(event.target)) {
        component.hideOptionsHandle && component.hideOptionsHandle()
      }
    })
  }
}

if (typeof document !== 'undefined') init()

/**
 * 管理弹出层组件.
 * @param  {[Component]} component  [组件]
 */
export const manager = component => {
  if (typeof document !== 'undefined') {
    document.body.popLayers.push(component)
  }
}

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
export const unmanager = component => {
  document.body.popLayers = document.body.popLayers.filter(
    item => item !== component
  )
}

export function addEventListener(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates
    ? function run(e) {
      ReactDOM.unstable_batchedUpdates(cb, e)
    }
    : cb
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option)
  }
  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback)
      }
    },
  }
}

export function contains(root, n) {
  let node = n
  while (node) {
    if (node === root) {
      return true
    }
    node = node.parentNode
  }

  return false
}
