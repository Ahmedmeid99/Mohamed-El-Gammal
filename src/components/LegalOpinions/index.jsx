import { FaRegStar } from 'react-icons/fa6'
import { MdOutlineElectricBolt } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import { WiStars } from 'react-icons/wi'

const LegalOpinions = () => {
  return (
    <section
      className="section legal-opinions w-100 pt-5 pb-5"
      id="legal-opinions"
    >
      <h2 className="text-white text-center pb-5 ui-fs-large fw-normal">
        Legal opinions
      </h2>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column flex-md-row gap-5 mb-5">
          <div className="option">
            <h3 className=" text-white mb-4 d-flex justify-content-start align-items-end gap-3">
              <span>
                <WiStars />
              </span>
              <span>Underwriting Agreement</span>
            </h3>
            <p className=" text-white  fs-6">
              One of the ways in which we provide exceptional value is through
              the wide range of features that we offer. Our team created them to
              provide every customer with the best possible experience. Explore
              some of the main features below, and please get in touch to
              receive additional information.
            </p>
          </div>
          <div className="option">
            <h3 className=" text-white mb-4 d-flex justify-content-start align-items-end gap-3">
              <span>
                <FaRegStar />
              </span>
              <span>Legal case of Carrefour</span>
            </h3>
            <p className=" text-white fs-6">
              Our customers deserve the highest level of support, and we work
              tirelessly to maintain those standards. When you choose to work
              with our team, know that you are consistently choosing quality and
              excellence. Customer service is at the heart of everything that we
              do.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column flex-md-row gap-5 mb-5">
          <div className="option">
            <h3 className=" text-white mb-4 d-flex justify-content-start align-items-end gap-3">
              <span>
                <TbWorld />
              </span>
              <span>Multilingual Functionality</span>
            </h3>
            <p className=" text-white  fs-6">
              In today’s globalized world, chances are you are interacting with
              people from more than just one country. This is where our
              multilingual functionality comes into play. Take advantage of this
              unique capability to expand your reach.
            </p>
          </div>
          <div className="option">
            <h3 className=" text-white mb-4 d-flex justify-content-start align-items-end gap-3">
              <span>
                <MdOutlineElectricBolt />
              </span>
              <span>Advanced Tech</span>
            </h3>
            <p className=" text-white  fs-6">
              We are constantly working to improve our offerings and expand upon
              our technological capabilities. Our expert team of professionals
              is passionate about developing the most advanced tech on the
              market. Ready to experience the future? Get in touch.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-contact container d-flex justify-content-center align-items-center flex-column bg-light p-5  rounded-1">
        <p className="fs-4 ui-text-900 mb-5">
          If you’d like more information about our features, get in touch today.
        </p>
        <button className="btn btn-light border border-dark py-2 px-4">
          Get in Touch
        </button>
      </div>
    </section>
  )
}

export default LegalOpinions
