import styles from './page.module.css'
import Homepage from './components/Homepage'

export default function Home () {
  return (
    <div className={styles.page}>
      <Homepage/>
    </div>
  )
}
