import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdCancel} from 'react-icons/md'
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

  render() {
    const {showNavLinks} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div className="header">
              <nav className="nav-bar-container">
                <img
                  className="website-logo"
                  src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png"
                  alt="website logo"
                />
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
                  <Link to="/book-shelves" className="link">
                    BookShelves
                  </Link>
                  <button type="button" className="theme-button">
                    <FiSun size={30} />
                  </button>
                  <button type="button" className="logout-btn">
                    Logout
                  </button>
                </div>
              </nav>
              {showNavLinks && (
                <div className="sm-device-nav-links">
                  <Link to="/" className="link">
                    Home
                  </Link>
                  <Link to="book-shelves" className="link">
                    BookShelves
                  </Link>
                  <button type="button" className="theme-button">
                    <FiSun size={25} />
                  </button>
                  <button type="button" className="logout-btn">
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

export default Header

// <HeaderContainer>
//   <NavLink to="/">
//     <WebsiteLogo src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png" />
//   </NavLink>
//   <LgNavLinksList>
//     <NavLink to="/">
//       <HomeNavLink>Home</HomeNavLink>
//     </NavLink>
//     <NavLink to="/book-shelves">
//       <BookShelvesNavLink>Book Shelves</BookShelvesNavLink>
//     </NavLink>
//     <LogoutButton>Logout</LogoutButton>
//   </LgNavLinksList>
//   <Button onClick={this.toggleNavLinks}>
//     <MenuBar src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702134624/nev9clnfx9qked8blhig.png" />
//   </Button>
// </HeaderContainer>
// {showNavLinks && (
//   <NavLinksList>
//     <NavLink to="/">
//       <HomeNavLink>Home</HomeNavLink>
//     </NavLink>
//     <NavLink to="/book-shelves">
//       <BookShelvesNavLink>Book Shelves</BookShelvesNavLink>
//     </NavLink>
//     <LogoutButton>Logout</LogoutButton>
//     <CancelButton onClick={this.toggleNavLinks}>
//       <MdCancel />
//     </CancelButton>
//   </NavLinksList>
// )}
