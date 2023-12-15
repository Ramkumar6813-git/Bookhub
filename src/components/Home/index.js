import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import Footer from '../Footer'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE,',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    topRatedBooksData: [],
  }

  componentDidMount = () => {
    this.getTopRatedBooks()
  }

  getTopRatedBooks = async () => {
    this.setState({
      apiStatus: apiConstants.loading,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      'https://apis.ccbp.in/book-hub/top-rated-books',
      options,
    )
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.books.map(book => ({
        authorName: book.author_name,
        coverPic: book.cover_pic,
        id: book.id,
        title: book.title,
      }))
      this.setState({
        topRatedBooksData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="home-loader-container" testid="loader">
      <Loader type="TailSpin" color="#0284C7" height={30} width={30} />
    </div>
  )

  renderTopRatedBooks = () => {
    const {topRatedBooksData} = this.state
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <Slider {...settings}>
        {topRatedBooksData.map(eachBookData => {
          const {id, coverPic, title, authorName} = eachBookData
          return (
            <Link to={`/book-hub/books/${id}`} className="link">
              <li className="slider-item" key={id}>
                <img
                  src={coverPic}
                  className="trending-book-cover-pic"
                  alt="ss"
                />
                <p className="trending-book-title">{title}</p>
                <p className="trending-book-author">{authorName}</p>
              </li>
            </Link>
          )
        })}
      </Slider>
    )
  }

  getBooksData = () => {
    this.getTopRatedBooks()
  }

  renderFailureView = () => (
    <div className="home-failure-container">
      <img
        src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
        className="home-failure-image"
        alt="failure view"
      />
      <p className="home-failure-info-text">
        Something went wrong. Please try again
      </p>
      <button
        type="button"
        className="try-again-button"
        onClick={this.getBookData}
      >
        Try Again
      </button>
    </div>
  )

  renderBooksBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderTopRatedBooks()
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
              <div className="home-container">
                <div className="find-books-section">
                  <h1 className="heading">Find Your Next Favorite Books?</h1>
                  <p className="description">
                    You are in the right place. Tell us what titles or genres
                    you have enjoyed in the past, and we will give you
                    surprisingly insightful recommendations.
                  </p>
                  <Link to="/shelf" className="link">
                    <button type="button" className="find-books-button">
                      Find Books
                    </button>
                  </Link>
                </div>
                <div className="slider-div">
                  <div className="slider-info-section">
                    <h1 className="slider-head-text">Top Rated Books</h1>
                    <Link to="/shelf" className="link">
                      <button type="button" className="lg-device-find-button">
                        Find Books
                      </button>
                    </Link>
                  </div>
                  <div className="slider-main-section">
                    {this.renderBooksBasedOnApiStatus()}
                  </div>
                </div>
                <Footer />
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
