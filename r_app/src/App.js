import './App.css';


import Navbar from './component/navbar.js'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
 } from 'react-router-dom';
import Index from './component/index';
import Bookings from './component/Bookings';
import Tracking from './component/tracking';
import Account from './component/account';
import Opencard from './component/when_carf_is_open';

//card images
import i1 from "./component/images/for_card/c1.jpeg"
import i2 from "./component/images/for_card/c2.jpeg"
import i3 from "./component/images/for_card/c3.2.jpeg"
import i4 from "./component/images/for_card/c3.jpeg"
import i5 from "./component/images/for_card/c4.jpeg"
import i6 from "./component/images/for_card/c5.jpeg"
import i7 from "./component/images/for_card/c6.jpeg"
import Login from './component/login';





function App() {


  // dark mode 
 

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" Component={Index}/>
          <Route path='/Bookings' Component={Bookings} />

          <Route path="/Tracking" Component={Tracking} />
          <Route path="/Account" Component={Account}/>
          <Route path ="/Details/truck1" element={<Opencard image={i1} />} />
          <Route path ="/Details/truck2" element={<Opencard image={i2} />} />
          <Route path ="/Details/truck3" element={<Opencard image={i3} />} />
          <Route path ="/Details/truck4" element={<Opencard image={i4} />} />
          <Route path ="/Details/truck5" element={<Opencard image={i5} />} />
          <Route path ="/Details/truck6" element={<Opencard image={i6} />} />
          <Route path ="/Details/truck7" element={<Opencard image={i7} />} />
          <Route path ="/login" Component={Login} />  

        </Routes>
      </Router>
            
          

            
      
    </>
  );
}

export default App;
