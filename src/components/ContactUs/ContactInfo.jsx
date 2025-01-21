const ContactInfo = () => {
  return (
    <div>
      <p className="fw-bold mt-5 mb-4">
        For further information or to avail yourself of our professional legal
        services, please reach out to us through:-
      </p>
      <div className="row flex-column flex-md-row w-100 m-auto gap-3">
        <div className="col contact-col border border-light bg-white d-flex justify-content-center align-items-start flex-column py-4 px-5">
          <h3 className="name  mb-4 fs-3 fw-light align-self-center">
            Mazhar Office
          </h3>
          <p className="address  small fw-light mb-4">
            35B Mohamed Mazhar St., Zamalek, Cairo
          </p>
          <p className="tel  small fw-light ">
            <strong>Tel</strong> :{' '}
            <span className="text-primary ">+202-27353328</span>
          </p>
          <a
            href="mailto:info@gammallaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email text-primary small fw-light mb-3"
          >
            info@gammallaw.com
          </a>
          <div className="time w-100  small d-flex justify-content-between">
            <span>Sun- Thu </span>
            <span>9:00 am – 6:00 pm</span>
          </div>
        </div>

        <div className="col contact-col border border-light bg-white d-flex justify-content-center align-items-start flex-column py-4 px-5">
          <h3 className="name  mb-4 fs-3 fw-light align-self-center">
            Anis Office
          </h3>
          <p className="address  small fw-light mb-4">
            11 Mohamed Anis St., Zamalek, Cairo
          </p>
          <p className="tel  small fw-light ">
            <strong>Tel</strong> :
            <span className="text-primary">+02-27350010</span>
          </p>
          <a
            href="mailto:info@gammallaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email text-primary small fw-light  mb-3"
          >
            info@gammallaw.com
          </a>
          <div className="time w-100  small d-flex justify-content-between">
            <span>Sun- Thu </span>
            <span>9:00 am – 6:00 pm</span>
          </div>
        </div>

        <div className="col contact-col border border-light bg-white d-flex justify-content-center align-items-start flex-column py-4 px-5">
          <h3 className="name  mb-4 fs-3 fw-light align-self-center">
            Giza Office
          </h3>
          <p className="address  small fw-light mb-4">15 Giza St., Giza</p>
          <p className="tel  small fw-light ">
            <strong>Tel</strong> :{' '}
            <span className="text-primary">+202-35717166</span>
          </p>
          <a
            href="mailto:info@gammallaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email text-primary small fw-light  mb-3"
          >
            info@gammallaw.com
          </a>
          <div className="time   small d-flex justify-content-start">
            <span>Sun- Thu </span>
            <span>9:00 am – 6:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
