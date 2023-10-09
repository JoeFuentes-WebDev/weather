export const getDateFromSeconds = seconds => {
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString()
}

export const getFareinheitFromKelvin = degrees => ((degrees - 273.15) * 1.8 + 32).toFixed(2) + ' F°';

export const getCelsiusFromKelvin = degrees => (degrees - 273.15).toFixed(2) + ' C°';

export const convertTemperature = (fromScale, toScale, degrees) => {
    switch (fromScale) {
        case 'kelvin':
            switch (toScale) {
                case 'Farenheit': return getFareinheitFromKelvin(degrees);
                case 'Celsius': return getCelsiusFromKelvin(degrees);
                default: return NaN;
            }
        default: return NaN;
    }
}