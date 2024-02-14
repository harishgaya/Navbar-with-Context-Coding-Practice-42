// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContainer = isDarkTheme
        ? 'about-Container'
        : 'about-Container active'
      const heading = isDarkTheme ? 'about-heading' : 'about-heading active'
      const discription = isDarkTheme ? 'discription' : 'discription active'

      return (
        <>
          <Navbar />
          <div className={bgContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="logo-size"
            />
            <h1 className={heading}>Lost your way?</h1>

            <p className={discription}>
              We cannot seem to find the page your looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
