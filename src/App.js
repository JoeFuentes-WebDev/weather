import './App.css';
import { WeatherData } from './components/WeatherData';

const App = () => <div className="App">
  <h1 data-testid="header">Weather By Zip</h1>
  <WeatherData />
</div>

export default App;
