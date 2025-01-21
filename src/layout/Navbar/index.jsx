/* eslint-disable react/prop-types */
import { NavLink } from 'react-router'
import lawBalanceImg from '../../assets/images/law-balance.jpg'
import Logo from '../../ui/Logo'
import { IoMdClose } from 'react-icons/io'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

const NavItem = ({ text, to, style }) => {
  return (
    <NavLink
      className={`text-uppercase pt-1 pb-1 ps-3 pe-3 ui-text-200 ${
        style ?? ''
      }`}
      to={to}
    >
      {text}
    </NavLink>
  )
}

const LinkItem = ({ text, localSection, style }) => {
  return (
    <a
      className={`text-uppercase pt-1 pb-1 ps-3 pe-3 ui-text-200 ${
        style ?? ''
      }`}
      href={localSection}
    >
      {text}
    </a>
  )
}
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const style = {
    backgroundImage: `url(${lawBalanceImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '30rem',
    height: '60vh',
    opacity: '.8',
    borderRadius: '1rem',
  }

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  return (
    <header className="header position-fixed top-0 w-100">
      <div className="header-navbar position-relative ui-bg-900  ui-index-99 ui-shadow-4">
        <div className="container  position-relative d-flex flex-row align-items-center justify-content-between flex-lg-row">
          <div className="logo ">
            <Logo />
          </div>
          <span
            onClick={openMenu}
            className="text-end  ui-text-200 ui-btn-open"
          >
            <FaBarsStaggered />
          </span>

          <ul className="menu m-0">
            <li>
              <NavItem text="Home" to="/" />
            </li>
            <li>
              <span className="nav-link position-relative d-block text-uppercase fs-6 pt-4 pb-4 ps-3 pe-3 ui-text-200">
                <span>Practice Areas</span>
                <span className="drop-down-icon">
                  {/* <RiArrowDropDownLine /> */}
                </span>
              </span>
              <div className="other-links w-100 d-flex justify-content-between align-items-start gap-4">
                <div className="img-cover" style={style}></div>
                <div className="sublinks">
                  <ul>
                    <li>
                      <NavItem
                        text="Corporate And Commercial"
                        to="/123testimonials"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Citizenship And 2nd Nationality Passport"
                        to="/123team"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Licenses And Approvals"
                        to="/123services"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Legal Opinions And Research"
                        to="/legal-opinions"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Real Estate"
                        to="/123work-steps"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <NavItem
                        text="Intellectual Property Rights"
                        to="/123events"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Contracts And Agreements"
                        to="/123pricing"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Civil Law And Litigation"
                        to="/123video"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Labor Law And HR Services"
                        to="/123stats"
                        style="pt-3 pb-3 small"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavItem text="Our People" to="/People" style="small" />
            </li>

            <li>
              <LinkItem
                text="Our Valued Clients"
                localSection="#clients"
                style="small"
              />
            </li>
            <li>
              <LinkItem
                text="Legal opinions"
                localSection="#legal-opinions"
                style=" small"
              />
            </li>
            <li>
              <LinkItem
                text="Testimonials"
                localSection="#testimonials"
                style=" small"
              />
            </li>
            <li>
              <NavItem text="Contact" to="/Contact" style=" small" />
            </li>
            <li>
              <NavItem text="E" to="/E" />
            </li>
          </ul>

          <div
            style={{ right: isMenuOpen ? '0' : '-22rem' }}
            className={`sm-menu-container`}
          >
            <span
              onClick={closeMenu}
              className=" d-block text-end pt-3 pe-4 fs-1 ui-text-200 ui-btn-close"
            >
              <IoMdClose />
            </span>
            <ul className="sm-menu d-flex flex-column gap-3 align-items-start m-0">
              <li>
                <NavItem text="Home" to="/" />
              </li>
              <li>
                <span
                  onClick={toggleDropdown}
                  className="nav-link  position-relative d-block text-uppercase  pt-1 pb-1 ps-3 pe-3 ui-text-200"
                >
                  <span> Practice Areas</span>
                  <span className="drop-down-icon">
                    <RiArrowDropDownLine />
                  </span>
                </span>
                {isDropdownOpen && (
                  <ul>
                    <li>
                      <NavItem
                        text="Corporate And Commercial"
                        to="#testimonials"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Citizenship And 2nd Nationality Passport"
                        to="/123team"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Licenses And Approvals"
                        to="/123services"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Legal Opinions And Research"
                        to="/legal-opinions"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Real Estate"
                        to="/123work-steps"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Intellectual Property Rights"
                        to="/123events"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Contracts And Agreements"
                        to="/123pricing"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Civil Law And Litigation"
                        to="/123video"
                        style="pt-2 pb-2 "
                      />
                    </li>
                    <li>
                      <NavItem
                        text="Labor Law And HR Services"
                        to="/123stats"
                        style="pt-2 pb-2 "
                      />
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavItem text="Our People" to="/People" />
              </li>
              <li>
                <LinkItem text="Our Valued Clients" localSection="#clients" />
              </li>
              <li>
                <LinkItem
                  text="Legal opinions"
                  localSection="#legal-opinions"
                />
              </li>
              <li>
                <LinkItem text="Testimonials" localSection="#testimonials" />
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
      </div>
    </header>
  )
}

export default Navbar
