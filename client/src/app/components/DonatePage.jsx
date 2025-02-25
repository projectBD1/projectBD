import Navbar from "./Navbar"
import Footer from "./Footer"
import DonateToOthers from "./Donatepage_components/DonateToOthers";
import DonateToUs from "./Donatepage_components/DonateToUs"

const DonatePage = () => {
    return(
        <div>
            <Navbar/>
            <DonateToUs/>
            <DonateToOthers/>
            <Footer/>
        </div>
    )
}; export default DonatePage