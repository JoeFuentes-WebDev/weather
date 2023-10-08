
export const Header = ({ city, state }) => <h2>{city.name}, {state} {city.country} : {new Date().toLocaleTimeString()} </h2>;