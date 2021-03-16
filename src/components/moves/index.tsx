import styles from "src/components/moves/index.module.scss"
import { Move } from "src/components/move"
export function Moves(): JSX.Element {
    return (
        <div className={styles.container}>
            <Move title={"VSどっかの大学"} src={"/img/637565696.466592.mp4"}/>
            <Move title={"VSどっかの大学？"} src={"/img/637565696.641354.mp4"}/>
            <Move title={"VS愛知学院? 秋リーグ"} src={"/img/637565696.759496.mp4"}/>
        </div>
    )
}