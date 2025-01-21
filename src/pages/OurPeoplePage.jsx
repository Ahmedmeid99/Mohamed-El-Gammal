import Layout from '../layout'
import { teamData } from '../Data/team'

const OurPeople = () => {
  return (
    <Layout>
      <div className="pt-5 ui-bg-900">
        <section className="section .team pt-5 pb-5">
          <h1 className="fs-1 text-white fw-bolder text-center my-5">
            Meet The Team
          </h1>
          <ul className="team-members container">
            {teamData.map((person) => (
              <li key={person.name} className="ui-bg-700 mb-5 ">
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-start gap-0 gap-md-4">
                  <div className="person-info p-4">
                    <div className="img-cover mb-3">
                      <img src={person.url} alt="" className=" img-fluid" />
                    </div>
                    <div className="ms-4">
                      <p className="small text-white">{person.title}</p>
                      <p className="fs-5 fw-normal text-white">{person.name}</p>
                      <a
                        href={`mailto:${person.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="email text-primary small fw-light mb-3"
                      >
                        {person.email}
                      </a>
                    </div>
                  </div>
                  <div className="person-details p-4">
                    {person.details.map((para, index) => (
                      <p
                        key={index}
                        className=" text-custom-spacing text-white fw-lighter"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default OurPeople
