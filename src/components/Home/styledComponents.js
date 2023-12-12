import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  background-color: #f5f7fa;
  height: 89vh;
  @media (min-width: 768px) {
    padding: 0 70px;
    margin-top: 65px;
  }
`
export const FindBooksDiv = styled.div`
  padding: 25px;
  @media (min-width: 768px) {
    padding: 20px 0px;
  }
`
export const HeadingText = styled.h1`
  font-size: 21px;
  margin-bottom: 8px;
  color: #1e293b;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 23px;
  color: #475569;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 10px;
    line-height: 28px;
  }
`
export const FindBooksButton = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
  color: #f8fafc;
  background-color: #0284c7;
  border: none;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SliderContainer = styled.div`
  background-color: #fff;
  height: 260px;
  @media screen and (min-width: 768px) {
    height: 290px;
    border-radius: 8px;
  }
`

export const SliderInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 30px;
`
export const SliderHeading = styled.h1`
  font-size: 20px;
  color: #1e293b;
`
export const LgFindBooksButton = styled.button`
  @media screen and (max-width: 768px) {
    display: none;
  }
  padding: 8px 16px;
  color: #f8fafc;
  background-color: #0284c7;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`

export const SlidesList = styled.ul`
  list-style-type: none;
  padding: 0 35px;
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
  margin: auto;
  width: 150px;
  @media (min-width: 768px) {
    width: 170px;
  }
`
export const BookCoverPic = styled.img`
  width: 100%;
  height: 130px;
  border-radius: 5px;
  @media (min-width: 768px) {
    height: 150px;
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
  color: #3d3c3c;
`
export const Contact = styled.p`
  margin-top: 10px;
  font-weight: 500;
  color: #3d3c3c;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 150px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 220px;
  height: 110px;
`
export const FailureInfo = styled.p`
  margin: 10px 0px;
  font-size: 15px;
  color: #475569;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin: 13px 0px;
    font-size: 16px;
  }
`
export const TryAgainButton = styled.button`
  padding: 7px 16px;
  color: #f8fafc;
  background-color: #0284c7;
  border: none;
  border-radius: 6px;
  font-size: 16px;
`
