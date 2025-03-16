import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyAh9dvrbnMUlKX3xXPPt0z6H8QDXSyCYLA"; // Replace with your API Key

const MapComponent = ({ deliveryLocation }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_MAPS_API_KEY });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={deliveryLocation || { lat: 12.9716, lng: 77.5946 }} // Default location
      mapContainerStyle={{ height: "400px", width: "100%" }}
    >
      {deliveryLocation && <Marker position={deliveryLocation} />}
    </GoogleMap>
  );
};

export default MapComponent;
