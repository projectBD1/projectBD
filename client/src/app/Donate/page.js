import Payment from './payment';
// import Organizations from './Components/organizations';
import Navbar from '../components/Navbar';
import NormalNavbar from './NewComponents/NormalNavbar.jsx';
import Header from './NewComponents/header';
// import Body from './Components/body';
import NewBody from './NewComponents/newbody.jsx';;
import './styles/page.css';
import DonationMessage2 from './NewComponents/DonationMessage2.jsx';
import CallToAction from './NewComponents/CallToAction.jsx';

export default function PayMe() {

  return (
    <div className="pageContainer">
      <NormalNavbar />
      <div style={{
        
      }}>
        <Header />
        <DonationMessage2 />
      </div>
      <CallToAction />
    </div>
  );
}
