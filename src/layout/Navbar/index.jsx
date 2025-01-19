/* eslint-disable react/prop-types */
import { NavLink } from 'react-router'
import lawBalanceImg from '../../assets/images/law-balance.jpg'
import Logo from '../../ui/Logo'

const NavItem = ({ text, to, style }) => {
  return (
    <NavLink
      className={`position-relative d-block overflow-x-hidden text-capitalize fs-6  pt-1 pb-1 ps-3 pe-3 ui-text-200 ${style}`}
      to={to}
    >
      {text}
    </NavLink>
  )
}

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
    <header className="header position-fixed top-0 w-100">
      <div className="header-navbar position-relative ui-bg-900  ui-index-99 ui-shadow-4">
        <div className="container  position-relative d-flex flex-column align-items-center justify-content-between flex-lg-row">
          <div className="logo d-flex align-items-center justify-content-center">
            <Logo />
          </div>
          <ul className="menu d-flex align-items-center m-0">
            <li>
              <NavItem text="Home" to="/" />
            </li>
            <li>
              <span className=" position-relative d-block overflow-x-hidden text-capitalize fs-6  pt-4 pb-4 ps-3 pe-3 ui-text-200">
                Practice Areas
              </span>
              <div className="other-links w-100 d-flex justify-content-between align-items-start gap-4">
                <div className="img-cover" style={style}></div>
                <div className="sublinks">
                  <ul>
                    <li>
                      <NavItem
                        text="Corporate And Commercial"
                        to="/123testimonials"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Citizenship And 2nd Nationality Passport"
                        to="/123team"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Licenses And Approvals"
                        to="/123services"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Legal Opinions And Research"
                        to="/123our-skills"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Real Estate"
                        to="/123work-steps"
                        style="pt-3 pb-3"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <NavItem
                        text="Intellectual Property Rights"
                        to="/123events"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Contracts And Agreements"
                        to="/123pricing"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Civil Law And Litigation"
                        to="/123video"
                        style="pt-3 pb-3"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Labor Law And HR Services"
                        to="/123stats"
                        style="pt-3 pb-3"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavItem text="Our People" to="/People" />
            </li>
            <li>
              <NavItem text="Our Valued Clients" to="/Clients" />
            </li>
            <li>
              <NavItem text="Testimonials" to="/Testimonials" />
            </li>
            <li>
              <NavItem text="Contact" to="/Contact" />
            </li>
            <li>
              <NavItem text="E" to="/E" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
