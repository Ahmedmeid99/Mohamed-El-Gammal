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
        <div className="container d-flex flex-column align-items-center justify-content-between flex-lg-row">
          <div className="logo d-flex align-items-center justify-content-center">
            <Logo/>
          </div>
          <ul className="menu d-flex align-items-center m-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Practice Areas</a>
              <div className="other-links w-100 d-flex justify-content-between align-items-start">
                <div className="img-cover" style={style}></div>
                <div className="sublinks">
                  <ul>
                    <li>
                      <a href="#testimonials">Corporate And Commercial</a>
                    </li>
                    <li>
                      <a href="#team">
                        Citizenship And 2nd Nationality Passport
                      </a>
                    </li>
                    <li>
                      <a href="#services">Licences And Approvals</a>
                    </li>
                    <li>
                      <a href="#our-skills">Legal Opinions And Research</a>
                    </li>
                    <li>
                      <a href="#work-steps">Real Estate</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#events">Intellectual Property Rights</a>
                    </li>
                    <li>
                      <a href="#pricing">Contracts And Agreements</a>
                    </li>
                    <li>
                      <a href="#video">Civil Law And Litigation</a>
                    </li>
                    <li>
                      <a href="#stats">Labor Law And HR Services</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Our People</a>
            </li>
            <li>
              <a href="#">Our Valued Clients</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">E</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
