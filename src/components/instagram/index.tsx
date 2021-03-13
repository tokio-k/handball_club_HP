import { INSTAGRAM_URL } from "src/constants";
import Image from "next/image"
import styles from "src/components/instagram/index.module.scss";

export function Instagram():JSX.Element {
    return (
        <div className={styles.container} >
            <div　className={styles.title}>男子ハンドボール部公式Instagram↓</div>
            <a href={INSTAGRAM_URL}>Instagram
                <span className={styles.img} >
                <Image src={"/img/Instagram_Glyph_Gradient_RGB.png"} alt="instagram-icon" width={40} height={40} />
                </span>
            </a>
        </div>
    )
}