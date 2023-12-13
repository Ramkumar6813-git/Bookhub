import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BookShelvesBgContainer = styled.div`
  background-color: #f5f7fa;
  background-size: cover;
  min-height: 100vh;
  margin-top: 60px;
`
export const BookShelvesMainContainer = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 25px 7vw;
    margin-top: 60px;
  }
`
export const TagLinksSection = styled.div`
  @media (min-width: 768px) {
    margin-right: 25px;
  }
`
export const BookSearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #cbd5e1;
  width: 80%;
  max-width: 350px;
  border-radius: 4px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 3px 15px;
  font-size: 15px;
  color: #94a3b8;
`

export const SearchButton = styled.button`
  height: 40px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  color: #94a3b8;
`

export const BookShelvesButtonsDiv = styled.div`
  @media (min-width: 768px) {
    background-color: #fff;
    height: 100vh;
    padding: 15px 20px;
    width: 20vw;
    position: fixed;
    top: 90px;
  }
`
export const Heading = styled.h1`
  font-size: 18px;
  margin: 15px 0px;
  color: #334155;
`
export const BookShelvesButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const BookShelvesButtonItem = styled.li``
export const BookShelvesButton = styled.button`
  padding: 5px 20px;
  border-radius: 16px;
  border: 1px solid blue;
  margin: 0px 15px 10px 0px;
  background-color: transparent;
  border: 1px solid #0284c7;
  color: #0284c7;
  font-weight: bold;
  font-size: 15px;
  @media (min-width: 768px) {
    border: none;
    padding: 0;
    text-align: left;
    margin: 5px 0px;
    color: #475569;
    font-weight: 500;
  }
`

export const DisplayBooksSection = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    margin-left: 20vw;
  }
`

export const LgDeviceSearchInputSection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const LgDeviceHeading = styled.h1`
  padding-top: 8px;
  font-size: 22px;
  margin-bottom: 10px;
`
export const LgBookSearchDiv = styled.div`
  height: 35px;
  display: flex;
  max-width: 320px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  font-size: 15px;
  color: #94a3b8;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LgSearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 0 15px 0 15px;
  font-size: 15px;
  border-radius: 6px;
  height: 100%;
`
export const LgSearchButton = styled.button`
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  border-radius: 6px;
  color: #94a3b8;
`

export const BooksList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
  }
`
export const BookItem = styled.li`
  display: flex;
  flex-direction: row;
  margin: 15px 15px 15px 0px;
  margin-right: 15px;
  width: 260px;
  flex-grow: 1;
  @media (min-width: 768px) {
    width: 280px;
  }
`
export const BookCoverPic = styled.img`
  width: 130px;
  height: 160px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 120px;
    height: 140px;
  }
`
export const BookDetailsSection = styled.div`
  padding: 16px;
  padding-right: 0px;
  @media (min-width: 768px) {
  }
`
export const BookTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 8px;
  color: #334155;
`
export const BookAuthor = styled.p`
  font-size: 14px;
  margin: 5px 0px;
  color: #475569;
  font-weight: 500;
`
export const BookRating = styled.p`
  font-size: 14px;
  margin: 5px 0px;
  color: #475569;
  font-weight: 500;
`
export const Star = styled.span`
  padding: 0px 5px 0px 3px;
  text-align: center;
  color: #fbbf24;
`
export const BookStatus = styled.p`
  font-size: 14px;
`
export const BookStatusText = styled.span`
  color: #0284c7;
  font-size: 15px;
  font-weight: 500;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    margin: 40px 0px 0px 20vw;
    padding-bottom: 30px;
  }
`
export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`
export const Contact = styled.p`
  margin-top: 10px;
`
