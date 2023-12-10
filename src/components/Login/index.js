import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BgContainer,
  LoginFormContainer,
  DisplayImageMobile,
  DisplayImageDesktop,
  WebsiteLogo,
  Form,
  InputContainer,
  UsernameLabel,
  UsernameInput,
  PasswordLabel,
  PasswordInput,
  ErrorMsg,
  LoginButton,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  changeUserName = e => {
    this.setState({username: e.target.value})
  }

  changePassword = e => {
    this.setState({password: e.target.value})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({
      showError: true,
      errorMsg,
    })
  }

  submitForm = async e => {
    const {username, password} = this.state
    e.preventDefault()
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showError, password, username} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginFormContainer>
          <DisplayImageMobile src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702048766/ellipse.png" />
          <DisplayImageDesktop src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702104854/Rectamgle.png" />
          <Form onSubmit={this.submitForm}>
            <WebsiteLogo src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png" />
            <InputContainer>
              <UsernameLabel htmlFor="username">Username*</UsernameLabel>
              <UsernameInput
                type="text"
                id="username"
                value={username}
                onChange={this.changeUserName}
              />
            </InputContainer>
            <InputContainer>
              <PasswordLabel htmlFor="password">Password*</PasswordLabel>
              <PasswordInput
                type="password"
                id="password"
                value={password}
                onChange={this.changePassword}
                autoComplete="on"
              />
            </InputContainer>
            <ErrorMsg>{showError && errorMsg}</ErrorMsg>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        </LoginFormContainer>
      </BgContainer>
    )
  }
}

export default LoginForm
