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
    this.getBookItemDetails()
  }

  getBookItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bookId = id
    this.setState({
      apiStatus: apiConstants.loading,
    })

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/book-hub/books/${bookId}`
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
    <div className="loader-div" testid="loader">
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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme
            ? 'dark-theme-book-text-color'
            : 'light-theme-book-text-color'
          const headingColor = isDarkTheme
            ? 'dark-theme-book-heading-color'
            : 'light-theme-book-heading-color'
          return (
            <>
              <div className="book-main-details-section">
                <img src={coverPic} className="book-pic" alt={title} />
                <div className="book-main-details-div ">
                  <h1 className={`book-title-text ${headingColor}`}>{title}</h1>
                  <p className={`book-author-name text-margins ${textColor}`}>
                    {authorName}
                  </p>
                  <div className={`book-rating-div ${textColor}`}>
                    <p className="book-rating-text text-margins">Avg Rating</p>
                    <BsFillStarFill size={25} className="star-icon" />
                    <p className="rating">{rating}</p>
                  </div>
                  <div className="book-status-div">
                    <p className={`book-status-text text-margins ${textColor}`}>
                      Status:
                    </p>
                    <p className="status">{readStatus}</p>
                  </div>
                </div>
              </div>
              <hr className="line-break" />
              <div className="sub-details-section">
                <h1 className={`about-heading head-text-size ${headingColor}`}>
                  About Author
                </h1>
                <p className={`info ${textColor}`}>{aboutAuthor}</p>
                <h1 className={`about-heading head-text-size ${headingColor}`}>
                  About Book
                </h1>
                <p className={`info ${textColor}`}>{aboutBook}</p>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  onClickGetBookDetails = () => {
    this.getBookItemDetails()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme
          ? 'dark-theme-book-text-color'
          : 'light-theme-book-text-color'
        return (
          <div className="failure-div">
            <img
              src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
              className="failure-img"
              alt="failure view"
            />
            <p className={`failure-text ${textColor}`}>
              Something went wrong. Please try again
            </p>
            <button
              type="button"
              className="try-again-button"
              onClick={this.onClickGetBookDetails}
            >
              Try Again
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
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
          const bgColor = isDarkTheme
            ? 'dark-theme-book-bg-color'
            : 'light-theme-book-bg-color'

          return (
            <div className={`book-details-bg-container ${bgColor}`}>
              <Header />
              <div className="book-details-container">
                {this.renderBookDetailsBasedOnApi()}
              </div>
              <Footer />
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default BookDetails
