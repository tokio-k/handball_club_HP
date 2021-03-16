import styles from "src/components/moves/index.module.scss"
import { Move } from "src/components/move"
export function Moves(): JSX.Element {
    return (
        <div className={styles.container}>
            <Move title={"VS名古屋市立大学"} src={"/img/637565696.466592.mp4"}/>
            <Move title={"VS名古屋工業大学"} src={"/img/637565696.641354.mp4"}/>
            <Move title={"VS愛知学院"} src={"/img/637565696.759496.mp4"}/>
        </div>
    )
}