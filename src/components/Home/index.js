import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  HomeBgContainer,
  FindBooksDiv,
  HeadingText,
  DescriptionText,
  FindBooksButton,
  SliderContainer,
  SliderInfoDiv,
  SliderHeading,
  LgFindBooksButton,
  SlidesList,
  SliderBookItem,
  SliderBookButton,
  BookCoverPic,
  BookTitle,
  BookAuthor,
  Footer,
  SocialMediaLinks,
  Contact,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureInfo,
  TryAgainButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE,',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    apiData: [],
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
        apiData: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer>
      <Loader type="TailSpin" color="#0284C7" height={30} width={30} />
    </LoaderContainer>
  )

  renderTopRatedBooks = () => {
    const {apiData} = this.state
    const settings = {
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <Slider {...settings}>
        {apiData.map(eachBookData => {
          const {id, coverPic, title, authorName} = eachBookData
          return (
            <SliderBookItem key={id}>
              <SliderBookButton type="button">
                <BookCoverPic src={coverPic} alt="ss" />
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{authorName}</BookAuthor>
              </SliderBookButton>
            </SliderBookItem>
          )
        })}
      </Slider>
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
        alt="failure"
      />
      <FailureInfo>Something went wrong. Please try again</FailureInfo>
      <TryAgainButton type="button">Try Again</TryAgainButton>
    </FailureContainer>
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
                  <button type="button" className="find-books-button ">
                    Find Books
                  </button>
                </div>
                <div className="slider-div">
                  <div className="slider-info-section">
                    <h1 className="slider-head-text">Top Rated Books</h1>
                    <button type="button" className="lg-device-find-button">
                      Find Books
                    </button>
                  </div>
                  <div className="slider-main-section">
                    {this.renderBooksBasedOnApiStatus()}
                  </div>
                </div>
                <Footer>
                  <SocialMediaLinks>
                    <FaGoogle size={20} />
                    <FaTwitter size={20} />
                    <FaInstagram size={20} />
                    <FaYoutube size={20} />
                  </SocialMediaLinks>
                  <Contact>Contact Us</Contact>
                </Footer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
