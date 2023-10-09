import { Table } from './Table'

import { AIR_POLLUTANTS } from '../shared/constants'

export const AirPollution = ({ air }) => {
    const airData = []
    air.forEach(a => airData.push({ id: a.id, label: AIR_POLLUTANTS[a.label], value: a.qty }));

    return <Table title='Air Pollution' tableData={airData} />
}
