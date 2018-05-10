export const SIDER_MENU = [
  {
    id: 1,
    name: 'CASE管理',
    icon: 'icon-caseguanli',
    children: [
      {
        id: 10,
        name: '来电CASE',
        url: '/cases/call',
      },
      {
        id: 11,
        name: '投诉CASE',
        url: '/cases/complaint',
      },
    ],
  },
  {
    id: 2,
    name: '数据查询',
    icon: 'icon-shujuchaxun',
    children: [
      {
        id: 21,
        name: '订单查询',
        url: '/dataCenter/orderList',
      },
      {
        id: 24,
        name: '骑士查询',
        url: '/dataCenter/transporterList',
      },
      {
        id: 22,
        name: '商家查询',
        url: '/dataCenter/supplierList',
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
