import './App.css';
import { WeatherData } from './components/WeatherData';

const App = () => <div className="App">
  <h1 data-testid="header">Weather Data</h1>
  <WeatherData />
</div>

export default App;
