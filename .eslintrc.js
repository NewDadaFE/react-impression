module.exports = {
  extends: 'react-impression',
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
