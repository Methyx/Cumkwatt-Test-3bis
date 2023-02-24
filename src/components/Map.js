// Leaflet
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// style
import "../style/map.css";

const Map = ({ data }) => {
  // Icon Leaflet
  const homeIcon = new L.Icon({
    iconUrl: require("../img/here.svg").default,
    iconSize: new L.Point(40, 40),
  });
  //

  return (
    <div className="map">
      <MapContainer
        className="map-container"
        key={JSON.stringify(data.lat, data.long)}
        center={[data.lat, data.long]}
        zoom={16}
        maxZoom={18}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[data.lat, data.long]} icon={homeIcon} />
      </MapContainer>
    </div>
  );
};
export default Map;
