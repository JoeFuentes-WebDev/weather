
export const Header = ({ city, state }) => <h2 data-testid='appHeader'>{city.name}, {state} {city.country} : {new Date().toLocaleTimeString()} </h2>;