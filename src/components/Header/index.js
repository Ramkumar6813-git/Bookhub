import {Component} from 'react'
import {HeaderContainer, WebsiteLogo, Button, MenuBar} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <WebsiteLogo src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png" />
        <Button>
          <MenuBar src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702134624/nev9clnfx9qked8blhig.png" />
        </Button>
      </HeaderContainer>
    )
  }
}

export default Header
