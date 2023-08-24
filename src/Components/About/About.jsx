import './About.css'

function About() {
  return (
    <>
       <section className="about">
        <div className="container">
        <div className="about-info">
            <h2>About</h2>
            <p>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p>We accept:</p>
        </div>
        <div className="about-img">
            <img src="https://www.w3schools.com/w3images/map.jpg"></img>
        </div>
        </div>
        <ul className="about-list">
            <li><img src="https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png"></img><span>423 Some adr, Chicago, US</span></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RedPhone_icon_2014.svg/1200px-RedPhone_icon_2014.svg.png"></img><span>Phone: +00 151515</span></li>
            <li><img src="https://icon-library.com/images/red-email-icon-png/red-email-icon-png-13.jpg"></img><span>Email: mail@mail.com</span></li>
        </ul>
        <p className="alert"><span>i</span> On demand, we can offer playstation, babycall, children care, dog equipment, etc.</p>
       </section>
    </>
  )
}

export default About
