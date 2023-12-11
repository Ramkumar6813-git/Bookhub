import {Component} from 'react'

import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'

import Header from '../Header'

import {
  BookShelvesBgContainer,
  BookShelvesMainContainer,
  TagLinksSection,
  BookSearchDiv,
  SearchInput,
  SearchButton,
  BookShelvesButtonsDiv,
  Heading,
  BookShelvesButtonsList,
  BookShelvesButtonItem,
  BookShelvesButton,
  DisplayBooksSection,
  BooksList,
  BookItem,
  BookCoverPic,
  BookDetailsSection,
  BookTitle,
  BookAuthor,
  BookRating,
  BookStatus,
} from './styledComponents'

const bookshelvesButtonsList = [
  {
    id: '22526c8e-680e-4419-a041-b05cc239ece4',
    value: 'ALL',
    label: 'All',
  },
  {
    id: '37e09397-fab2-46f4-9b9a-66b2324b2e22',
    value: 'READ',
    label: 'Read',
  },
  {
    id: '2ab42512-3d05-4fba-8191-5122175b154e',
    value: 'CURRENTLY_READING',
    label: 'Currently Reading',
  },
  {
    id: '361d5fd4-9ea1-4e0c-bd47-da2682a5b7c8',
    value: 'WANT_TO_READ',
    label: 'Want to Read',
  },
]

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE,',
}

class BookShelves extends Component {
  state = {
    apiStatus: apiConstants.initial,
    booksList: [],
    shelf: 'All',
    searchInput: '',
  }

  componentDidMount = () => {
    this.getBooksData()
  }

  getBooksData = async () => {
    this.setState({
      apiStatus: apiConstants.loading,
    })
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/book-hub/books?shelf=READ&search=${searchInput}`
    const res = await fetch(apiUrl, options)
    const data = await res.json()
    if (res.ok === true) {
      const updatedBooksData = data.books.map(book => ({
        id: book.id,
        authorName: book.author_name,
        coverPic: book.cover_pic,
        rating: book.rating,
        readStatus: book.read_status,
        title: book.title,
      }))

      this.setState({
        booksList: updatedBooksData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderLoader = () => {}

  renderBookShelvesList = () => {}

  renderFailureView = () => {}

  renderBooksListBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderBookShelvesList()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {booksList} = this.state
    return (
      <BookShelvesBgContainer>
        <Header />
        <BookShelvesMainContainer>
          <TagLinksSection>
            <BookSearchDiv>
              <SearchInput />
              <SearchButton>
                <FaSearch size={18} />
              </SearchButton>
            </BookSearchDiv>
            <BookShelvesButtonsDiv>
              <Heading>BookShelves</Heading>
              <BookShelvesButtonsList>
                {bookshelvesButtonsList.map(eachType => {
                  const {id, value, label} = eachType
                  return (
                    <BookShelvesButtonItem key={id}>
                      <BookShelvesButton>{label}</BookShelvesButton>
                    </BookShelvesButtonItem>
                  )
                })}
              </BookShelvesButtonsList>
            </BookShelvesButtonsDiv>
          </TagLinksSection>
          <DisplayBooksSection>
            <BooksList>
              {booksList.map(eachBook => (
                <BookItem key={eachBook.id}>
                  <BookCoverPic src={eachBook.coverPic} />
                  <BookDetailsSection>
                    <BookTitle>{eachBook.title}</BookTitle>
                    <BookAuthor>{eachBook.authorName}</BookAuthor>
                    <BookRating>Avg Rating {eachBook.rating}</BookRating>
                    <BookStatus>Status: {eachBook.readStatus}</BookStatus>
                  </BookDetailsSection>
                </BookItem>
              ))}
            </BooksList>
          </DisplayBooksSection>
        </BookShelvesMainContainer>
      </BookShelvesBgContainer>
    )
  }
}

export default BookShelves
