import { Table } from './Table'

import { airPollutants } from '../shared/constants'

export const AirPollution = ({ air }) => {
    const airData = []
    air.forEach(a => airData.push({ id: a.id, label: airPollutants[a.label], value: a.qty }));

    return <Table title='Air Pollution' tableData={airData} />
}
