import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import Header from '../Header'

import {
  BgContainer,
  BookDetailsContainer,
  BookMainDetailsSection,
  BookCoverPic,
  MainDetailsDiv,
  BookTitle,
  Author,
  Rating,
  BookStatus,
  LineBreak,
  BookSubDetailsSection,
  SubDetailsHeading,
  SubDetailsInfo,
  Footer,
  SocialMediaLinks,
  Contact,
} from './styledComponents'

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

  renderLoader = () => {}

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
        <BookMainDetailsSection>
          <BookCoverPic src={coverPic} alt={title} />
          <MainDetailsDiv>
            <BookTitle>{title}</BookTitle>
            <Author>{authorName}</Author>
            <Rating>Avg Rating {rating}</Rating>
            <BookStatus>{readStatus}</BookStatus>
          </MainDetailsDiv>
        </BookMainDetailsSection>
        <LineBreak />
        <BookSubDetailsSection>
          <SubDetailsHeading>About Author</SubDetailsHeading>
          <SubDetailsInfo>{aboutAuthor}</SubDetailsInfo>
          <SubDetailsHeading>About Book</SubDetailsHeading>
          <SubDetailsInfo>{aboutBook}</SubDetailsInfo>
        </BookSubDetailsSection>
      </>
    )
  }

  renderFailureView = () => {}

  renderBookDetailsBasedOnApi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoader
      case apiConstants.success:
        return this.renderBookDetails
      case apiConstants.failure:
        return this.renderFailureView
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Header />
        <BookDetailsContainer>{this.renderBookDetails()}</BookDetailsContainer>
        <Footer>
          <SocialMediaLinks>
            <FaGoogle size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
          </SocialMediaLinks>
          <Contact>Contact Us</Contact>
        </Footer>
      </BgContainer>
    )
  }
}

export default BookDetails
