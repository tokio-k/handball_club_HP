import styles from "src/components/faq/index.module.scss";
const FAQs = [
    {
        question:"未経験の方はいますか？",
        answer:"はい。毎年1~2人います。周りの経験者に教えてもらいながら、少しずつ出来るようになっています。",
    },
    {
        question:"監督はいますか？",
        answer:"基本、練習は選手である学生のみで行っております。練習メニューやチームもメンバーで決めています。試合の時には来てくれます。",
    },
    {
        question:"学業との両立は厳しいですか？",
        answer:"いいえ。練習量は少なく週2回の練習なので、学業に力を入れることもできます。練習量は少なくても質を上げれるように努力しています。",
    },
];
export function Faq(): JSX.Element {
    return (
        <>
            <ul className={styles.faqs}>
                {FAQs.map(({question, answer}) => (
                    <li key={question}>
                        <p>{`Q${question}`}</p>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}