const OurPeople = () => {
  return (
    <section className=" our-people pt-5 pb-5">
      <h2 className="text-center pt-2 pb-2">OUR PEOPLE</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col d-flex justify-content-center align-items-center  ">
          <div className="translateY-4">
            <div className="img-cover  ">
              <img
                className="rounded-2"
                src="https://static.wixstatic.com/media/9488f5_51884179b90d4f15846f0ba8e3fd9076~mv2.jpg/v1/fill/w_174,h_198,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/13.jpg"
                alt=""
              />
            </div>
            <div className="name mt-3 text-center">Mohamed Fathy</div>
            <div className="title text-center">Executive Counsel</div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className=" ">
            <div className="img-cover">
              <img
                className=" rounded-2"
                src="https://static.wixstatic.com/media/9488f5_364c08341c0146739187ed006e0a28b2~mv2.jpg/v1/fill/w_174,h_198,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12.jpg"
                alt=""
              />
            </div>
            <div className="name mt-3 text-center">Mohamed ElGammal</div>
            <div className="title text-center">Chief Attorney & Founder</div>
          </div>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <div className="translateY-4">
            <div className="img-cover">
              <img
                className=" rounded-2"
                src="https://static.wixstatic.com/media/9488f5_e5d5a87cb5764b41b72f091dc2948d60~mv2.jpg/v1/fill/w_174,h_198,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9.jpg"
                alt=""
              />
            </div>
            <div className="name mt-3 text-center">Ahmed ElGammal</div>
            <div className="title  text-center">Executive Counsel</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPeople
