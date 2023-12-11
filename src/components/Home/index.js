import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Header from '../Header'
import {
  HomeBgContainer,
  FindBooksDiv,
  HeadingText,
  DescriptionText,
  FindBooksButton,
  SliderContainer,
  SliderHeading,
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
    const updatedData = data.books.map(book => ({
      authorName: book.author_name,
      coverPic: book.cover_pic,
      id: book.id,
      title: book.title,
    }))
    if (response.ok === true) {
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
      <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
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
            slidesToShow: 6,
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
      <SlidesList>
        <Slider {...settings}>
          {apiData.map(eachBookData => (
            <SliderBookItem key={eachBookData.id}>
              <SliderBookButton type="button">
                <BookCoverPic src={eachBookData.coverPic} alt="ss" />
                <BookTitle>{eachBookData.title}</BookTitle>
                <BookAuthor>{eachBookData.authorName}</BookAuthor>
              </SliderBookButton>
            </SliderBookItem>
          ))}
        </Slider>
      </SlidesList>
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
      <>
        <Header />
        <HomeBgContainer>
          <FindBooksDiv>
            <HeadingText>Find Your Next Favorite Books?</HeadingText>
            <DescriptionText>
              You are in the right place. Tell us what titles or genres you have
              enjoyed in the past, and we will give you surprisingly insightful
              recommendations.
            </DescriptionText>
            <FindBooksButton type="button">Find Books</FindBooksButton>
          </FindBooksDiv>
          <SliderContainer>
            <SliderHeading>Top Rated Books</SliderHeading>
            {this.renderBooksBasedOnApiStatus()}
          </SliderContainer>
          <Footer>
            <SocialMediaLinks>
              <FaGoogle size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaYoutube size={20} />
            </SocialMediaLinks>
            <Contact>Contact Us</Contact>
          </Footer>
        </HomeBgContainer>
      </>
    )
  }
}

export default Home
