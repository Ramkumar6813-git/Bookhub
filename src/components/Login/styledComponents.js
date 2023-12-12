import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  @media (min-width: 768px) {
  }
`
export const LoginFormContainer = styled.div`
  max-height: 100vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 352px;
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
    width: 352px;
    margin: auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 8px #e7eff0;
  }
`
export const WebsiteLogo = styled.img`
  align-self: center;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
`
export const UsernameLabel = styled.label`
  font-size: 15px;
  color: #5a7184;
  font-weight: 500;
`
export const UsernameInput = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  outline: none;
  font-weight: 400;
  color: #183b56;
  border-radius: 5px;
  border: 1.5px solid #c3cad9;
`
export const PasswordLabel = styled.label`
  font-size: 15px;
  color: #5a7184;
  font-weight: 500;
`
export const PasswordInput = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  outline: none;
  font-weight: 400;
  color: #183b56;
  border-radius: 5px;
  border: 1.5px solid #c3cad9;
`
export const LoginButton = styled.button`
  padding: 9px 0px;
  margin-top: 30px;
  border-radius: 6px;
  font-size: 15px;
  border: none;
  color: #fff;
  background-color: #0284c7;
  @media (min-width: 768px) {
  }
`
export const ErrorMsg = styled.p`
  color: red;
`
