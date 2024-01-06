import {Link} from 'react-router-dom'
import './index.css'

const About = () => {
  const getData = () => (
    <>
      <h1 className="heading-skills">Skills and Expertise</h1>
      <ul className="list-ul">
        <li className="text-skills">
          <span className="extra-style">UI Design:</span> Bringing concepts to
          life with visually appealing <br />
          and user-friendly interfaces.
        </li>
        <li className="text-skills">
          <span className="extra-style">UX Research:</span> Conducting in-depth
          research to understand <br />
          user needs and behaviors.
        </li>
        <li className="text-skills">
          <span className="extra-style">Wireframing & Prototyping:</span>{' '}
          Creating blueprints and interactive <br />
          prototypes to visualize design concepts.
        </li>
        <li className="text-skills">
          <span className="extra-style">Usability Testing:</span> Ensuring the
          effectiveness and user-friendliness
          <br /> of designs through rigorous testing.
        </li>
      </ul>
    </>
  )

  const getDetailsCard = () => (
    <div className="details-card">
      <div className="heading-top-card">
        <Link className="link-routes" to="/">
          <h1 className="top-heading">Madelyn Torff</h1>
        </Link>
      </div>
      <div className="inner-card">
        <div>
          <h1 className="heading-about">About Me</h1>
          <p className="para-about">
            Hello! I&quot;m Madelyn Torff, a passionate <br />
            UI/UX designer dedicated to creating delightful and intuitive
            <br /> digital experiences. With a keen eye for detail and a love
            <br />
            for problem-solving, I strive to blend aesthetics
            <br />
            with functionality to craft designs that not only look
            <br />
            great but also enhance user satisfaction.
          </p>
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
      <div className="home-main-container-about">
        {getDetailsCard()}
        {getBannerCard()}
      </div>
      <div className="skills-card-btm">{getData()}</div>
      <div className="bottom-card">{null}</div>
    </>
  )
}

export default About
