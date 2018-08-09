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
      backgroundImage: 'url(/logo.png)',
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
  Table: {
    cell: {
      '&:nth-child(3)': {
        width: '35%',
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        verticalAlign: 'top',
        fontSize: 13,
      },
      '& p': {
        marginBottom: `5px !important`,
      },
      '& div[class*="para"]': {
        marginBottom: `5px !important`,
      }
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
