import {Component} from 'react'
import {MdCancel} from 'react-icons/md'
import {
  HeaderContainer,
  WebsiteLogo,
  Button,
  MenuBar,
  NavLinksList,
  HomeNavLink,
  BookShelvesNavLink,
  LogoutButton,
  CancelButton,
} from './styledComponents'

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
      <>
        <HeaderContainer>
          <WebsiteLogo src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png" />
          <Button onClick={this.toggleNavLinks}>
            <MenuBar src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702134624/nev9clnfx9qked8blhig.png" />
          </Button>
        </HeaderContainer>
        {showNavLinks && (
          <NavLinksList>
            <HomeNavLink>Home</HomeNavLink>
            <BookShelvesNavLink>Book Shelves</BookShelvesNavLink>
            <LogoutButton>Logout</LogoutButton>
            <CancelButton onClick={this.toggleNavLinks}>
              <MdCancel />
            </CancelButton>
          </NavLinksList>
        )}
      </>
    )
  }
}

export default Header
