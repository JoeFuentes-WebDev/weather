export const Table = ({ title, tableData }) => <div>
    <table>
        <thead><tr><td colspan='2'>{title}</td></tr></thead>
        <tbody>{tableData && tableData.map(t =>
            <tr key={t.id}>
                <td>{t.label}</td>
                <td>{t.value}</td>
            </tr>)}
        </tbody>
    </table>
</div>