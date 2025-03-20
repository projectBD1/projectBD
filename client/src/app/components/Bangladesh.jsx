"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import("react-leaflet").then((mod) => mod.GeoJSON), { ssr: false });

export default function BangladeshMap() {
  const position = [23.685, 90.3563]; 
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bangladesh-districts.json"); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); 
        setGeoData(data);
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      }
    };

    fetchData();
  }, []);


  const districtStyle = {
    fillColor: "#FFEDA0", 
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: '3',
    fillOpacity: 0.7,
  };

  return (
    <MapContainer center={position} zoom={7} style={{ height: "500px", width: "100%" }} minZoom={6} maxZoom={12} scrollWheelZoom={true} maxBounds={[[19.5, 87.5], [27.0, 94.0]]}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {geoData && geoData.type === "FeatureCollection" && (
        <GeoJSON data={geoData} style={districtStyle} />
      )}
    </MapContainer>
  );
}
