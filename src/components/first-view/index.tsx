import Image from "next/image"
import styles from "src/components/first-view/index.module.scss";

export function FirstView():JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Image src={"/img/home.jpg"} alt="first-view" width={5000} height={3000} />
            </div>
        <div className={styles.text}>
            <div>愛知大学</div>
            <div>男子ハンドボール部</div>
        </div>
        </div>
    )
}