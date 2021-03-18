import styles from "src/components/team/index.module.scss";

const TEAM_INF = [
    {
        label: "チーム情報",
        items: [
            {
                title:"練習日",
                content:"月曜日 金曜日 19:00-21:00",
            },
            {
                title:"部員数",
                content:"20人(マネージャ4人)",
            },
            {
                title:"活動場所",
                content:"愛知大学 体育館",
            },
        ],
    },
    {
        label: "年間行事",
        items: [
            {
                title:"4月",
                content:"春リーグ",
            },
            {
                title:"5月",
                content:"春リーグ",
            },
            {
                title:"6月",
                content:"選手権",
            },
            {
                title:"7月",
                content:"テスト休み",
            },
            {
                title:"8月",
                content:"夏旅行",
            },
            {
                title:"9月",
                content:"秋リーグ",
            },
            {
                title:"10月",
                content:"秋リーグ",
            },
            {
                title:"11月",
                content:"選手権",
            },
            {
                title:"12月",
                content:"",
            },
            {
                title:"1月",
                content:"テスト休み",
            },
            {
                title:"2月",
                content:"",
            },
            {
                title:"3月",
                content:"",
            },
        ],
    },
]
export function Team(): JSX.Element {
    return (
        <div className={styles.container}>
            {TEAM_INF.map(( {label, items }) => (
                <div key={label} className={styles.section}>
                    <h2>{label}</h2>
                    <table>
                        <thead><tr><th></th><th></th></tr></thead>
                        <tbody>
                            {items.map(({title,content}) => (
                                <tr key={title}>
                                    <td>{title}</td>
                                    <td>{content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}