import { Table } from './Table'
import { getDateFromSeconds } from '../shared/utils'

export const SunsetSunrise = ({ sun }) => {
    const sunTableData = [
        { id: 0, label: 'Sunrise', value: getDateFromSeconds(sun.sunrise) },
        { id: 1, label: 'Sunset', value: getDateFromSeconds(sun.sunset) }
    ]
    return <Table title='Sunrise & Sunset' tableData={sunTableData} />
}