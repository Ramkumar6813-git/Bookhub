import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const PageNotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme
        ? 'dark-theme-not-found-bg-color'
        : 'light-theme-not-found--bg-color'
      const textColor = isDarkTheme
        ? 'dark-theme-text-color'
        : 'light-theme-text-color'
      const headingColor = isDarkTheme
        ? 'dark-theme-heading-color'
        : 'light-theme-heading-color'
      return (
        <div className={`not-found-bg-div ${bgColor}`}>
          <div className="page-not-found-div">
            <img
              src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702568310/NotFound.png"
              className="not-found-img"
              alt="not found"
            />
            <h1 className={`not-found-text ${headingColor}`}>Page Not Found</h1>
            <p className={`not-found-description ${textColor}`}>
              we are sorry, the page you requested could not be found
            </p>
            <Link to="/">
              <button type="button" className="go-to-home-button">
                Go Back to Home
              </button>
            </Link>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default PageNotFound
