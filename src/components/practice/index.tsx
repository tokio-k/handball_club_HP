import styles from "src/components/practice/index.module.scss"

const PRACTICES = [
    {
        time: "19:00~",
        title: "フリーアップ",
    },
    {
        time: "19:15~",
        title:"シュート"
    },
    {
        time: "19:20~",
        title:"2対2"
    },
    {
        time: "19:30~",
        title:"3対3"
    },
    {
        time: "19:40~",
        title:"4対4"
    },
    {
        time: "20:00~",
        title:"6対6"
    },
    {
        time: "20:30~",
        title:"ゲーム"
    },
]

export function Practice():JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h3>普段の練習例</h3>
            <table>
                <thead>
                    <tr>
                        <th>時間</th>
                        <th>練習内容</th>
                    </tr>
                </thead>
                <tbody>
                {PRACTICES.map((practice) => (
                    <tr key={practice.time}>
                        <td>{practice.time}</td>
                        <td>{practice.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div  className={styles.supplement}>
                <div>※進み具合により時間は前後します。</div>
                <div>※基本的に、本数で練習を区切っています。</div>
                <div>※本数は当日の進み具合で決めます。</div>
            </div>
        </div>
    )
}