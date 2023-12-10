import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
  }
`
export const LoginFormContainer = styled.div`
  max-height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    padding: 0;
  }
`
export const DisplayImageMobile = styled.img`
  width: 216px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const DisplayImageDesktop = styled.img`
  @media (max-width: 768px) {
    display: none;
  }

  width: 50vw;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 322px;
    margin: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 25px;
    border-radius: 8px;
  }
`
export const WebsiteLogo = styled.img`
  align-self: center;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
`
export const UsernameLabel = styled.label`
  font-size: 15px;
`
export const UsernameInput = styled.input`
  padding: 9px 15px;
  font-size: 16px;
  outline: none;
`
export const PasswordLabel = styled.label`
  font-size: 15px;
`
export const PasswordInput = styled.input`
  padding: 9px 15px;
  font-size: 16px;
  outline: none;
`
export const LoginButton = styled.button`
  padding: 8px 0px;

  @media (min-width: 768px) {
  }
`
export const ErrorMsg = styled.p`
  color: red;
`
