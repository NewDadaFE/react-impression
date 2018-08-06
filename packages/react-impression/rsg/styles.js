module.exports = {
  StyleGuide: {
    logo: {
      backgroundImage: 'url(/logo.png)',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#22252a',
      borderBottom: '1px solid #141619',
    },
  },
  Logo: {
    logo: {
      color: '#d0d0d0',
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
          color: '#a7b1c2',
        },
        '&:hover, &:active': {
          color: '#d0d0d0',
          backgroundColor: '#191b1f',
          boxShadow: 'inset 0 0 1px #141619',
          cursor: 'pointer',
        },
      },
      '& > ul a': {
        paddingLeft: '32px !important',
      },
    },
  },
  ReactComponent: {
    tabs: {
      paddingTop: 12,
      paddingRight: 24,
      paddingBottom: 12,
      paddingLeft: 24,
      backgroundColor: '#F6F7FB',
    },
    tabButtons: {
      '& button': {
        borderBottomWidth: 0,
        textTransform: 'uppercase',
      },
    },
  },
}
