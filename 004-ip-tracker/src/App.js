import "./App.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>IP Address Tracker</h1>
        <div className="search">
          <input type="text" placeholder="192.212.174.101" />
          <button>
            <img src="icon-arrow.svg" alt="" />
          </button>
        </div>

        <div className="info">
          <div>IP ADDRESS</div>
          <div>192.212.174.101</div>
          <div>LOCATION</div>
          <div>New York</div>
          <div>TIMEZONE</div>
          <div>UTC - 05:00</div>
          <div>ISP</div>
          <div>SpaceX Starlink</div>
        </div>
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
