import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Latency from './components/Latency';
import ShowIP from './components/ShowIP';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <div className="grid">
        <Exhibit name="Your IPv4 Address">
          <ShowIP type="ipv4" />
        </Exhibit>
        <Exhibit name="Your IPv6 Address">
          <ShowIP type="ipv6" />
        </Exhibit>
        <Exhibit name="Connection Latency">
          <Latency />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
