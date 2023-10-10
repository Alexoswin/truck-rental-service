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


  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" Component={Index}/>
          <Route path='/Bookings' Component={Bookings} />

          <Route path="/Tracking" Component={Tracking} />
          <Route path="/Account" Component={Account}/>
          <Route path ="/Details/truck1" element={<Opencard image={i1}
           cost="8" text="Cost per Kilometer: $0.45 Capacity: 10 tons Description: Truck 1 is an economical choice for transporting goods. It offers a competitive cost per kilometer and can handle up to 10 tons of cargo. Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck2" element={<Opencard image={i2}
          cost="10" text="Cost per Kilometer: $0.50Capacity: 8 tonsDescription: Truck 2 provides a good balance between cost-efficiency and cargo capacity. With a cost per kilometer of $0.50, it can carry up to 8 tons of freight. Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck3" element={<Opencard image={i3} 
           cost="15" text="Cost per Kilometer: $0.55 Capacity: 12 tons Description: Truck 3 is a reliable choice for transporting heavy loads. While its cost per kilometer is slightly higher at $0.55, it boasts a generous capacity of 12 tons. Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck4" element={<Opencard image={i4} 
          cost="50" text="Cost per Kilometer: $0.60 Capacity: 6 tons Description: Truck 4 is a compact and cost-effective option for smaller cargo. It comes with a cost per kilometer of $0.60 and can carry up to 6 tons of goods. Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck5" element={<Opencard image={i5} 
          cost="67" text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck6" element={<Opencard image={i6} 
          cost="100" text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/Details/truck7" element={<Opencard image={i7}
           cost="100" text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight Experience the perfect blend of power and reliability with our range of trucks, designed to conquer any road or job. These robust vehicles offer exceptional performance, cutting-edge technology, and unmatched durability, making them the ideal choice for both work and play. Whether you're hauling heavy loads or embarking on an adventure, our trucks are your trusted companions on the road ahead" />} />
          <Route path ="/login" Component={Login} />  

        </Routes>
      </Router>
            
          

            
      
    </>
  );
}

export default App;
