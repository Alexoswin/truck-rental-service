
import Card from './card';
import { Link } from 'react-router-dom';


import image1 from "./images/for_card/crop1.jpg"
import image2 from "./images/t4.jpeg"
import image3 from "./images/t3.jpeg"
import image4 from "./images/for_card/crop3.jpg"


// importing images for card 
import c1 from "./images/for_card/c1.jpeg"
import c2 from "./images/for_card/c2.jpeg"
import c3 from "./images/for_card/c3.2.jpeg"
import c4 from "./images/for_card/c3.jpeg"
import c5 from "./images/for_card/c4.jpeg"
import c6 from "./images/for_card/c5.jpeg"
import c7 from "./images/for_card/c6.jpeg"



  function Index() {

  return (
    <>
            
      
    <div id="c_block">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active "></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image1} alt="First slide" />
                
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={image4} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only ">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only ">Next</span>
          </a>
     

      </div>
    </div> 
             
      <div id="under_image_text">

      <p id="text">
      
        Rent a truck Now  

        <i className="bi bi-truck" ></i>
        <svg xmlns="http://www.w3.org/2000/svg" id="icon" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>

        <i className="bi bi-truck"></i>
        <svg xmlns="http://www.w3.org/2000/svg" id="icon" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>

      </p>

      </div>

      
                      
     
        <Link to="/Details/truck1">  
          <Card text="Cost per Kilometer: $0.45 Capacity: 10 tons Description: Truck 1 is an economical choice for transporting goods. It offers a competitive cost per kilometer and can handle up to 10 tons of cargo." url={c1}/>
        </Link>
        <Link to="/Details/truck2">
          <Card text="Cost per Kilometer: $0.50Capacity: 8 tonsDescription: Truck 2 provides a good balance between cost-efficiency and cargo capacity. With a cost per kilometer of $0.50, it can carry up to 8 tons of freight." url={c2}/>
        </Link>
        <Link to="/Details/truck3">
          <Card text="Cost per Kilometer: $0.55 Capacity: 12 tons Description: Truck 3 is a reliable choice for transporting heavy loads. While its cost per kilometer is slightly higher at $0.55, it boasts a generous capacity of 12 tons." url={c3}/>
        </Link>
        <Link to="/Details/truck4">
          <Card text="Cost per Kilometer: $0.60 Capacity: 6 tons Description: Truck 4 is a compact and cost-effective option for smaller cargo. It comes with a cost per kilometer of $0.60 and can carry up to 6 tons of goods." url={c4}/>
        </Link>
        <Link to="/Details/truck5">
          <Card  text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight"  url={c5}/>
        </Link>
        <Link  to="/Details/truck6">
          <Card text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight"  url={c6}/>
        </Link>
        <Link to="/Details/truck7">
          <Card text="Cost per Kilometer: $0.65 Capacity: 15 tons Description: Truck 5 is a heavy-duty hauler with a cost per kilometer of $0.65. It excels in transporting large loads, accommodating up to 15 tons of freight"  url={c7}/>
        </Link>
      
        

        
     
</>
  );
}


export default Index;
