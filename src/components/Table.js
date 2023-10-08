export const Table = ({ title, tableData }) => <div>
    <h3>{title}</h3>
    <table>
        <tbody>{tableData && tableData.map(t =>
            <tr key={t.id}>
                <td>{t.label}</td>
                <td>{t.value}</td>
            </tr>)}
        </tbody>
    </table>
</div>