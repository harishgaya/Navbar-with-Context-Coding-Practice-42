// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const HomeBackground = isDarkTheme
        ? 'Home-Container'
        : 'Home-Container active'

      const homepagelogosUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const heading = isDarkTheme ? 'home-heading' : 'home-heading active'
      return (
        <>
          <Navbar />
          <div className={HomeBackground}>
            <img src={homepagelogosUrl} alt="home" className="logo-size" />
            <h1 className={heading}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
