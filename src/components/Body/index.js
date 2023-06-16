import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <div className="left-navbar-sub-container">
                <h1 className="left-navbar-heading">Left Navbar Menu</h1>
                <ul className="left-navbar-list">
                  <li className="list-item">Item 1</li>
                  <li className="list-item">Item 2</li>
                  <li className="list-item">Item 3</li>
                  <li className="list-item">Item 4</li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <div className="content-sub-container">
                <h1 className="content-heading">Content</h1>
                <p className="content-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </p>
              </div>
            </div>
          ) : (
            ''
          )}

          {showRightNavbar ? (
            <div className="left-navbar-container">
              <div className="left-navbar-sub-container">
                <h1 className="left-navbar-heading">Right Navbar Menu</h1>
                <div className="ad-container">
                  <p className="ad-content">Ad 1</p>
                </div>
                <div className="ad-container">
                  <p className="ad-content">Ad 2</p>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
