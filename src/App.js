import React, { Component } from 'react'
import AppBar from './Components/AppBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Termos from './Termos'
import Questionario from './Questionario'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#445aa4",
      main: "#003175",
      dark: "#000a49"
    }
  }
})

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <AppBar />
            <div>
              <Route exact path='/' component={Termos} />
              <Route path='/questionario' component={Questionario} />
            </div>
            <div>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
