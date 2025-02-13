import Image from 'next/image'
import styles from './page.module.css'
import UploadForm from './components/UploadForm'
import Navbar from './components/Navbar'

export default function Home () {
  return (
    <div className={styles.page}>
      {/* <UploadForm/> */}
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </div>
  )
}
