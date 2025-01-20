import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="sticky-img position-relative">
        <div className="img-cover position-sticky top-0 w-100">
          <img
            className=" img-fluid w-100"
            src="https://static.wixstatic.com/media/9488f5_7cf4f8669be54effa552f3d544fdc653~mv2.jpg/v1/fill/w_1092,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9488f5_7cf4f8669be54effa552f3d544fdc653~mv2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row flex-column flex-md-row">
        <div className="col border border-light ui-bg-900 d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
          <span className="text-white fs-1 mt-5  mb-5">
            <FaQuoteLeft />
          </span>
          <h3 className="name text-white mb-4 fs-3 fw-light">
            Alexa Young, CA
          </h3>
          <p className="details text-white fs-5 fw-light w-75 text-center mb-5">
            Testimonials provide a sense of what it’s like to work with you or
            use your products. Change the text and add your own.
          </p>
        </div>

        <div className="col border border-light ui-bg-900 d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
          <span className="text-white fs-1 mt-5  mb-5">
            <FaQuoteLeft />
          </span>
          <h3 className="name text-white  mb-4 fs-3 fw-light">
            Morgan James, NY
          </h3>
          <p className="details text-white fs-5 fw-light w-75 text-center mb-5">
            A great testimonial can boost your brand’s image. Click to edit and
            add your own.
          </p>
        </div>

        <div className="col border border-light ui-bg-900 d-flex justify-content-center align-items-center flex-column pt-5 pb-5">
          <span className="text-white fs-1 mb-5">
            <FaQuoteLeft />
          </span>
          <h3 className="name text-white  mb-4 fs-3 fw-light">
            Lisa Driver, MI
          </h3>
          <p className="details text-white fs-5 fw-light w-75 text-center mb-5">
            Have customers review you and share what they had to say. Click to
            edit and add their testimonial.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
