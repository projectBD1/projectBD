import Payment from './payment';
import Organizations from './Components/organizations';
import Navbar from '../components/Navbar';
import NormalNavbar from '../components/NormalNavbar';
import Header from '../Donate/Components/header';
import Body from './Components/body';
import './styles/page.css';

export default function PayMe() {
  return (
    <div className="pageContainer">
      {/* <h1>Standard pay</h1>
      <Payment/>
      <h1>Dynamic payment</h1>
      <DynamicPayment/> */}
      <NormalNavbar />
      <Header />
      <div className="bodyTitle">
        <div className="subBodyTitle">
          <h1>Expore Ways to Make an Impact</h1>
          <p>Donate, Advocate, and Support Those in Need.</p>
        </div>
      </div>
      <Body />
      <Organizations />
    </div>
  );
}
