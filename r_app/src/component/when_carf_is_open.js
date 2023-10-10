
import React, { Component } from 'react'; // Import React and Component
import mapboxgl from 'mapbox-gl'; // Import mapboxgl library

class  Opencard extends Component {
    componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N3aW5hbGV4IiwiYSI6ImNsbmV1endyMjBsNDEycXRjNmt4M2I3a28ifQ.M0WoyDbplPY3KfJKN5HZVg'; // Replace with your Mapbox access token
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [72.8777, 19.0760], // Default center (New York City)
      zoom: 9.7
    });

    // Function to calculate the route
    function calculateRoute() {
      var startLocation = encodeURIComponent(document.getElementById('startLocation').value);
      var endLocation = encodeURIComponent(document.getElementById('endLocation').value);

      // Use a geocoding service to convert place names to coordinates
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${startLocation}.json?access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(startData => {
          var startCoordinates = startData.features[0].geometry.coordinates;

          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${endLocation}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => response.json())
            .then(endData => {
              var endCoordinates = endData.features[0].geometry.coordinates;

              // Now, use the coordinates to fetch the route
              fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${startCoordinates.join(',')};${endCoordinates.join(',')}?access_token=${mapboxgl.accessToken}`)
                .then(response => response.json())
                .then(data => {
                  if (data.routes && data.routes.length > 0) {
                    var distance = (data.routes[0].distance / 1000).toFixed(2); // Convert meters to kilometers
                    document.getElementById('totalDistance').textContent = distance;
                    console.log(distance)
                    var route = data.routes[0].geometry;
                    if (!map.getSource('route')) {
                      map.addSource('route', {
                        type: 'geojson',
                        data: {
                          type: 'Feature',
                          properties: {},
                          geometry: {
                            type: 'LineString',
                            coordinates: []
                          }
                        }
                      });
                    }
                    map.getSource('route').setData(route);
                  } else {
                    console.error('No route found.');
                    document.getElementById('totalDistance').textContent = 'N/A';
                  }
                })
                .catch(error => {
                  console.error('Error fetching route data:', error);
                  document.getElementById('totalDistance').textContent = 'N/A';
                });
            })
            .catch(error => {
              console.error('Error fetching end location coordinates:', error);
              document.getElementById('totalDistance').textContent = 'N/A';
            });
        })
        .catch(error => {
          console.error('Error fetching start location coordinates:', error);
          document.getElementById('totalDistance').textContent = 'N/A';
        });
    }

    // Attach the calculateRoute function to the button click event
    document.getElementById('calculateButton').addEventListener('click', calculateRoute);
    
  }
  
  render() {
    return (
      <>
        <div id="inputs">
        <div id="map"></div>
    
       
        <br/>
        <div className="address">
        <div id="services">Our services are all across Mumbai </div><br/><br/>
          
          <input type="text" class="route form-control" id="startLocation" placeholder="Enter start location" /><br/><br/>
         
          <input  type="text" aria-label="default input example" class="route form-control " id="endLocation" placeholder="Enter end location" /><br/><br/>
          <button   class="size btn btn-success" id="calculateButton">Calculate Route</button>
          <p id="distance">Total Distance: <span id="totalDistance">-</span> km</p>
       
                 
              
              <div class="input-group">
            
              <textarea  placeholder='Enter your address' class="form-control" aria-label="With textarea"></textarea>
              
            </div><br/>
            <button  type="button" class=" size btn btn-success">Booknow</button>
            
          </div><br/>
          

       
        </div>

    
        
        
 
      </>
    );
  }
}

export default Opencard;
