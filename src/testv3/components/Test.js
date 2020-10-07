import React, {useState, useEffect} from 'react';

const TestComponent = () => {
  const [timeString, setTimeString] = useState(null);
  useEffect(() => {
    const intervalRef = setInterval(() => {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const currentTimeString = `${hours}:${minutes}:${seconds}`;
      setTimeString(currentTimeString);
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);
  return (
    <div style={{ fontSize: '48px' }}>{timeString}</div>
  );
}
export default TestComponent;