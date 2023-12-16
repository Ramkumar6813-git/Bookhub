import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {MdCancel, MdMenu} from 'react-icons/md'
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
          const bgColor = isDarkTheme
            ? 'dark-theme-bg-color'
            : 'light-theme-bg-color'

          const textColor = isDarkTheme
            ? 'dark-theme-text-color'
            : 'light-theme-text-color'
          const iconColor = isDarkTheme ? '#000000' : '#ffffff'

          const changeTheme = () => {
            toggleTheme()
          }

          return (
            <div className="header">
              <nav className={`nav-bar-container ${bgColor}`}>
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
                  <MdMenu size={30} className={`menu-bar-icon ${textColor}`} />
                </button>
                <div className="lg-device-nav-links">
                  <Link to="/" className="link">
                    <p className={` ${textColor}`}>Home</p>
                  </Link>
                  <Link to="/shelf" className="link">
                    <p className={`${textColor}`}>BookShelves</p>
                  </Link>
                  <button
                    type="button"
                    className="theme-button"
                    onClick={changeTheme}
                  >
                    <FiSun size={30} style={{color: `${iconColor}`}} />
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
                <div className={`sm-device-nav-links ${bgColor}`}>
                  <Link to="/" className="link">
                    <p className={`${textColor}`}>Home</p>
                  </Link>
                  <Link to="/shelf" className="link">
                    <p className={`${textColor}`}>BookShelves</p>
                  </Link>
                  <button
                    type="button"
                    className="theme-button"
                    onClick={changeTheme}
                  >
                    <FiSun size={25} style={{color: `${iconColor}`}} />
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
