"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import L from "leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const GeoJSON = dynamic(() => import("react-leaflet").then(mod => mod.GeoJSON), { ssr: false });

export default function BangladeshMap() {
  const position = [23.685, 90.3563];
  const [geoData, setGeoData] = useState(null);
  const selectedLayerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/bangladesh-districts.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      }
    };

    fetchData();
  }, []);

  const defaultStyle = {
    fillColor: "#FFEDA0",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };

  const highlightStyle = {
    fillColor: "#FEB24C",
    weight: 3,
    opacity: 1,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.9,
  };

  const onEachFeature = (feature, layer) => {
    const districtName = feature.properties?.ADM2_EN || "Unknown District";
    const divisionName = feature.properties?.ADM1_EN || "Unknown Division";

    layer.bindTooltip(districtName, {
      permanent: false,
      direction: "center",
      className: "district-tooltip",
    });

    layer.on("click", (e) => {
      
      if (selectedLayerRef.current) {
        selectedLayerRef.current.setStyle(defaultStyle);
      }

      
      layer.setStyle(highlightStyle);
      layer.bringToFront();
      selectedLayerRef.current = layer;

      
      if (popupRef.current) {
        popupRef.current.remove();
      }

      
      const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(`
          <div style="font-weight: bold;">${districtName}</div>
          <div style="font-size: 0.9rem;">Division: ${divisionName}</div>
        `)
        .openOn(layer._map);

      popupRef.current = popup;
    });
  };

  return (
    <MapContainer
      center={position}
      zoom={7}
      style={{ height: "500px", width: "100%" }}
      minZoom={6}
      maxZoom={12}
      scrollWheelZoom={true}
      maxBounds={[[19.5, 87.5], [27.0, 94.0]]}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {geoData && geoData.type === "FeatureCollection" && (
        <GeoJSON
          data={geoData}
          style={defaultStyle}
          onEachFeature={onEachFeature}
        />
      )}
    </MapContainer>
  );
}
