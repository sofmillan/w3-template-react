import './Contact.css'

function Contact() {
  return (
    <>
      <section className="contact">
        <h2>Contact</h2>
        <p>If you have any questions, do not hesitate to ask them.</p>
        <ul className="contact-list">
            <li><img src="https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png"></img><span>Chicago, US</span></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RedPhone_icon_2014.svg/1200px-RedPhone_icon_2014.svg.png"></img><span>Phone: +00 151515</span></li>
            <li><img src="https://icon-library.com/images/red-email-icon-png/red-email-icon-png-13.jpg"></img><span>Email: mail@mail.com</span></li>
        </ul>
        <form className="contact-form">
            <input type="text" className="contact-input" placeholder="Name"/>
            <input type="email" className="contact-input" placeholder="Email"/>
            <input type="text" className="contact-input" placeholder="Message"/>
            <input type="submit" id="contact-button" value="SEND MESSAGE"/>
        </form>
      </section>
    </>
  )
}

export default Contact;
