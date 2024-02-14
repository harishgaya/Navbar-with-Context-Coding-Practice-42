// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const AboutContainerBackground = isDarkTheme
        ? 'about-Container'
        : 'about-Container active'

      const aboutpagelogosUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const heading = isDarkTheme ? 'about-heading' : 'about-heading active'
      return (
        <>
          <Navbar />
          <div className={AboutContainerBackground}>
            <img src={aboutpagelogosUrl} alt="about" className="logo-size" />
            <h1 className={heading}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
