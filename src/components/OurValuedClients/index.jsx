import Slider from 'react-slick'

const OurValuedClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <section
      className="section our-valued-clients w-100 pt-5 pb-5"
      id="clients"
    >
      <h2 className="text-white text-center pt-5 pb-5 ui-fs-large fw-normal">
        Our valued clients
      </h2>
      <div className="slider-container container ps-3 pe-3">
        <Slider {...settings}>
          <div className="slider-item">
            <h3>1</h3>
          </div>
          <div className="slider-item">
            <h3>2</h3>
          </div>
          <div className="slider-item">
            <h3>3</h3>
          </div>
          <div className="slider-item">
            <h3>4</h3>
          </div>
          <div className="slider-item">
            <h3>5</h3>
          </div>
          <div className="slider-item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default OurValuedClients
