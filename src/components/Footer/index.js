import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Footer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const mediaIconColor = isDarkTheme
        ? 'dark-theme-icon-color'
        : 'light-theme-icon-color'
      const textColor = isDarkTheme
        ? 'dark-theme-contact-uc-text-color'
        : 'light-theme-contact-us-color'
      return (
        <div className="footer-container">
          <ul className={`social-media-links ${mediaIconColor}`}>
            <li className="social-media-icon">
              <FaGoogle size={20} />
            </li>
            <li className="social-media-icon">
              {' '}
              <FaTwitter size={20} />
            </li>
            <li className="social-media-icon">
              {' '}
              <FaInstagram size={20} />
            </li>
            <li className="social-media-icon">
              <FaYoutube size={20} />
            </li>
          </ul>
          <p className={`contact-us-text ${textColor}`}>Contact us</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Footer
