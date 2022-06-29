import { useEffect, useState } from 'react';

function ShowIP({type}) {
  let url = 'https://api.ipify.org?format=json';
  if (type === 'ipv6') {
    url = 'https://api64.ipify.org?format=json';
  }
  
  const [ipAddress, setIPaddress] = useState(null);

  useEffect(() => {
    async function getIP(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setIPaddress(data.ip);
      } catch (error) {
        console.error(error);
      }
    }
    getIP(url);
  }, [url]);

  return (
    <div>{ipAddress}</div>
  )
}

export default ShowIP;
