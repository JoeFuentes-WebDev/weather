import { useState } from 'react';
import { Table } from './Table'

import { tempLabels, scalesLabels } from '../shared/constants'
import { getFarinhaitTemp, getCelciusTemp } from '../shared/utils'

export const Temperature = ({ temp }) => {
    const [scale, setScale] = useState('F');
    const toggleScale = e => setScale(e.target.value);

    const temperatureData = []

    temp.forEach((t, i) => {
        temperatureData.push({ id: i, label: tempLabels[i], value: scale === 'F' ? getFarinhaitTemp(t) : getCelciusTemp(t) })
    });

    return <div>

        <Table title='Temperature' tableData={temperatureData} />
        <span className="scale"> select scale <select onChange={toggleScale}>
            <option value='F'>{scalesLabels['F']}</option>
            <option value='C'>{scalesLabels['C']}</option>
        </select>
        </span>
    </div>;
}