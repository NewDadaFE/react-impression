/* eslint-disable */
import React from 'react'

export const toArray = children => {
  const ret = []
  React.Children.forEach(children, c => {
    ret.push(c)
  })
  return ret
}

export const mapChildren = (children, func) => {
  const list = toArray(children).map(func)
  if (list.length === 1) {
    return list[0]
  }
  return list
}

export const isTreeNode = node => {
  return node && node.type && node.type.isTreeNode
}

export const arrDel = (list, value) => {
  const clone = list.slice()
  const index = clone.indexOf(value)
  if (index >= 0) {
    clone.splice(index, 1)
  }
  return clone
}

export const arrAdd = (list, value) => {
  const clone = list.slice()
  if (clone.indexOf(value) === -1) {
    clone.push(value)
  }
  return clone
}

export const isCheckDisabled = node => {
  const { disabled } = node.props || {}
  return !!disabled
}

export const getNodeChildren = children => {
  return toArray(children).filter(isTreeNode)
}

export const keyListToString = keyList => {
  if (!keyList) return keyList
  return keyList.map(key => String(key))
}

export const parseCheckedKeys = keys => {
  if (!keys) {
    return null
  }

  let keyProps
  if (Array.isArray(keys)) {
    keyProps = {
      checkedKeys: keyListToString(keys),
      halfCheckedKeys: undefined,
    }
  }

  return keyProps
}

export const convertTreeToEntities = treeNodes => {
  const keyMap = {}

  traverseTreeNodes(treeNodes, item => {
    const { node, index, key, parentKey } = item
    const entity = { node, index, key }

    keyMap[key] = entity

    entity.parent = keyMap[parentKey]
    if (entity.parent) {
      entity.parent.children = entity.parent.children || []
      entity.parent.children.push(entity)
    }
  })

  return keyMap
}

export const traverseTreeNodes = (treeNodes, callback) => {
  const processNode = (node, index, parent) => {
    const children = node ? node.props.children : treeNodes
    const childList = getNodeChildren(children)
    if (node) {
      const data = {
        node,
        index,
        key: node.key,
        parentKey: parent.node ? parent.node.key : null,
      }
      callback(data)
    }

    React.Children.forEach(childList, (subNode, subIndex) => {
      processNode(subNode, subIndex, { node })
    })
  }

  processNode(null)
}

/**
 * regenCheck
 * @param keyList 当前点击的checklist数组
 * @param isCheck 点击之后选中的状态
 * @param keyMap checklist的key组成的map
 * @param checkStatus 当前checkedKeys和halfCheckedKeys的数组
 */
export const regenCheck = (keyList, isCheck, keyMap, checkStatus = {}) => {
  const checkedKeys = {}
  const halfCheckedKeys = {}
  ;(checkStatus.checkedKeys || []).forEach(key => {
    checkedKeys[key] = true
  })
  ;(checkStatus.halfCheckedKeys || []).forEach(key => {
    halfCheckedKeys[key] = true
  })

  const conductUp = key => {
    if (checkedKeys[key] === isCheck) return

    const entity = keyMap[key]
    if (!entity) return

    const { children, parent, node } = entity

    if (isCheckDisabled(node)) return

    let everyChildChecked = true
    let someChildChecked = false

    ;(children || [])
      .filter(child => !isCheckDisabled(child.node))
      .forEach(({ key: childKey }) => {
        const childChecked = checkedKeys[childKey]
        const childHalfChecked = halfCheckedKeys[childKey]

        if (childChecked || childHalfChecked) someChildChecked = true
        if (!childChecked) everyChildChecked = false
      })

    if (isCheck) {
      checkedKeys[key] = everyChildChecked
    } else {
      checkedKeys[key] = false
    }
    halfCheckedKeys[key] = someChildChecked

    if (parent) {
      conductUp(parent.key)
    }
  }

  const conductDown = key => {
    if (checkedKeys[key] === isCheck) return

    const entity = keyMap[key]
    if (!entity) return

    const { children, node } = entity

    if (isCheckDisabled(node)) return

    checkedKeys[key] = isCheck
    ;(children || []).forEach(child => {
      conductDown(child.key)
    })
  }

  const conduct = key => {
    const entity = keyMap[key]

    if (!entity) return

    const { children, parent, node } = entity
    checkedKeys[key] = isCheck

    if (isCheckDisabled(node)) return
    ;(children || [])
      .filter(child => !isCheckDisabled(child.node))
      .forEach(child => {
        conductDown(child.key)
      })

    if (parent) {
      conductUp(parent.key)
    }
  }

  ;(keyList || []).forEach(key => {
    conduct(key)
  })

  const checkedKeyList = []
  const halfCheckedKeyList = []

  Object.keys(checkedKeys).forEach(key => {
    if (checkedKeys[key]) {
      checkedKeyList.push(key)
    }
  })

  Object.keys(halfCheckedKeys).forEach(key => {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key)
    }
  })

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList,
  }
}
