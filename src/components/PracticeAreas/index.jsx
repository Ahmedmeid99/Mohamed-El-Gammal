import { FaSquare } from 'react-icons/fa6'

const PracticeAreas = () => {
  return (
    <div className="practice-areas pt-5 pb-5">
      <h1 className=" pb-5">PRACTICE AREAS</h1>

      <div className="d-flex justify-content-center align-items-start gap-5 pb-4">
        <ul className=" list-group d-flex justify-content-center align-items-start gap-4">
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />
            <a href="#testimonials">Corporate And Commercial</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#team">Citizenship And 2nd Nationality Passport</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#services">Licenses And Approvals</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#our-skills">Legal Opinions And Research</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#work-steps">Real Estate</a>
          </li>
        </ul>
        <ul className=" list-group d-flex justify-content-center align-items-start gap-4">
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#events">Intellectual Property Rights</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#pricing">Contracts And Agreements</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#video">Civil Law And Litigation</a>
          </li>
          <li className=" d-flex justify-content-center align-items-center gap-3">
            <FaSquare />

            <a href="#stats">Labor Law And HR Services</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PracticeAreas
