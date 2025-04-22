import styles from "./pageStyle.module.css"
export default function SuccessPage(){
    return(
        <div className={styles.paymentSuccess}>
            <div className={styles.successBox}>
            Payment Success! You can now navigate back to your page.
            </div>
        </div>
    )
}