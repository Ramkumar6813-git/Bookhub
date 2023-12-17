import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Footer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="footer-container">
          <ul className="social-media-links">
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
          <p className="contact-us-text">Contact us</p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Footer
