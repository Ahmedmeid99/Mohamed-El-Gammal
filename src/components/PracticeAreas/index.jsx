/* eslint-disable react/prop-types */
import { FaSquare } from 'react-icons/fa6'

const Link = ({ text, to }) => {
  return (
    <li className="d-flex justify-content-center align-items-center gap-3">
      <FaSquare />
      <a href={to} className="text-white fs-5">
        {text}
      </a>
    </li>
  )
}

const PracticeAreas = () => {
  return (
    <section className="practice-areas ui-bg-900 w-100 pt-5 pb-5">
      <h1 className="text-white text-center pb-5 ui-fs-large">
        PRACTICE AREAS
      </h1>

      <div className="d-flex justify-content-center align-items-start pt-md-4 gap-5 pb-4">
        <ul className="list-group d-flex justify-content-center align-items-start gap-4">
          <Link text="Corporate And Commercial" to="#testimonials" />
          <Link text="Citizenship And 2nd Nationality Passport" to="#team" />
          <Link text="Licenses And Approvals" to="#services" />
          <Link text="Legal Opinions And Research" to="#our-skills" />
          <Link text="Real Estate" to="#work-steps" />
        </ul>
        <ul className="list-group d-flex justify-content-center align-items-start gap-4">
          <Link text="Intellectual Property Rights" to="#events" />
          <Link text="Contracts And Agreements" to="#pricing" />
          <Link text="Civil Law And Litigation" to="#video" />
          <Link text="Labor Law And HR Services" to="#stats" />
        </ul>
      </div>
    </section>
  )
}

export default PracticeAreas
