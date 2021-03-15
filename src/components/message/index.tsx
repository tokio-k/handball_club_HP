import styles from "src/components/message/index.module.scss";
export function Message(): JSX.Element {
    return (
        <section className={styles.container}>
            <p>
                愛知大学男子ハンドボール部HPへようこそ。
            </p>
            <p>
            経験者はもちろん、<br className={styles.br} />
            初心者やマネージャー志望の方も大歓迎です。
            </p>
            <p>
            愛知大学在学生の皆さん、<br className={styles.br}/>是非1度遊びに来てください。
            </p>
        </section>
    )
}