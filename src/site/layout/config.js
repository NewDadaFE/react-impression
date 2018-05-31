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
      {
        id: 22,
        name: 'Checkbox',
        url: '/checkbox',
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
  {
    id: 4,
    name: 'Prompt',
    icon: 'icon-shujuchaxun',
    children: [
      {
        id: 41,
        name: 'Tooltip',
        url: '/tooltip',
      },
      {
        id: 42,
        name: 'Popover',
        url: '/popover',
      },
    ],
  },
  {
    id: 5,
    name: 'Components',
    icon: 'icon-shujuchaxun',
    children: [
      {
        id: 51,
        name: 'Card',
        url: '/card',
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
