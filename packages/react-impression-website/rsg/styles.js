const theme = require('./theme')

const color = {
  light: '#d0d0d0',
  lightGray: '#a7b1c2',
  lightDark: '#22252a',
  dark: '#191b1f',
  darker: '#141619',
}

module.exports = {
  StyleGuide: {
    logo: {
      backgroundImage: 'url(logo.png)',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: color.lightDark,
      borderBottom: `1px solid ${color.darker}`,
    },
  },
  Logo: {
    logo: {
      color: color.light,
    },
  },
  ComponentsList: {
    list: {
      paddingLeft: 0,
    },
    item: {
      margin: 0,
      '& > a': {
        display: 'block',
        padding: '8px 0 8px 16px !important',
        '&:link, &:visited': {
          color: color.lightGray,
        },
        '&:hover, &:active': {
          color: color.light,
          backgroundColor: color.dark,
          boxShadow: `inset 0 0 1px ${color.darker}`,
          cursor: 'pointer',
        },
      },
      '& > ul a': {
        paddingLeft: '32px !important',
      },
    },
  },
  ReactComponent: {
    tabButtons: {
      '& button': {
        fontSize: 24,
        cursor: 'pointer',
        '&:focus': {
          isolate: false,
          outline: 'none !important',
          color: theme.color.base,
        },
        '&:hover': {
          isolate: false,
          outline: 'none !important',
          color: theme.color.linkHover,
        },
      },
    },
  },
}
