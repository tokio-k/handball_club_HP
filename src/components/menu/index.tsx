import Image from "next/image";
import styles from "src/components/menu/index.module.scss";
import Link from "next/link";
import cc from "classcat"

type Props = {
    img: string;
    title: string;
    description: string;
    link: string;
    position: "right" | "left";
}

export function Menu({ img, title, description, link, position}: Props): JSX.Element {
    return (
        <section className={styles.container} >
            <div className={ cc([
                styles.menu,
                {
                    [styles.right]: position == "right",
                    [styles.left]: position == "left",
                }
            ])}>
            <div className={styles.img}>
                <Image src={img}
                alt={"handball-img"}
                width={720}
                height={450}
                loading="eager"
                />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.link}>
                <Link href={link}>
                    <a>詳細へ</a>
                </Link>
            </div>
            <div className={styles.description}>{description}</div>
            </div>

        </section>
    )
}