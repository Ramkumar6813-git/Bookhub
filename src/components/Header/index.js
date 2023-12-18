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
    const {history} = this.props
    Cookies.remove('jwt_token')
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
            <div className={` ${bgColor}`}>
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
                  <MdMenu size={30} className={`menu-bar-icon ${textColor}`} />
                </button>
                <ul className="lg-device-nav-links-list">
                  <Link to="/" className="link">
                    <li className={` ${textColor}`}>Home</li>
                  </Link>
                  <Link to="/shelf" className="link">
                    <li className={`${textColor}`}>BookShelves</li>
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
                </ul>
              </nav>
              {showNavLinks && (
                <ul className={`sm-device-nav-links-list ${bgColor}`}>
                  <Link to="/" className="link">
                    <li className={`${textColor}`}>Home</li>
                  </Link>
                  <Link to="/shelf" className="link">
                    <li className={`${textColor}`}>BookShelves</li>
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
                </ul>
              )}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
