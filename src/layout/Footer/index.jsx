import { FaTwitterSquare } from "react-icons/fa"
import { IoLogoLinkedin } from "react-icons/io"

const Footer = () => {
  return (
    <div className=" ui-bg-900 w-100">
      <div className=" container d-flex flex-column flex-md-row justify-content-between align-items-center py-5">
        <p className=" text-white small">
          © 2023 by IT Future Powered and secured by IT Future
        </p>
        <div className="social-media">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-2"
          >
            <IoLogoLinkedin />
          </a>

          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" fs-3"
          >
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
