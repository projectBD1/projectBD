import Image from 'next/image'
import styles from './page.module.css'
import UploadForm from './components/UploadForm'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
export default function Home () {
  return (
    <div className={styles.page}>
      <Navbar/>
      <Banner/>
      <UploadForm></UploadForm>
      
    </div>
  )
}
