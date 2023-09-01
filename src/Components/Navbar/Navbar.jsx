import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
    <header>
      <navbar>
        <ul className="navbar-list">
          <li id="logo"><img src="https://cdn-icons-png.flaticon.com/512/78/78257.png"></img><p><Link to="/">Logo</Link></p></li>
          <li ><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Contact</a></li>
          <li><Link to="/plans">Plans</Link></li>
        </ul>
        <button id="book-button">Book Now</button>
      </navbar>
    </header>
    </>
  )
}

export default Navbar