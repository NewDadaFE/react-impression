import React from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

const options = {
  title: {
    text: '员工件数统计',
    subtext: '每日加工件数',
    x: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  series: [
    {
      name: '件数分布',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '400以上' },
        { value: 310, name: '300-400' },
        { value: 234, name: '200-300' },
        { value: 135, name: '100-200' },
        { value: 1548, name: '小于100' },
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

export default class pieChart extends React.Component {
  componentDidMount() {
    let chart = echarts.init(document.getElementById('pie-chart'))
    chart.setOption(options)
  }

  render() {
    return <div id='pie-chart' style={{ width: 400, height: 400 }} />
  }
}
