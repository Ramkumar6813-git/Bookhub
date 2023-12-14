import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsFillStarFill} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE,',
}

class BookDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    bookDetails: {},
  }

  componentDidMount = () => {
    this.getBookDetails()
  }

  getBookDetails = async () => {
    this.setState({
      apiStatus: apiConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/book-hub/books/7850622e-1b70-4396-963d-e68d5a2577d7`
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const book = data.book_details
      const updatedData = {
        aboutAuthor: book.about_author,
        aboutBook: book.about_book,
        authorName: book.author_name,
        coverPic: book.cover_pic,
        rating: book.rating,
        readStatus: book.read_status,
        id: book.id,
        title: book.title,
      }
      this.setState({
        apiStatus: apiConstants.success,
        bookDetails: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-div">
      <Loader type="TailSpin" color="#0284C7" height={35} width={35} />
    </div>
  )

  renderBookDetails = () => {
    const {bookDetails} = this.state
    const {
      coverPic,
      title,
      authorName,
      rating,
      readStatus,
      aboutAuthor,
      aboutBook,
    } = bookDetails
    return (
      <>
        <div className="book-main-details-section">
          <img src={coverPic} className="book-pic" alt={title} />
          <div className="book-main-details-div ">
            <h1 className="book-title-text">{title}</h1>
            <p className="book-author-name text-margins">{authorName}</p>
            <p className="book-ratings text-margins">
              Avg Rating{' '}
              <span className="star-icon">
                <BsFillStarFill />
              </span>{' '}
              {rating}
            </p>
            <p className="book-status text-margins">
              Status :<span className="book-status-text"> {readStatus}</span>
            </p>
          </div>
        </div>
        <hr className="line-break" />
        <div className="sub-details-section ">
          <h1 className="about-heading head-text-size">About Author</h1>
          <p className="info">{aboutAuthor}</p>
          <h1 className="about-heading head-text-size">About Book</h1>
          <p className="info">{aboutBook}</p>
        </div>
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-div">
      <img
        src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
        className="failure-img"
        alt="failure"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button type="button" className="try-again-button">
        Try Again
      </button>
    </div>
  )

  renderBookDetailsBasedOnApi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderBookDetails()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <div className="book-details-container">
                {this.renderBookDetailsBasedOnApi()}
              </div>
              <Footer />
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookDetails
