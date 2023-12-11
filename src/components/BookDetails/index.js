import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'

import {
  BgContainer,
  BookDetailsContainer,
  BookMainDetailsSection,
  BookSubDetailsSection,
} from './styledComponents'

class BookDetails extends Component {
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
      console.log(updatedData)
    }
  }

  render() {
    return (
      <BgContainer>
        <Header />
        <BookDetailsContainer>
          <BookMainDetailsSection>RRR</BookMainDetailsSection>
        </BookDetailsContainer>
      </BgContainer>
    )
  }
}

export default BookDetails
