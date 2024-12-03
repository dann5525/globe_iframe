// hooks/useVapi.ts

import { useState, useEffect } from 'react';

const useVapi = () => {
  const [volumeLevel, setVolumeLevel] = useState<number>(0);
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);

  const toggleCall = () => {
    setIsSessionActive(prev => !prev);
  };

  // Placeholder logic to simulate volume level changes
  useEffect(() => {
    const interval = setInterval(() => {
      if (isSessionActive) {
        // Simulate volume level between 0 and 10
        const simulatedVolume = Math.random();
        setVolumeLevel(simulatedVolume);
      } else {
        setVolumeLevel(0);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [isSessionActive]);

  return { volumeLevel, isSessionActive, toggleCall };
};

export default useVapi;

