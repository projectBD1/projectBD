import Image from 'next/image'
import styles from './page.module.css'
import UploadForm from './components/UploadForm'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Statistics from './components/Statistics'
import Mission from './components/Mission'
import Footer from './components/Footer'
import Images from './components/Images'

export default function Home () {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Banner/>
      <Mission/>
      <Images/>
      <Statistics/>
      <Footer/>
    </div>
  )
}