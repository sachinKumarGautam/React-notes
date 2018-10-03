import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'
import CssBaseline from '@material-ui/core/CssBaseline'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#800080',
      main: '#800080',
      dark: '#800080'
    },
    secondary: {
      light: '#800080',
      main: '#800080',
      dark: '#800080'
    }
  },
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '0 0 6px 0 rgba(224, 224, 224, 0.72)'
      }
    }
  }
})

function withRoot (Component) {
  function WithRoot (props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
