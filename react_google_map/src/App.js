import "./App.css";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsService,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import logo from "./Designer2.png";

const containerStyle = {
  width: "800px",
  height: "800px",
};
const bahaddarhatFlyover = { lat: 22.354928, lng: 91.832731 };
const patengaBeach = { lat: 22.283158, lng: 91.790859 };

const center = {
  // 22.317191279850146, 91.7999899341374
  lat: 22.317191279850146,
  lng: 91.7999899341374,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const market_loc = {
    lat: 22.317,
    lng: 91.7999899341374,
  };

  const locations = [
    { key: "bahaddarhatFlyover", location: { lat: 22.354928, lng: 91.832731 } },
    { key: "foy'sLake", location: { lat: 22.353491, lng: 91.786933 } },
    { key: "patengaBeach", location: { lat: 22.283158, lng: 91.790859 } },
    { key: "bataliHill", location: { lat: 22.338595, lng: 91.815536 } },
    { key: "chandanpuraMosque", location: { lat: 22.343523, lng: 91.841917 } },
    {
      key: "chittagongUniversity",
      location: { lat: 22.470807, lng: 91.780333 },
    },
    { key: "karnafuliBridge", location: { lat: 22.311345, lng: 91.798425 } },
    {
      key: "agrabadCommercialArea",
      location: { lat: 22.327949, lng: 91.820264 },
    },
    { key: "newMarket", location: { lat: 22.338354, lng: 91.838391 } },
    { key: "ethnologicalMuseum", location: { lat: 22.328216, lng: 91.812111 } },
    { key: "dcHillPark", location: { lat: 22.339852, lng: 91.821993 } },
    { key: "laldighiPark", location: { lat: 22.339525, lng: 91.832764 } },
    { key: "sitakundaEcoPark", location: { lat: 22.626303, lng: 91.665806 } },
    { key: "kotwaliCircle", location: { lat: 22.340126, lng: 91.835475 } },
    { key: "shahAmanatAirport", location: { lat: 22.249673, lng: 91.813038 } },
  ];
  useEffect(() => {
    if (map && directions) {
      // Automatically fit the map to the route bounds
      const bounds = new window.google.maps.LatLngBounds();
      directions.routes[0].overview_path.forEach((point) =>
        bounds.extend(point)
      );
      map.fitBounds(bounds);
    }
  }, [map, directions]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* options={{}} is for custom icon */}
      <Marker position={market_loc}></Marker>
      {/* Multiple markers */}
      {/* {locations.map((location) => (
        <Marker key={location.key} position={location.location}></Marker>
      ))} */}
      {!directions && (
        <DirectionsService
          options={{
            origin: bahaddarhatFlyover,
            destination: patengaBeach,
            travelMode: window.google.maps.TravelMode.DRIVING,
          }}
          callback={(result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`Error fetching directions ${status}`);
            }
          }}
        />
      )}

      {directions && <DirectionsRenderer directions={directions} />}

      <Marker position={bahaddarhatFlyover} />
      <Marker position={patengaBeach} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default App;
