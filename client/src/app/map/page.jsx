import NormalNavbar from "../components/NormalNavbar";
import Bangladesh from "../components/Bangladesh";
import UploadForm from "../components/UploadForm";
import Footer from "../components/Footer";
import "./Map.css";

export default function Map() {
  return (
    <div className="map-container">
      <NormalNavbar />
      <main>
            <div style={{height: '100px', backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', fontWeight: 'bold', color: 'white',}}>Violence Map and Reporting System Work in Progress</div>
        <h1 className="map-title">Bangladesh Map</h1>
        <Bangladesh />
      </main>
      <h1 className="map-title">Report Violence</h1>
      <UploadForm/>
      <Footer />
    </div>
  );
}
