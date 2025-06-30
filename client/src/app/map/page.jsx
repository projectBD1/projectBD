import NormalNavbar from "../components/NormalNavbar";
import Bangladesh from "../components/Bangladesh";
import './Map.css'; 

// const Bangladesh = useMemo(() => dynamic(
//     () => import('../components/Bangladesh'),
//     { 
//       loading: () => <p>A map is loading</p>,
//       ssr: false
//     }
//   ), [])
export default function map(){
    return(
        <div className = "map-container">
            <NormalNavbar />
            <div style={{height: '100px', backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', fontWeight: 'bold', color: 'white',}}>Violence Map and Reporting System Work in Progress</div>
            <h1 className="map-title">Bangladesh Map</h1>
            <Bangladesh />
        </div>
    )
}