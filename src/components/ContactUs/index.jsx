import ContactInfo from './ContactInfo'
import Map from './Map'

const ContactUs = () => {
  return (
    <section className="section contact-us pt-5 pb-5">
      <div className="container">
        <h2 className="fs-1 pt-4 pb-4 ui-text-900">CONTACT US</h2>
        <div>
          <strong className="fs-6 d-inline ui-text-900">
            At MG Law Office,
          </strong>
          <p className=" d-inline ms-2  text-custom-spacing">
            we are dedicated to deliver exceptional legal services to our
            diverse clients. With our experienced team of attorneys, extensive
            practice areas, and global network of associations, we are
            well-equipped to handle a wide range of legal challenges. We take
            pride in our commitment to professionalism, integrity, and client
            satisfaction.
          </p>
          <p className="text-custom-spacing mt-4">
            Allow us to be your trusted legal partner, providing you with
            comprehensive legal solutions tailored to your specific needs.
          </p>
        </div>
        <ContactInfo />
        <Map />
      </div>
    </section>
  )
}

export default ContactUs
