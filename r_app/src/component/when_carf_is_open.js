import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class Opencard extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib3N3aW5hbGV4IiwiYSI6ImNsbmV1endyMjBsNDEycXRjNmt4M2I3a28ifQ.M0WoyDbplPY3KfJKN5HZVg'; // Replace with your Mapbox access token
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [72.8777, 19.0760], // Default center (New York City)
      zoom: 9.7,
    });

    // Function to calculate the route
    const calculateRoute = () => {
      const startLocation = encodeURIComponent(
        document.getElementById('startLocation').value
      );
      const endLocation = encodeURIComponent(
        document.getElementById('endLocation').value
      );

      // Use a geocoding service to convert place names to coordinates
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${startLocation}.json?access_token=${mapboxgl.accessToken}`
      )
        .then((response) => response.json())
        .then((startData) => {
          const startCoordinates = startData.features[0].geometry.coordinates;

          fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${endLocation}.json?access_token=${mapboxgl.accessToken}`
          )
            .then((response) => response.json())
            .then((endData) => {
              const endCoordinates = endData.features[0].geometry.coordinates;

              // Now, use the coordinates to fetch the route
              fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoordinates.join(
                  ','
                )};${endCoordinates.join(',')}?access_token=${mapboxgl.accessToken}`
              )
                .then((response) => response.json())
                .then((data) => {
                  if (data.routes && data.routes.length > 0) {
                    const distance = (data.routes[0].distance / 1000).toFixed(2); // Convert meters to kilometers

                    // Display the total distance
                    document.getElementById('totalDistance').textContent = `Total Distance: ${distance} km`;

                    // Calculate the total cost based on the cost per kilometer (from props)
                    const costPerKm = this.props.cost; // Assuming cost is passed as a prop
                    const totalCost = (distance * costPerKm).toFixed(2); // Calculate total cost

                    // Display the total cost
                    document.getElementById('totalCost').textContent = `Total Cost: ₹${totalCost}`;
                    
                    // Update the map route
                    const route = data.routes[0].geometry;
                    if (!map.getSource('route')) {
                      map.addSource('route', {
                        type: 'geojson',
                        data: {
                          type: 'Feature',
                          properties: {},
                          geometry: {
                            type: 'LineString',
                            coordinates: [],
                          },
                        },
                      });
                    }
                    map.getSource('route').setData(route);
                  } else {
                    console.error('No route found.');

                    // Display N/A for distance and cost
                    document.getElementById('totalDistance').textContent = 'Total Distance: N/A';
                    document.getElementById('totalCost').textContent = 'Total Cost: ₹N/A';
                  }
                })
                .catch((error) => {
                  console.error('Error fetching route data:', error);

                  // Display N/A for distance and cost
                  document.getElementById('totalDistance').textContent = 'Total Distance: N/A';
                  document.getElementById('totalCost').textContent = 'Total Cost: ₹N/A';
                });
            })
            .catch((error) => {
              console.error('Error fetching end location coordinates:', error);

              // Display N/A for distance and cost
              document.getElementById('totalDistance').textContent = 'Total Distance: N/A';
              document.getElementById('totalCost').textContent = 'Total Cost: ₹N/A';
            });
        })
        .catch((error) => {
          console.error('Error fetching start location coordinates:', error);

          // Display N/A for distance and cost
          document.getElementById('totalDistance').textContent = 'Total Distance: N/A';
          document.getElementById('totalCost').textContent = 'Total Cost: ₹N/A';
        });
    };

    // Attach the calculateRoute function to the button click event
    document.getElementById('calculateButton').addEventListener('click', calculateRoute);
  }
  Openal=()=>{
    alert('booked sucessfully')
  }

  render() {
    const { image, text } = this.props;

    return (
      <>
        <div id="col" className="aliceblue">
          <div className="map_card_image">
            <img className="map_card_style" alt="truck img" src={image} />
            <div className="div-text">
              <p className="paragraph">
                {text}
                <br />
                <br />
                <div className="cost_per_km">Cost per km = ₹{this.props.cost}</div>
              </p>
            </div>
          </div>
          <div id="inputs">
            <div id="map"></div>
            <br />
            <div className="address">
              <div id="services">Our services are all across Mumbai</div>
              <br />
              <br />
              <input
                type="text"
                className="route form-control"
                id="startLocation"
                placeholder="Enter start location"
              />
              <br />
              <input
                type="text"
                aria-label="default input example"
                className="route form-control"
                id="endLocation"
                placeholder="Enter end location"
              />
              <br />
              <button className="size btn btn-success" id="calculateButton">
                Calculate Route
              </button>
              <p id="totalDistance">Total Distance: N/A</p>
              <p id="totalCost">Total Cost: ₹N/A</p>
              <div className="input-group">
                <textarea
                  placeholder="Enter your address"
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <br />
              <button type="button" onClick={this.Openal} className="size btn btn-success">
                Book Now
              </button>
            </div>
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default Opencard;
