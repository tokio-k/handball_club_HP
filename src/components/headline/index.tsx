import styles from "src/components/headline/index.module.scss";

export function Headline({title}):JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
        </div>
    )
}