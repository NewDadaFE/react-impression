const theme = require('./theme')

const color = {
  lightest: 'rgba(255, 255, 255, 0.1)',
  light: '#fff',
  lightGray: '#919CB3',
  lightDark: '#2F3A4F',
  dark: '#191b1f',
  darker: '#141619',
}

module.exports = {
  StyleGuide: {
    logo: {
      padding: '22px 22px 22px 60px',
      backgroundImage: 'url(logo.png)',
      backgroundPosition: 20,
      backgroundSize: 30,
      backgroundRepeat: 'no-repeat',
      backgroundColor: color.lightDark,
      borderBottom: `1px solid ${color.lightest}`,
    },
  },
  Logo: {
    logo: {
      color: color.light,
      fontSize: 16,
      lineHeight: 1,
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
          // backgroundColor: color.lightest,
          // boxShadow: `inset 0 0 1px ${color.darker}`,
          cursor: 'pointer',
        },
      },
      '& > ul a': {
        paddingLeft: '32px !important',
      },
    },
  },
  Table: {
    cell: {
      '&:last-child': {
        width: 'auto',
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        verticalAlign: 'middle',
        fontSize: 13,
      },
      '& p': {
        marginBottom: `5px !important`,
      },
      '& div[class*="para"]': {
        marginBottom: `5px !important`,
      },
    },
  },
  // ReactComponent: {
  //   tabs: {
  //     paddingTop: 12,
  //     paddingRight: 24,
  //     paddingBottom: 12,
  //     paddingLeft: 24,
  //     backgroundColor: '#F6F7FB',
  //   },
  //   tabButtons: {
  //     '& button': {
  //       borderBottomWidth: 0,
  //       textTransform: 'uppercase',
  //     },
  //   },
  // },
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
