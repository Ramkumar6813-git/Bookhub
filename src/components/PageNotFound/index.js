import ThemeContext from '../../context/ThemeContext'

const PageNotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <img
            src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1702568310/NotFound.png"
            className=""
            alt="not found"
          />
          <h1 className="not-found-text">Page Not Found</h1>
          <p className="not-found-description">
            we are sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <button type="button" className="try-again-button">
            Go Back To Home
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default PageNotFound
