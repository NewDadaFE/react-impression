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

**固定项 table**

```js
const columns = [
  {
    prop: 'code',
    label: '编码',
    width: 120,
    fixed: 'left',
    render: code => {
      return <a href="javascript:void(0)">{code}</a>
    },
  },
  { prop: 'address', label: '地址', width: 160 },
  { prop: 'num', label: '金额', width: 120, fixed: 'right' },
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
;<Table columns={columns} data={data} scroll={{ x: 900 }} stripe fixed />
```

### 变更记录

v2.0.0

* 新增 stripe 斑马线 table 属性
* 新增 scroll 滑动 table 属性，当设置条目宽度，并且条目过多时使用，格式为{x:number,y:number}，其中 x 为横向最大宽度，y 为纵向最大宽度
