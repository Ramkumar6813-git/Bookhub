import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: #f5f7fa;
  height: 89vh;
  @media (min-width: 768px) {
    padding: 0 70px;
  }
`
export const FindBooksDiv = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    padding: 20px 0px;
  }
`
export const HeadingText = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 25px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`
export const FindBooksButton = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
`

export const SliderContainer = styled.div`
  background-color: #fff;
  height: 250px;
`
export const SliderHeading = styled.h1`
  font-size: 20px;
  padding: 20px 30px;
`
export const SlidesList = styled.ul`
  list-style-type: none;
  padding: 0 30px;
  .slick-prev:before ,
  .slick-next: before {
    color: #e0e0f0;
    height: 20px;
  }
`
export const SliderBookItem = styled.li``
export const SliderBookButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
`
export const BookCoverPic = styled.img`
  width: 150px;
  height: 99px;
  border-radius: 2px;
  @media (min-width: 768px) {
    height: 120px;
    width: 160px;
  }
`
export const BookTitle = styled.p`
  font-size: 13px;
  margin-top: 10px;
  padding-bottom: 5px;
  color: #334155;
  font-weight: 600;
`
export const BookAuthor = styled.p`
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`
export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`
export const Contact = styled.p`
  margin-top: 10px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 220px;
  height: 100px;
`
export const FailureInfo = styled.p`
  margin: 10px 0px;
  font-size: 14px;
`
export const TryAgainButton = styled.button`
  padding: 7px 15px;
  border-radius: 6px;
  border: none;
`
