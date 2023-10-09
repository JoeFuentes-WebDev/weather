export const getDateFromSeconds = seconds => {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString()
}

export const getFarinhaitTemp = (kelvin) => ((kelvin - 273.15) * 1.8 + 32).toFixed(2) + ' F°';

export const getCelciusTemp = (kelvin) => (kelvin - 273.15).toFixed(2) + ' C°';