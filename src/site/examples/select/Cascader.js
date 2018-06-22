/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Select } from 'react-impression'

const provinceData = ['湖北', '湖南']
const cityData = {
  湖北: ['武汉', '宜昌', '恩施'],
  湖南: ['长沙', '岳阳', '湘潭'],
}

class Cascader extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cities: cityData[provinceData[0]],
      city: cityData[provinceData[0]][0],
    }
  }

  handleProvinceChange = val => {
    this.setState({
      cities: cityData[val],
      city: cityData[val][0],
    })
  }
  onCityChange = val => {
    this.setState({
      city: val,
    })
  }

  render() {
    const { cities } = this.state
    const { Option } = Select
    return (
      <div>
        <Select
          defaultValue={provinceData[0]}
          onChange={this.handleProvinceChange}
        >
          {provinceData.map(province => (
            <Option key={province} label={province} value={province} />
          ))}
        </Select>
        <Select
          value={this.state.city}
          onChange={this.onCityChange}
          className='offset-l-lg'
        >
          {cities.map(city => <Option key={city} label={city} value={city} />)}
        </Select>
      </div>
    )
  }
}
/* sourceCode:end */

Cascader.title = 'select 联动的例子'
Cascader.desc = `> 例子中是省和市之间的切换`

export default Cascader
