### 示例

**基本用法**

```js
const onCheck = checkedKeys => {
  console.log('onCheck', checkedKeys)
}
;<TreeSelect
  defaultExpandedKeys={['0-0-0', '0-0-1']}
  defaultCheckedKeys={['0-0-0', '0-0-1']}
  onCheck={this.onCheck}
>
  <TreeNode title="parent 1" key="0-0">
    <TreeNode title="parent 1-0" key="0-0-0" disabled>
      <TreeNode title="叶子结点" key="0-0-0-0" />
      <TreeNode title="叶子结点" key="0-0-0-1" />
    </TreeNode>
    <TreeNode title="parent 1-1" key="0-0-1">
      <TreeNode
        title={<span style={{ color: '#1c89ea' }}>0-0-1-0</span>}
        key="0-0-1-0"
      />
    </TreeNode>
  </TreeNode>
</TreeSelect>
```
