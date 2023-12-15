import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import BookShelves from './components/BookShelves'
import BookDetails from './components/BookDetails'
import ThemeContext from './context/ThemeContext'
import PageNotFound from './components/PageNotFound'

import './App.css'

// use the below bookshelvesList for rendering read status of book items in Bookshelves Route

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/login"
              component={LoginForm}
              toggleTheme={this.toggleTheme}
            />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/book-hub/books/:bookId"
              component={BookDetails}
            />
            <ProtectedRoute exact path="/shelf" component={BookShelves} />
            <ProtectedRoute path="/not-found" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
