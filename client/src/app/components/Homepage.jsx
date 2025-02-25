import Navbar from "./Navbar";
import Banner from "./Homepage_components/Banner";
import Mission from "./Homepage_components/Mission";
import Statistics from "./Homepage_components/Statistics";
import Footer from "./Footer";
import Images from "./Homepage_components/Images";
const Homepage = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Mission/>
        <Images/>
        <Statistics/>
        <Footer/>
        </>
    )
}; export default Homepage