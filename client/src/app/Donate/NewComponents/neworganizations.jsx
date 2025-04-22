import styles from '../styles/organizationsStyle.module.css';
import Image from 'next/image';
import sunflowerImg from '../images/sunflower-3304.jpg';
import blueflowerImg from '../images/BlueFlower-985266.jpg';
import redflowerImg from '../images/RedFlower-607013.jpg';


export default function NewOrganizations() {
  


  return (
    <div className={styles.masterOrganizations}>
    <div className={styles.organizations}>
      <div className={styles.title}>
        <h1>Our Partners</h1>
      </div>
      <div className={styles.orgs}>
        <div className={styles.container}>
          <div className={styles.iconImg}>
            <Image
              src={blueflowerImg}
              className={styles.sunflowerImage}
              alt="An image of a sunflower"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.iconDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </div>
          <div className={styles.iconLink}><button>Link</button></div>
        </div>
        <div className={styles.container}>
          <div className={styles.iconImg}>
            <Image
              src={sunflowerImg}
              className={styles.sunflowerImage}
              alt="An image of a sunflower"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.iconDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </div>
          <div className={styles.iconLink}><button>Link</button></div>
        </div>
        <div className={styles.container}>
          <div className={styles.iconImg}>
            <Image
              src={redflowerImg}
              className={styles.sunflowerImage}
              alt="An image of a sunflower"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.iconDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.iconLink}><button>Link</button></div>
        </div>
      </div>
    </div>
    </div>
  );
}
