import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  background-color: #fff;
  position: fixed;
  width: 100vw;
  top: 0;
  @media screen and (min-width: 768px) {
    padding: 20px 7vw;
  }
`
export const WebsiteLogo = styled.img``
export const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LgNavLinksList = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const MenuBar = styled.img`
  width: 25px;
`
export const NavLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  list-style-type: none;
  padding: 15px 0px;
  background-color: #fff;
  position: fixed;
  top: 60px;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HomeNavLink = styled.li`
  margin: 0 15px;
`
export const BookShelvesNavLink = styled.li`
  margin: 0 15px;
`
export const LogoutButton = styled.button`
  margin: 0 15px;
  padding: 8px 18px;
  border: none;
  border-radius: 4px;
  color: #f8fafc;
  background-color: #0284c7;
`
export const CancelButton = styled.button`
  display: flex;
  padding: auto;
  margin: 0 14px;
  font-size: 28px;
  border: none;
  background-color: transparent;
`
