import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navBackground = isDarkTheme ? 'nav-Bar' : 'nav-Bar active'
      const navOptions = isDarkTheme ? 'link-item' : 'link-item active'
      const websiteLogoImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      return (
        <nav className={navBackground}>
          <div className="img-Container">
            <img src={websiteLogoImageURL} alt="website logo" />
          </div>
          <ul className="options-Container">
            <li className="list-Item">
              <Link to="/" className={navOptions}>
                Home
              </Link>
            </li>
            <li className="list-Item">
              <Link to="/about" className={navOptions}>
                About
              </Link>
            </li>
          </ul>
          <div className="theme-img-Container">
            <button
              type="button"
              className="button"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                alt="theme"
                className="website-logo-size"
              />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
