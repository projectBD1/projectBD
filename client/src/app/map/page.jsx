import NormalNavbar from "../Donate/NewComponents/NormalNavbar";
import Bangladesh from "../components/Bangladesh";
import Footer from "../components/Footer";
import "./Map.css";

export default function Map() {
  return (
    <div className="map-container">
      <NormalNavbar />
      <main>
        <h1 className="map-title">Bangladesh Map</h1>
        <Bangladesh />
      </main>
      <Footer />
    </div>
  );
}
