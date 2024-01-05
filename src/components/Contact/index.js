import {Link} from 'react-router-dom'

import './index.css'

const Contact = () => {
  const getDetailsCard = () => (
    <div className="details-card">
      <div className="heading-top-card">
        <Link className="link-routes" to="/">
          <h1 className="top-heading">Madelyn Torff</h1>
        </Link>
      </div>
      <div className="inner-card">
        <div>
          <h1 className="heading-about">Contact Me</h1>
          <ul className="contact-me">
            <li className="contact">Phone: 123-345-5678</li>
            <li className="contact">Email: krk024@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )

  const getBannerCard = () => (
    <div className="get-banner-card">
      <ul className="nav-links">
        <Link className="link-routes" to="/about">
          <li className="links">About</li>
        </Link>
        <Link className="link-routes" to="/projects">
          <li className="links">Projects</li>
        </Link>
        <Link className="link-routes" to="/contacts">
          <li className="links">Contacts</li>
        </Link>
      </ul>
    </div>
  )

  return (
    <>
      <div className="home-main-container">
        {getDetailsCard()}
        {getBannerCard()}
      </div>
      <div className="bottom-card">{null}</div>
    </>
  )
}

export default Contact
