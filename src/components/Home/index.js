import {Link} from 'react-router-dom'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const list = [
  {
    id: 1,
    projectName: 'Todos Application',
    projectLink: 'https://tasktick.ccbp.tech/',
    description: 'A task management solution, designed to make life easier',
    imageUrl:
      'https://res.cloudinary.com/dpcgriaf4/image/upload/v1704435955/top-view-desk-top-with-list-notebook_23-2148443714_vvpsi4.jpg',
  },
  {
    id: 2,
    projectName: 'TastyKitchens Application',
    projectLink: 'https://TastyKitchenHub.ccbp.tech',
    description: 'A task management solution, designed to make life easier',
    imageUrl:
      'https://res.cloudinary.com/dpcgriaf4/image/upload/v1704438287/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_d5bekl.jpg',
  },
]

class Home extends Component {
  state = {
    projectList: list,
    projectName: '',
    projectLink: '',
    description: '',
    imageUrl: '',
  }

  getDetailsCard = () => (
    <div className="details-card">
      <div className="heading-top-card">
        <Link className="link-routes" to="/">
          <h1 className="top-heading">Madelyn Torff</h1>
        </Link>
      </div>
      <div className="inner-card">
        <div>
          <p className="type-of-work-name">UI/UX DESIGNER</p>
          <p className="text">
            Hello, my name <br /> is Madelyn Torff
          </p>
          <p className="text-description">
            Short text with details about you, what you
            <br /> do or your professional career. You can add
            <br /> more information on the about page.
          </p>
          <div className="button-card">
            <button className="btn-project btn" type="button">
              Projects
            </button>
            <button className="btn-LinkedIn btn" type="button">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  getBannerCard = () => (
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

  getProjectName = event => {
    this.setState({projectName: event.target.value})
  }

  getProjectLink = event => {
    this.setState({projectLink: event.target.value})
  }

  getProjectDescription = event => {
    this.setState({description: event.target.value})
  }

  getProjectUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  projectSubmit = event => {
    const {projectName, projectLink, description, imageUrl} = this.state
    event.preventDefault()
    if (projectName !== '' && projectLink !== '' && description !== '') {
      const data = {
        id: uuidv4(),
        projectName,
        projectLink,
        description,
        imageUrl,
      }
      this.setState(prevState => ({
        projectList: [...prevState.projectList, data],
      }))
    }
  }

  getAddProjects = () => (
    <form className="form-card" onSubmit={this.projectSubmit}>
      <div className="card-form">
        <p className="text-label" htmlFor="projectName">
          Project Name
        </p>
        <input
          type="text"
          id="projectName"
          className="input"
          onChange={this.getProjectName}
        />
      </div>
      <div className="card-form">
        <p className="text-label" htmlFor="projectName">
          Project link
        </p>
        <input
          type="text"
          id="projectName"
          className="input"
          onChange={this.getProjectLink}
        />
      </div>
      <div className="card-form">
        <p className="text-label" htmlFor="projectName">
          image Url
        </p>
        <input
          type="text"
          id="projectName"
          className="input"
          onChange={this.getProjectUrl}
        />
      </div>
      <div className="card-form">
        <p className="text-label" htmlFor="projectName">
          Description
        </p>
        <textarea className="text-area" onChange={this.getProjectDescription}>
          {null}
        </textarea>
      </div>
      <div className="submit-btn-card">
        <button className="btn-submit" type="submit">
          Add
        </button>
      </div>
    </form>
  )

  render() {
    const {projectName, projectLink, description, projectList} = this.state
    localStorage.setItem('project_List', JSON.stringify(projectList))
    console.log(projectName)
    console.log(projectLink)
    console.log(projectList)
    console.log(description)
    return (
      <>
        <div className="home-main-container">
          {this.getDetailsCard()}
          {this.getBannerCard()}
        </div>
        <div className="add-project-card">
          <h1 className="heading-ad">Add Project</h1>
          <div className="add-projects-details-card">
            {this.getAddProjects()}
          </div>
        </div>
        <div className="bottom-card">{null}</div>
      </>
    )
  }
}

export default Home
