import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'
import {BsFillStarFill} from 'react-icons/bs'
import Cookies from 'js-cookie'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import Footer from '../Footer'
import './index.css'

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
    shelfTag: 'All',
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

  renderLoader = () => (
    <div className="loader-container" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={35} width={35} />
    </div>
  )

  renderBookShelvesList = () => {
    const {booksList} = this.state
    return (
      <ul className="book-items">
        {booksList.map(eachBook => {
          const {id, coverPic, title, authorName, rating, readStatus} = eachBook
          return (
            <li className="book-li-item" key={title}>
              <img src={coverPic} className="book-cover-pic" alt={id} />
              <div className="book-details-section">
                <h1 className="book-title">{title}</h1>
                <p className="book-author">{authorName}</p>
                <p className="book-rating">
                  Avg Rating{' '}
                  <span className="star-icon">
                    <BsFillStarFill />
                  </span>
                  {rating}
                </p>
                <p className="book-status">
                  <span className="book-status-text">
                    {' '}
                    Status : {readStatus}
                  </span>
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
        className="failure-image"
        alt="failure view"
      />
      <p className="failure-info-text">
        Something went wrong. Please try again
      </p>
      <button type="button" className="try-again-button">
        Try Again
      </button>
    </div>
  )

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
    return (
      <ThemeContext.Consumer>
        {values => {
          const {idDarkTheme} = values
          return (
            <>
              <Header />
              <div className="bookshelves-main-container">
                <div className="book-status-buttons-section">
                  <div className="sm-device-search-div">
                    <input
                      type="search"
                      className="search-input"
                      placeholder="Search"
                    />
                    <button
                      type="button"
                      className="search-button"
                      testid="searchButton"
                    >
                      <BiSearch size={18} />
                    </button>
                  </div>
                  <div className="book-status-buttons-sub-div">
                    <h1 className="head-text">BookShelves</h1>
                    <ul className="book-status-buttons-list">
                      {bookshelvesButtonsList.map(eachType => {
                        const {id, value, label} = eachType
                        return (
                          <li className="book-status-button-item" key={id}>
                            <button type="button" className="status-button">
                              {label}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="books-display-section">
                  <div className="books-display-info-div">
                    <h1 className="head-text">All Books</h1>
                    <div className="lg-device-search-div">
                      <input
                        className="search-input"
                        type="search"
                        placeholder="Sea life"
                      />
                      <button type="button" className="search-button">
                        <BiSearch size={18} />
                      </button>
                    </div>
                  </div>
                  {this.renderBooksListBasedOnApiStatus()}
                  <Footer />
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookShelves
