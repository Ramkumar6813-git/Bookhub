import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const PageNotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="not-found-bg-div">
          <div className="page-not-found-div">
            <img
              src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702568310/NotFound.png"
              className="not-found-img"
              alt="not found"
            />
            <h1 className="not-found-text">Page Not Found</h1>
            <p className="not-found-description">
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
