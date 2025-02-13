"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";


const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const icon = dynamic(() => import("leaflet").then((mod) => mod.icon), { ssr: false });

export default function BangladeshMap() {
  const position = [23.685, 90.3563]; 

  return (
    <MapContainer center={position} zoom={7} style={{ height: "500px", width: "100%" }}>
      
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      
      <Marker position={[23.8103, 90.4125]}>
        <Popup>Dhaka, Capital of Bangladesh</Popup>
      </Marker>
    </MapContainer>
  );
}
