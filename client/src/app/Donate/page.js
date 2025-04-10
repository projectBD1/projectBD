import Payment from './payment';
// import Organizations from './Components/organizations';
import Navbar from '../components/Navbar';
import NormalNavbar from './NewComponents/NormalNavbar.jsx';
import Header from './NewComponents/header';
// import Body from './Components/body';
import NewBody from './NewComponents/newbody.jsx'
import NewOrganizations from './NewComponents/neworganizations';
import './styles/page.css';

export default function PayMe() {
  // const scrollToMasterSection = () => {
  //   const masterSection = document.getElementById('master');
  //   if (masterSection) {
  //     masterSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <div className="pageContainer">
      {/* <h1>Standard pay</h1>
      <Payment/>
      <h1>Dynamic payment</h1>
      <DynamicPayment/> */}
      <NormalNavbar/>
      <Header />
      <NewBody/>
      <NewOrganizations/>

      {/* <div className="supBodyTitle">
        <div className="bodyTitle">
          <div className="subBodyTitle">
            <h1>Expore Ways to Make an Impact</h1>
            <p>Donate, Advocate, and Support Those in Need.</p>
          </div>
        </div>

        <Body />
      </div>
      <div className="organizationsTitle">
        <div className="subOrg">
          <h1>Urgent Donations</h1>
        </div>
      </div>
      <Organizations /> */}
    </div>
  );
}
