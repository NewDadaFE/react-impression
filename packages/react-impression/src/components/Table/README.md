### 示例

**基本使用**

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
    label: '编辑',
    render: id => {
      return (
        <div>
          <a>查看</a>
          <a>合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
;<Table columns={columns} data={data} />
```

**斑马线 table**

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
    label: '编辑',
    render: id => {
      return (
        <div>
          <a>查看</a>
          <a>合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
;<Table columns={columns} data={data} stripe />
```

**border table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
    },
  },
  { prop: 'address', label: '地址' },
  { prop: 'num', label: '金额' },
  { prop: 'phone', label: '电话' },
  { prop: 'creatTime', label: '创建时间' },
  { prop: 'status', label: '状态' },
  {
    prop: 'id',
    label: '编辑',
    render: id => {
      return (
        <div>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
;<Table columns={columns} data={data} border stripe />
```

**设定宽度 条目过多 table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 120 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '编辑',
    width: 202,
    render: id => {
      return (
        <div>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
;<Table columns={columns} data={data} scroll={{ x: 900 }} stripe />
```

**条目过多 有固定项 table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    fixed: 'left',
    width: 120,
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', fixed: 'right', width: 100 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', fixed: 'left', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '编辑',
    width: 202,
    render: id => {
      return (
        <div>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">合并</a>
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
]
;<Table columns={columns} data={data} scroll={{ x: 900 }} stripe fixed border />
```

**基础多选 table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 120 },
  { prop: 'phone', label: '电话', width: 120 },
  { prop: 'creatTime', label: '创建时间', width: 120 },
  { prop: 'status', label: '状态', width: 120 },
  {
    prop: 'id',
    label: '编辑',
    width: 202,
    render: id => {
      return (
        <div>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this)
    this.handelOnSelect = this.handelOnSelect.bind(this)
  }
  handelOnSelect(status, index, item) {
    console.log(status, index, item)
  }
  handleOnSelectAll(checkAll, selectedRowKeys) {
    console.log(checkAll, selectedRowKeys)
  }
  render() {
    const rowSelection = {
      onSelect: this.handelOnSelect,
      onSelectAll: this.handleOnSelectAll,
    }
    return (
      <Table
        columns={columns}
        data={data}
        scroll={{ x: 900 }}
        stripe
        rowSelection={rowSelection}
      />
    )
  }
}

;<DefaultExample />
```

**带 selectedRowKeys 可控制 多选 table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
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
    label: '编辑',
    width: 202,
    render: id => {
      return (
        <div>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">合并</a>
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
    // comment: '',
    status: '正常',
  },
  {
    id: 2,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
  {
    id: 3,
    code: 'JD010234',
    address: '京东万里站站长',
    num: 201003.0,
    phone: 13820180309,
    creatTime: '2018-03-09',
    // comment: '',
    status: '正常',
  },
]
class DefaultExample extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleOnSelectAll = this.handleOnSelectAll.bind(this)
    this.handelOnSelect = this.handelOnSelect.bind(this)
    this.state = {
      selectedRowKeys: [0, 1],
    }
  }

  handleChange(selectedRowKeys) {
    console.log(selectedRowKeys)
  }
  handelOnSelect(status, index, item) {
    if (status) {
      const { selectedRowKeys } = this.state
      this.setState(
        {
          selectedRowKeys: [...selectedRowKeys, index],
        },
        () => console.log(this.state)
      )
    } else {
      const { selectedRowKeys } = this.state
      this.setState(
        {
          selectedRowKeys: selectedRowKeys.filter(
            item => Number(item) !== index
          ),
        },
        () => console.log(this.state)
      )
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
    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys: selectedRowKeys,
      onChange: this.handleChange,
      onSelect: this.handelOnSelect,
      onSelectAll: this.handleOnSelectAll,
      fixed: true,
    }
    return (
      <Table
        columns={columns}
        data={data}
        scroll={{ x: 900 }}
        stripe
        rowSelection={rowSelection}
      />
    )
  }
}

;<DefaultExample />
```

### 变更记录

v2.0.0

* 新增 stripe 斑马线 table 属性
* 新增 scroll 滑动 table 属性，当设置条目宽度，并且条目过多时使用，格式为{x:number,y:number}，其中 x 为横向最大宽度，y 为纵向最大宽度
