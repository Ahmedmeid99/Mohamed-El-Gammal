const Landing = () => {
  const style = {
    backgroundImage: `url("https://static.wixstatic.com/media/9488f5_6e70f784607c4ce1b4089415c770ebeb~mv2.jpg/v1/fill/w_980,h_766,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9488f5_6e70f784607c4ce1b4089415c770ebeb~mv2.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '88vh',
  }
  return (
    <div className="landing">
      <div className="info">
        <div className="w-75 ms-auto">
          <h1>MG Law Firm</h1>
          <p>
            MG Law Firm is an Egyptian law firm that has been offering its
            services for over 25 years to a diverse range of clients, including
            local, international, and multinational corporations, large
            enterprises, SMEs, and individuals. We deliver our legal services
            both locally within Egypt and internationally, either directly or
            remotely, tailored to meet the specific needs of our clients.
          </p>
          <button className="action">Find out more about our Firm</button>
        </div>
      </div>
      <div style={style}></div>
    </div>
  )
}

export default Landing
