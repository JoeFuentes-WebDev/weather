import { Table } from './Table'

import { airPolutants } from '../shared/constants'

export const AirPolution = ({ air }) => {
    const airData = []
    air.forEach(a => airData.push({ id: a.id, label: airPolutants[a.label], value: a.qty }));

    return <Table title='Air Pollution Data' tableData={airData} />
}
