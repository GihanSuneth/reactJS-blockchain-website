import React, { useState, useEffect } from 'react';

const FakeCounter = () => {
  const [counter, setCounter] = useState(32104783662);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => prevCounter + 111);
    }, 100); // Adjust the increment interval as desired

    return () => clearInterval(timer);
  }, []);

  const formattedCounter = counter.toLocaleString(); // Format the counter with comma separator

  return (
    <div>
      <p className='text-center text-white text-2xl font-bold'>
        Total Volume Secured: ${formattedCounter}
      </p>
    </div>
  );
};

export default FakeCounter;
