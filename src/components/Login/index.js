import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

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
      <div className="bg-container">
        <div className="login-form-div">
          <img
            src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702048766/ellipse.png"
            className="sm-display-image"
            alt="website login"
          />
          <img
            src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702104854/Rectamgle.png"
            className="lg-display-image"
            alt="website login"
          />
          <form className="form" onSubmit={this.submitForm}>
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702101956/Logo.png"
              alt="login website logo"
            />
            <div className="input-div">
              <label className="label" htmlFor="username">
                Username*
              </label>
              <input
                className="input"
                type="text"
                id="username"
                value={username}
                onChange={this.changeUserName}
              />
            </div>
            <div className="input-div">
              <label className="label" htmlFor="password">
                Password*
              </label>
              <input
                className="input"
                type="password"
                id="password"
                value={password}
                onChange={this.changePassword}
                autoComplete="on"
              />
            </div>
            <p className="error-msg">{showError && errorMsg}</p>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
