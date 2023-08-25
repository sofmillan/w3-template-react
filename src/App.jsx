
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Room from './Components/Room/Room'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Hotel from './Components/Hotel/Hotel'
import Subscription from './Components/Subscription/Subscription'
import Banner from './Components/Banner/Banner'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Room></Room>
      <About></About>
      <Hotel></Hotel>
      <Subscription></Subscription>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
