### 示例

**columns 配置 基本用法**

```js
const columns = [
  {
    prop: data => `${data.code.id}`,
    Header: (
      <span id="recipe" data-type="title">
        编码
      </span>
    ),
  },
  { prop: data => `${data.address.detail.target}`, Header: '地址' },
  { prop: 'num', Header: '金额' },
  { prop: 'phone', Header: '电话' },
  { prop: 'creatTime', Header: '创建时间' },
  { prop: 'status', Header: '状态' },
  {
    prop: 'id',
    Header: '操作',
    Cell: value => {
      return (
        <div className="text-center">
          <a
            href="#"
            style={{ paddingRight: 16, color: '#276BF2', height: '18px' }}
            onClick={() => {
              console.log(value)
            }}
          >
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
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
    code: {
      id: 'JD010234',
    },
    address: {
      detail: {
        target: '京东万里站站长',
      },
    },
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
  {
    id: 2,
    code: {
      id: 'JD010234',
    },
    address: {
      detail: {
        target: '京东万里站站长',
      },
    },
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    status: '正常',
  },
]
;<Table columns={columns} data={data} />
```

**TableColumn 基本用法**

```js
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
;<Table data={data}>
  <TableColumn prop="code" Header={<span>编码</span>} />
  <TableColumn prop="address" Header="地址" />
  <TableColumn prop="num" Header="金额" />
  <TableColumn prop="phone" Header="电话" />
  <TableColumn prop="creatTime" Header="创建时间" />
  <TableColumn prop="status" Header="状态" />
  <TableColumn
    prop="id"
    Header={() => {
      return <div>自定义</div>
    }}
    Cell={value => {
      return (
        <div className="text-center">
          <a
            href="#"
            style={{ paddingRight: 16, color: '#276BF2', height: '18px' }}
            onClick={() => {
              console.log(value)
            }}
          >
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    }}
  />
</Table>
```

**斑马线表格**

```js
const columns = [
  { prop: 'code', Header: '编码' },
  { prop: 'address', Header: '地址' },
  { prop: 'num', Header: '金额' },
  { prop: 'phone', Header: '电话' },
  { prop: 'creatTime', Header: '创建时间' },
  { prop: 'status', Header: '状态' },
  {
    prop: 'id',
    Header: '操作',
    Cell: item => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: 16, color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
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
    Header: '编码',
    Cell: item => {
      return <a href="#">{item.code}</a>
    },
  },
  { prop: 'address', Header: '地址' },
  { prop: 'num', Header: '金额' },
  { prop: 'phone', Header: '电话' },
  { prop: 'creatTime', Header: '创建时间' },
  { prop: 'status', Header: '状态' },
  {
    prop: 'id',
    Header: '操作',
    Cell: item => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: 16, color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
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
    Header: '编码',
    width: 120,
    Cell: item => {
      return <a href="#">{item.code}</a>
    },
  },
  { prop: 'address', Header: '地址', width: 160 },
  { prop: 'num', Header: '金额', width: 120 },
  { prop: 'phone', Header: '电话', width: 120 },
  { prop: 'creatTime', Header: '创建时间', width: 120 },
  { prop: 'status', Header: '状态', width: 120 },
  {
    prop: 'id',
    Header: '操作',
    width: 202,
    Cell: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: 16, color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
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
;<Table data={data} scroll={{ x: 900 }} stripe border>
  <TableColumn
    prop="code"
    Header="编码"
    fixed="left"
    width={120}
    Cell={item => {
      return <a href="#">{item.code}</a>
    }}
  />
  <TableColumn prop="address" Header="地址" width={160} />
  <TableColumn prop="num" Header="金额" width={100} />
  <TableColumn prop="phone" Header="电话" width={120} />
  <TableColumn prop="creatTime" Header="创建时间" width={120} />
  <TableColumn prop="status" Header="状态" width={120} />
  <TableColumn
    prop="id"
    Header="操作"
    width={202}
    fixed="right"
    Cell={item => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: 16, color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
            删除
          </a>
        </div>
      )
    }}
  />
</Table>
```

**基础多选 表格**

```js
const columns = [
  {
    prop: 'code',
    Header: '编码',
    width: 120,
    fixed: 'left',
    Cell: item => {
      return <a href="#">{item.code}</a>
    },
  },
  { prop: 'address', Header: '地址', width: 160 },
  { prop: 'num', Header: '金额', width: 120 },
  { prop: 'phone', Header: '电话', width: 120 },
  { prop: 'creatTime', Header: '创建时间', width: 120 },
  { prop: 'status', Header: '状态', width: 120 },
  {
    prop: 'id',
    Header: '操作',
    width: 202,
    fixed: 'right',
    Cell: id => {
      return (
        <div className="text-center">
          <a href="#" style={{ paddingRight: 16, color: '#276BF2' }}>
            编辑
          </a>
          <span style={{ color: '#E1E5EC' }}>|</span>
          <a href="#" style={{ paddingLeft: 16, color: '#276BF2' }}>
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
    Header: '编码',
    width: 120,
    Cell: item => {
      return <a href="#">{item.code}</a>
    },
  },
  {
    prop: 'address',
    Header: '地址',
    width: 160,
    Cell: item => {
      return <Input size="sm" defaultValue={item.address} />
    },
  },
  { prop: 'num', Header: '金额', width: 120 },
  { prop: 'phone', Header: '电话', width: 120 },
  { prop: 'creatTime', Header: '创建时间', width: 120 },
  { prop: 'status', Header: '状态', width: 120 },
  {
    prop: 'id',
    Header: '操作',
    fixed: 'right',
    width: 202,
    Cell: (value, index, current) => {
      return (
        <div>
          <a
            href="#"
            style={{ paddingRight: 16, color: '#276BF2', height: '18px' }}
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

* 支持 TableColumn/columns 两种用法。
* 新增 columns 表格配置项属性。具体用法参照例子。其中，prop 为 dataIndex，Header 为表头渲染，width 为表格项宽度，没有 width 属性但是有 fixed 属性时，fixed 列默认宽度为 80，否则为自适应，fixed 可选值为 left/right，Cell 为 td 渲染，可自定义渲染项，返回值为 prop 的值，当前项
* 新增 rowSelection 多选表格配置项属性。具体用法参照例子。其中 selectedRowKeys 和 onChange 必须同时为可控组件，onSelect 为手动单选／取消单选触发事件，返回参数为 checkbox 状态(true/false)，index，选中项数据 ，onSelectAll 为手动全选／取消全选触发事件，返回参数为全选 checkbox 状态(true/false)，selectedRowKeys，fixed 为固定左侧参数
