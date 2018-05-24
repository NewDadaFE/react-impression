export const SIDER_MENU = [
  {
    id: 1,
    name: 'Basic',
    icon: 'icon-caseguanli',
    children: [
      {
        id: 11,
        name: 'Button',
        url: '/button',
      },
    ],
  },
  {
    id: 2,
    name: 'Form Control',
    icon: 'icon-shujuchaxun',
    children: [
      {
        id: 21,
        name: 'Radio',
        url: '/radio',
      },
    ],
  },
  {
    id: 3,
    name: 'Navigation',
    icon: 'icon-shujuchaxun',
    children: [
      {
        id: 31,
        name: 'Nav',
        url: '/nav',
      },
    ],
  },
]

export const getMenuDict = () => {
  const menuDict = {}
  const loop = (list, parentId = 0) => {
    list.forEach(item => {
      if (item.url) {
        menuDict[item.url] = {
          id: item.id,
          name: item.name,
          icon: item.icon,
          url: item.url,
          parentId,
        }
      }

      if (item.children) loop(item.children, item.id)
    })
  }
  loop(SIDER_MENU)

  return menuDict
}
