const OurFirm = () => {
  const style = {
    backgroundImage: `url("https://static.wixstatic.com/media/9488f5_74b663b74e474ecd947bbf4886c2550a~mv2.jpg/v1/fill/w_1092,h_792,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9488f5_74b663b74e474ecd947bbf4886c2550a~mv2.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight:'100vh'
  }

  return (
    <div className="our-firm" style={style}>
      <div className=" p-4 container">
        <h2 className=" text-center fw-normal fs-1 ui-text-900 mb-5">
          OUR FIRM
        </h2>
        <section className="text-section">
          <div>
            <strong className="fs-5 ui-text-900">Our mission:</strong>
            <p className="fw-normal fs-6 text-custom-spacing">
              To provide you with outstanding, personalized representation and
              effective legal solutions that empowers you to navigate through
              legal challenges with confidence. We strongly belief in the
              importance of defending the rights of our customers accordingly,
              we give priority to their interests first. With a strong emphasis
              on integrity, innovation and excellence, we aim to build enduring
              relationships based on trust and results. Our experienced team of
              attorneys is committed to serving as trusted advocates with
              mastery in their craft, presenting you with the optimal outcomes.
            </p>
          </div>
        </section>
        <section className="text-section mb-5">
          <div>
            <strong className="fs-5 ui-text-900">Our vision:</strong>
            <p className="text-custom-spacing">
              To be more than just a legal office. We strive with every effort
              to build professional relationships with our clients and provide
              them with a protection system based on knowledge of legal
              developments, integrated protection systems that exceeds
              expectations and technology oriented approach based on innovative
              strategies, accordingly we aspire to make a meaningful and lasting
              impact.
            </p>
          </div>
        </section>
        <section className="text-section">
          <p className="text-custom-spacing">
            We seek to provide our clients with legal support at the highest
            level in terms of professionalism, understanding, transparency and
            credibility, focusing primarily on the interest of our clients. At
            the end, we look for a world where everyone has access to quality
            legal representation, while ensuring their rights and interests are
            accurately and confidentially guaranteed.
          </p>
        </section>
        <div className="our-value-section my-2">
          <strong className="fs-5 ui-text-900">Our Values:</strong>
          <ul className=" pt-1">
            <li>Integrity & Transparency</li>
            <li>Passion & Innovation</li>
            <li>Excellence & Accountability</li>
            <li>Privacy & Security</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurFirm
