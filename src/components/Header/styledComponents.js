import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
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
  font-size: 23px;
  border: none;
  background-color: transparent;
`
