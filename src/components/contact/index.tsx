import { CONTACT_URL } from "src/constants";
import styles from "src/components/contact/index.module.scss"

export function Contact(): JSX.Element {
    return (
        <div className={styles.container}>
            <p>お問い合わせページです。</p>
            <p>愛知大学在学生のハンドボール部入部に関する質問や、練習試合申し込みなどはこちらからご連絡ください。</p>
            <p>よくある質問をご確認の上、ご連絡いただけますと幸いです。</p>
            <p>以下からお問い合わせをしてください。</p>
            <div className={styles.link}>
            <a target="_blank" rel="noopener noreferrer" href={CONTACT_URL}>お問い合わせをする</a>
            </div>

        </div>
    )
}