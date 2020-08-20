```javascript
const fruitList = [
  {
    label:
      '苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果苹果',
    key: 1,
    name: 'Apple',
  },
  { label: '栗子1', key: 2, name: 'Pear1' },
  { label: '栗子2', key: 3, name: 'Pear2' },
  { label: '栗子3', key: 4, name: 'Pear3' },
  { label: '栗子4', key: 5, name: 'Pear4' },
  { label: '栗子5', key: 6, name: 'Pear5' },
  { label: '栗子6', key: 7, name: 'Pear6' },
  { label: '栗子7', key: 8, name: 'Pear7' },
  { label: '栗子8', key: 9, name: 'Pear8' },
  { label: '栗子9', key: 10, name: 'Pear9' },
  { label: '栗子10', key: 11, name: 'Pear10' },
]
;<Search
  onSearch={keyword => {
    return new Promise(resolve => {
      const result = fruitList.filter(item => item.label.includes(keyword))
      resolve(result)
    })
  }}
  onSelect={console.log}
/>
```
