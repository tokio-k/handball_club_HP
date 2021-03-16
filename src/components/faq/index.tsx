import styles from "src/components/faq/index.module.scss";
const FAQs = [
    {
        question:"未経験の方はいますか？",
        answer:"はい。毎年1~2人います。周りの経験者に教えてもらいながら、少しずつ出来るようになっています。",
    },
    {
        question:"監督は怖いですか？",
        answer:"基本、練習は選手である学生のみで行っております。練習メニューやチームもメンバーで決めています。",
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