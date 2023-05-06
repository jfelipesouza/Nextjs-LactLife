import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { ResetCenterView } from "./ResetCenterView";

export type Location = {
  lat: number;
  lon: number;
};
export type Place = {
  id: string;
  name: string;
  location: Location;
};

type MapProps = {
  place: Place;
};

const RestaurantMap: React.FC<MapProps> = ({ place }) => {
  const {
    location: { lat, lon },
  } = place;

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={18}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]} title={place.name} />

      <ResetCenterView location={{ lat, lon }} />
    </MapContainer>
  );
};

export default RestaurantMap;
