import Payment from './payment';
import Organizations from './Components/organizations';
import Navbar from '../components/Navbar';
import './styles/page.css'
export default function PayMe() {
  return (
    <div className='pageContainer'>
      {/* <h1>Standard pay</h1>
      <Payment/>
      <h1>Dynamic payment</h1>
      <DynamicPayment/> */}
      <Navbar/>
      <Organizations/>
      

      
    </div>
  );
}
