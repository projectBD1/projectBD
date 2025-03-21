import Navbar from "../components/Navbar"
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
            <Navbar />
            <h1 className="map-title">Bangladesh Map</h1>
            <Bangladesh />
        </div>
    )
}