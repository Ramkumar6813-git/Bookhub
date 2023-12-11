import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  @media (min-width: 768px) {
    width: 100vw;
    position: fixed;
    top: 0;
  }
`
export const WebsiteLogo = styled.img``
export const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
`
export const MenuBar = styled.img`
  width: 20px;
`
