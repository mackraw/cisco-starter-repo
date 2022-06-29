import { useEffect, useState } from 'react';
const websocket = new WebSocket('ws://localhost:55455');

function Latency() {
  const [latency, setLatency] = useState('--');

  useEffect(()=>{
    websocket.onmessage = (e) => {
      setLatency(new Date().getTime() - e.data);
    }
  })

  return (
    <div className="exhibit-content">{latency} ms</div>
  )
}

export default Latency;
