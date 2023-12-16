import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {MdCancel} from 'react-icons/md'
import Cookies from 'js-cookie'
import {FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Header extends Component {
  state = {
    showNavLinks: false,
  }

  toggleNavLinks = () => {
    this.setState(prev => ({
      showNavLinks: !prev.showNavLinks,
    }))
  }

  logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {showNavLinks} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const changeTheme = () => {
            toggleTheme()
          }
          return (
            <div className="header">
              <nav className="nav-bar-container">
                <Link to="/" className="link">
                  <img
                    className="website-logo"
                    src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png"
                    alt="website logo"
                  />
                </Link>
                <button
                  type="button"
                  className="menu-bar"
                  onClick={this.toggleNavLinks}
                >
                  <img
                    src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702134624/nev9clnfx9qked8blhig.png"
                    className="menu-bar-icon"
                    alt="menu"
                  />
                </button>
                <div className="lg-device-nav-links">
                  <Link to="/" className="link">
                    Home
                  </Link>
                  <Link to="/shelf" className="link">
                    BookShelves
                  </Link>
                  <button
                    type="button"
                    className="theme-button"
                    onClick={changeTheme}
                  >
                    <FiSun size={30} />
                  </button>
                  <button
                    type="button"
                    className="logout-btn"
                    onClick={this.logoutUser}
                  >
                    Logout
                  </button>
                </div>
              </nav>
              {showNavLinks && (
                <div className="sm-device-nav-links">
                  <Link to="/" className="link">
                    Home
                  </Link>
                  <Link to="/shelf" className="link">
                    BookShelves
                  </Link>
                  <button
                    type="button"
                    className="theme-button"
                    onClick={changeTheme}
                  >
                    <FiSun size={25} />
                  </button>
                  <button
                    type="button"
                    className="logout-btn"
                    onClick={this.logoutUser}
                  >
                    Logout
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={this.toggleNavLinks}
                  >
                    <MdCancel size={30} />
                  </button>
                </div>
              )}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
