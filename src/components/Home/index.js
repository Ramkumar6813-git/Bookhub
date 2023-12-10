import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'

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
  LoaderContainer,
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
    const updatedData = data.books.map(eachData => ({
      authorName: eachData.author_name,
      coverPic: eachData.cover_pic,
      id: eachData.id,
      title: eachData.title,
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
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
    <div>
      <img
        src="https://res.cloudinary.com/dovk61e0h/image/upload/v1663608572/Bookhub/Group_7522Failure_Image_ykvhlm_gwy5rw.png"
        alt="failure"
      />
      <p>Something went wrong. Please try again</p>
      <button type="button">Try Again</button>
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
        </HomeBgContainer>
      </>
    )
  }
}

export default Home
