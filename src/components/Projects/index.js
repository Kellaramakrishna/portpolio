import './index.css'

const Projects = () => {
  const projectListData = JSON.parse(localStorage.getItem('project_List'))

  const displayProjects = () => (
    <>
      {projectListData.map(eachItem => (
        <li className="item">
          <div className="card-1-p">
            <div>
              <h1 className="name-project">{eachItem.projectName}</h1>
              <p className="p-description">{eachItem.description}</p>
              <button className="btn-view" type="button">
                View Project
              </button>
            </div>
          </div>
          <div className="image-card-project">
            <img
              src={eachItem.imageUrl}
              alt={eachItem.projectName}
              className="image-size"
            />
          </div>
        </li>
      ))}
    </>
  )

  const getBottomData = () => (
    <div className="bottom-card-links">
      <img
        src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1704437132/Vectorinst_lncqdm.png"
        alt="instagram"
        className="icons"
      />
      <img
        src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1704437089/Vectorlinked_av1vgt.png"
        alt="linkedIn"
        className="icons"
      />
      <img
        src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1704437235/Vectoremail_dzvjwu.png"
        alt="email"
        className="icons"
      />
    </div>
  )

  return (
    <>
      <h1 className="heading-ad">Project</h1>
      <ul className="ul">
        {projectListData.length > 0 ? (
          <>
            {displayProjects()}
            {getBottomData()}
            <p
              style={{color: '#828282', fontSize: '10px', textAlign: 'center'}}
            >
              Copyright © 2024. All rights reserved
            </p>
          </>
        ) : (
          <h1 className="msg">No Projects</h1>
        )}
      </ul>
      <div className="bottom-card">{null}</div>
    </>
  )
}

export default Projects
