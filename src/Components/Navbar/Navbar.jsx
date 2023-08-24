
import './Navbar.css'

function Navbar() {
  return (
    <>
    <header>
      <navbar>
        <ul className="navbar-list">
          <li id="logo"><img src="https://cdn-icons-png.flaticon.com/512/78/78257.png"></img><p>Logo</p></li>
          <li ><a href="#">Rooms</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button id="book-button">Book Now</button>
      </navbar>
    </header>
    </>
  )
}

export default Navbar