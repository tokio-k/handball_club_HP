import Image from "next/image";
import styles from "src/components/menu/index.module.scss";
import Link from "next/link";

type Props = {
    img: string;
    title: string;
    description: string;
    link: string;
}

export function Menu({ img, title, description, link}: Props): JSX.Element {
    return (
        <section className={styles.container} >
            <div className={styles.menu}>
            <div className={styles.container}>
                <Image src={img}
                alt={"handball-img"}
                width={720}
                height={450}
                loading="eager"
                />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.link}>
                <Link href={link}>
                    <a>詳細へ</a>
                </Link>
            </div>
            </div>

        </section>
    )
}