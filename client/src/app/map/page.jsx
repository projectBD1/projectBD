import Navbar from "../components/Navbar"
import Bangladesh from "../components/Bangladesh";

// const Bangladesh = useMemo(() => dynamic(
//     () => import('../components/Bangladesh'),
//     { 
//       loading: () => <p>A map is loading</p>,
//       ssr: false
//     }
//   ), [])
export default function map(){
    return(
        <div className = "">
            <Navbar />
            <h1 className="text-2xl font-bold my-4">Bangladesh Map</h1>
            <Bangladesh />
        </div>
    )
}