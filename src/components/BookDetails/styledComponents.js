import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
`
export const BookDetailsContainer = styled.div`
  padding: 10px 20px;
  @media (min-width: 768px) {
    padding: 10px 40px;
  }
`

export const BookMainDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
    padding-bottom: 15px;
  }
`
export const BookCoverPic = styled.img`
  width: 230px;
  height: 280px;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 180px;
    height: 220px;
  }
`
export const MainDetailsDiv = styled.div`
  padding: 15px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    width: 280px;
    padding-left: 25px;
  }
`
export const BookTitle = styled.h1`
  font-size: 22px;
  @media (min-width: 768px) {
    font-size: 25px;
    padding-bottom: 8px;
  }
`
export const Author = styled.p`
  font-size: 16px;
  margin: 4px 0px;
  @media (min-width: 768px) {
    margin: 6px 0px;
    font-size: 18px;
  }
`
export const Rating = styled.p`
  margin: 4px 0px;
  @media (min-width: 768px) {
    margin: 6px 0px;
    font-size: 18px;
  }
`
export const BookStatus = styled.p`
  margin: 4px 0px;
  @media (min-width: 768px) {
    margin: 6px 0px;
    font-size: 18px;
  }
`

export const LineBreak = styled.hr`
  margin: 10px 0px 15px 0px;
`

export const BookSubDetailsSection = styled.div``
export const SubDetailsHeading = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const SubDetailsInfo = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 30px;
`
export const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`
export const Contact = styled.p`
  margin-top: 10px;
`
