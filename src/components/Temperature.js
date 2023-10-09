import { useState } from 'react';
import { Table } from './Table'

import { TEMP_LABELS, SCALE_LABLES } from '../shared/constants'
import { getFareinheitFromKelvin, getCelsiusFromKelvin } from '../shared/utils'

export const Temperature = ({ temp }) => {
    const [scale, setScale] = useState('F');
    const toggleScale = e => setScale(e.target.value);

    const temperatureData = []

    temp.forEach((t, i) => {
        temperatureData.push({ id: i, label: TEMP_LABELS[i], value: scale === 'F' ? getFareinheitFromKelvin(t) : getCelsiusFromKelvin(t) })
    });

    return <div>
        <Table title='Temperature' tableData={temperatureData} />
        <span className="scale"> select scale <select onChange={toggleScale}>
            <option value='F'>{SCALE_LABLES['F']}</option>
            <option value='C'>{SCALE_LABLES['C']}</option>
        </select>
        </span>
    </div>;
}