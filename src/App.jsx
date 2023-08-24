
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Room from './Components/Room/Room'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Subscription from './Components/Subscription/Subscription'
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Room></Room>
      <About></About>
      <Subscription></Subscription>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
