import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <div className="grid">
        <Exhibit name="Test Exhibit" />
        <Exhibit name="Another Test" />
        <Exhibit name="Third Test" />
        <Exhibit name="Fourth Exhibit" />
      </div>
    </div>
  );
}

export default App;
