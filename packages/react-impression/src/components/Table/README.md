### 示例

**基本用法**

```js
const columns = [
  { prop: 'code', label: '编码' },
  { prop: 'address', label: '地址' },
  { prop: 'num', label: '金额' },
  { prop: 'phone', label: '电话' },
  { prop: 'creatTime', label: '创建时间' },
  { prop: 'status', label: '状态' },
  {
    prop: 'id',
    label: '操作',
    render: (value, index, current) => {
      return (
        <div className="text-center">
          <a
            href="#"
            style={{ paddingRight: '16px', color: '#276BF2', height: '18px' }}
            onClick={() => {
              console.log(value, index, current)
            }}
          >
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table columns={columns} data={data} />
```

**斑马线表格**

```js
const columns = [
  { prop: 'code', label: '编码' },
  { prop: 'address', label: '地址' },
  { prop: 'num', label: '金额' },
  { prop: 'phone', label: '电话' },
  { prop: 'creatTime', label: '创建时间' },
  { prop: 'status', label: '状态' },
  {
    prop: 'id',
    label: '操作',
    render: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: '16px', color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table columns={columns} data={data} stripe />
```

**带边框表格**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    render: code => {
      return <a href="#">{code}</a>
    },
  },
  { prop: 'address', label: '地址' },
  { prop: 'num', label: '金额' },
  { prop: 'phone', label: '电话' },
  { prop: 'creatTime', label: '创建时间' },
  { prop: 'status', label: '状态' },
  {
    prop: 'id',
    label: '操作',
    render: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: '16px', color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table columns={columns} data={data} border stripe />
```

**设定宽度 条目过多 表格**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    render: code => {
      return <a href="#">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 120 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '操作',
    width: 202,
    render: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: '16px', color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table columns={columns} data={data} scroll={{ x: 900 }} stripe />
```

**条目过多 有固定项 表格**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    fixed: 'left',
    width: 120,
    render: code => {
      return <a href="#">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 100 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '操作',
    width: 202,
    fixed: 'right',
    render: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: '16px', color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table
  columns={columns}
  data={data}
  scroll={{ x: 900 }}
  stripe
  border
  fixed
  tooltip
/>
```

**基础多选 表格**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    fixed: 'left',
    render: code => {
      return <a href="#">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 120 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '操作',
    width: 202,
    fixed: 'right',
    render: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: '16px', color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: '16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this)
    this.handelOnSelect = this.handelOnSelect.bind(this)
    this.handlePage = this.handlePage.bind(this)
    this.state = {
      activePage: 1,
    }
  }
  handlePage(val) {
    console.log(val)
    this.setState({ activePage: val })
  }
  handelOnSelect(status, index, item) {
    console.log(status, index, item)
  }
  handleOnSelectAll(checkAll, selectedRowKeys) {
    console.log(checkAll, selectedRowKeys)
  }
  render() {
    const { activePage } = this.state
    const rowSelection = {
      onSelect: this.handelOnSelect,
      onSelectAll: this.handleOnSelectAll,
    }
    const pagination = {
      scope: 4,
      onSelect: this.handlePage,
      totalPage: 50,
      activePage: activePage,
    }
    return (
      <div>
        <div className="text-right" style={{ marginBottom: '11px' }}>
          <Input type="search" placeholder="选择日期" size="sm" />
        </div>
        <Table
          columns={columns}
          data={data}
          scroll={{ x: 900 }}
          stripe
          rowSelection={rowSelection}
          pagination={pagination}
          fixed
        />
      </div>
    )
  }
}

;<DefaultExample />
```

**可控多选 表格**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    render: code => {
      return <a href="#">{code}</a>
    },
  },
  {
    prop: 'address',
    label: '地址',
    width: 160,
    render: address => {
      return <Input size="sm" defaultValue={address} />
    },
  },
  { prop: 'num', label: '金额', width: 120 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '操作',
    fixed: 'right',
    width: 202,
    render: (value, index, current) => {
      return (
        <div>
          <a
            href="#"
            style={{ paddingRight: '16px', color: '#276BF2', height: '18px' }}
            onClick={() => {
              console.log(value, index, current)
            }}
          >
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ padding: '0 16px', color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    },
  },
]
const data = [
  {
    id: 1,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this)
    this.handelOnSelect = this.handelOnSelect.bind(this)
    this.handlePage = this.handlePage.bind(this)
    this.state = {
      selectedRowKeys: [0, 1],
      activePage: 2,
    }
  }

  handleChange(selectedRowKeys) {
    console.log(selectedRowKeys)
  }
  handlePage(val) {
    console.log(val)
  }
  handelOnSelect(status, index, item) {
    console.log(status, index, item)
    if (status) {
      const { selectedRowKeys } = this.state
      this.setState({
        selectedRowKeys: [...selectedRowKeys, index],
      })
    } else {
      const { selectedRowKeys } = this.state
      this.setState({
        selectedRowKeys: selectedRowKeys.filter(item => Number(item) !== index),
      })
    }
  }
  handleOnSelectAll(checkAll, selectedRowKeys) {
    if (checkAll) {
      this.setState({
        selectedRowKeys: [],
      })
    } else {
      this.setState({
        selectedRowKeys: data.map((item, index) => index),
      })
    }
  }
  render() {
    const { selectedRowKeys, activePage } = this.state
    const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: this.handleChange,
      onSelect: this.handelOnSelect,
      onSelectAll: this.handleOnSelectAll,
      fixed: true,
    }
    const pagination = {
      scope: 4,
      onSelect: this.handlePage,
      totalPage: 50,
      activePage: activePage,
    }
    return (
      <Table
        columns={columns}
        data={data}
        scroll={{ x: 900 }}
        stripe
        rowSelection={rowSelection}
        pagination={pagination}
        fixed
      />
    )
  }
}

;<DefaultExample />
```

### 变更记录

v2.0.0

* 新增 columns 表格配置项属性。具体用法参照例子。其中，prop 为 dataIndex，label 为表头文字，width 为表格项宽度，没有 width 属性但是有 fixed 属性时，fixed 列默认宽度为 80，否则为自适应，fixed 可选值为 left/right，render 为函数，可自定义渲染项，返回值为 prop 的值，index，和当前页码
* 新增 rowSelection 多选表格配置项属性。具体用法参照例子。其中 selectedRowKeys 和 onChange 必须同时为可控组件，onSelect 为手动单选／取消单选触发事件，返回参数为 checkbox 状态(true/false)，index，选中项数据 ，onSelectAll 为手动全选／取消全选触发事件，返回参数为全选 checkbox 状态(true/false)，selectedRowKeys，fixed 为固定左侧参数
* 新增 fixed 固定表格属性。columns 中存在 fixed 时，此参数为必传参数
