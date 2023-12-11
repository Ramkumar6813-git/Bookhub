import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BookShelvesBgContainer = styled.div`
  background-color: #f5f7fa;
  background-size: cover;
  height: 100vh;
`
export const BookShelvesMainContainer = styled.div`
  padding: 20px;
`
export const TagLinksSection = styled.div``
export const BookSearchDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;
  width: 80%;
  max-width: 350px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`
export const SearchInput = styled.input`
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  width: 100%;
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
`
export const BookShelvesButtonsDiv = styled.div``
export const Heading = styled.h1`
  font-size: 18px;
  margin: 15px 0px;
`
export const BookShelvesButtonsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const BookShelvesButtonItem = styled.li``
export const BookShelvesButton = styled.button`
  padding: 4px 20px;
  border-radius: 16px;
  border: 1px solid blue;
  margin-right: 20px;
  margin-bottom: 15px;
  background-color: transparent;
`

export const DisplayBooksSection = styled.div``
export const BooksList = styled.ul``
export const BookItem = styled.li``
export const BookCoverPic = styled.img``
export const BookDetailsSection = styled.div``
export const BookTitle = styled.h1`
  font-size: 18px;
`
export const BookAuthor = styled.p``
export const BookRating = styled.p``
export const BookStatus = styled.p``
