import styles from "src/components/table/index.module.scss";
type Props = {
    tables:{
        label:string;
        items: {
            title: string;
            content: string;
        }[];
}[];
}

export function Tables({tables}:Props): JSX.Element {
    return (
        <div className={styles.container}>
            {tables.map(( {label, items }) => (
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