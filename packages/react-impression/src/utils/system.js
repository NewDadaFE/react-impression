import ReactDOM from 'react-dom'

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
