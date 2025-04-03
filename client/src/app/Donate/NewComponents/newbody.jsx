import styles from '../styles/body.module.css';
export default function NewBody() {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>Explore Ways to Make an Impact!</h1>
        <p className={styles.titleDesc}>Donate, Advocate, Support</p>
      </div>
      <div className={styles.tips}>
        <div className={styles.tip1}>
          <h1 className={styles.subtitle}>Donate</h1>
          <p>
            Your contribution can provide urgent relief, legal support, and
            resources to Hindus in Bangladesh facing religious violence. Every
            donation helps protect lives and preserve communities.
          </p>
        </div>
        <div className={styles.tip2}>
          <h1 className={styles.subtitle}>Advocate</h1>
          <p>
            Raise awareness about the challenges Hindus in Bangladesh face. By
            sharing their stories and pushing for action, you can help bring
            international attention and pressure for change.
          </p>
        </div>
        <div className={styles.tip3}>
          <h1 className={styles.subtitle}>Support</h1>
          <p>
            Stand in solidarity by offering help through volunteering, spreading
            awareness, or supporting affected families. Every act of kindness
            strengthens the fight against injustice.
          </p>
        </div>
      </div>
    </div>
  );
}
