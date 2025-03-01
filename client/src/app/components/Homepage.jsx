import Navbar from "./Navbar";
import Banner from "./Homepage_components/Banner";
import Mission from "./Homepage_components/Mission";
import Images from "./Homepage_components/Images";
import Facts from "./Homepage_components/Facts";
import Statistics from "./Homepage_components/Statistics";
import Footer from "./Footer";

const Homepage = () => {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Mission/>
        <Images/>
        <Facts/>
        <Footer/>
        </>
    )
}; export default Homepage