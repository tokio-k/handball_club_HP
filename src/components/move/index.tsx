import styles from "src/components/move/index.module.scss"

type Props = {
    title: string;
    src: string;
}

export function Move({title, src}: Props):JSX.Element {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <video controls>
            <source src={src} type="video/mp4"/>
            </video>
        </div>
    )
}