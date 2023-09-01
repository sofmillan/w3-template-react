import { Route, Routes } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Room from '../Room/Room';
import About from '../About/About';
import Plan from '../Plan/Plan';
import App from '../../App';
function Router() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<App></App>} />
          <Route path="/rooms" element={ <Room />} />
          <Route path="/about" element={ <About />} />
          <Route path="/plans" element= {<Plan />}/>
        </Routes>
        <Footer />
      </>
    );
  }

  export default Router;