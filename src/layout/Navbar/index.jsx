import { NavLink } from 'react-router'
import lawBalanceImg from '../../assets/images/law-balance.jpg'
import Logo from '../../ui/Logo'

const Navbar = () => {
  const style = {
    backgroundImage: `url(${lawBalanceImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '30rem',
    height: '60vh',
    opacity: '.5',
    borderRadius: '1rem',
  }

  return (
    <header className="header">
      <div className="header-navbar">
        <div className="container position-relative d-flex flex-column align-items-center justify-content-between flex-lg-row">
          <div className="logo d-flex align-items-center justify-content-center">
            <Logo />
          </div>
          <ul className="menu d-flex align-items-center m-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <span>Practice Areas</span>
              <div className="other-links w-100 d-flex justify-content-between align-items-start gap-4">
                <div className="img-cover" style={style}></div>
                <div className="sublinks">
                  <ul>
                    <li>
                      <NavLink to="/123testimonials">
                        Corporate And Commercial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/123team">
                        Citizenship And 2nd Nationality Passport
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/123services">Licences And Approvals</NavLink>
                    </li>
                    <li>
                      <NavLink to="/123our-skills">
                        Legal Opinions And Research
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/123work-steps">Real Estate</NavLink>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <NavLink to="/123events">
                        Intellectual Property Rights
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/123pricing">Contracts And Agreements</NavLink>
                    </li>
                    <li>
                      <NavLink to="/123video">Civil Law And Litigation</NavLink>
                    </li>
                    <li>
                      <NavLink to="/123stats">Labor Law And HR Services</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/People">Our People</NavLink>
            </li>
            <li>
              <NavLink to="/Clients">Our Valued Clients</NavLink>
            </li>
            <li>
              <NavLink to="/Testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/E">E</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
