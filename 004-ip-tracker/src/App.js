import "./App.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>IP Address Tracker</h1>
        <input type="text" />
        <div>info</div>
      </div>
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default App;
