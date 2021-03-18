import styles from "src/components/team/index.module.scss";
export function Tables({tables}): JSX.Element {
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