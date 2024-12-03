// components/ParentComponent.tsx

import React, { useState, useEffect } from 'react';
import AbstractBall from './AbstractBall';
import { MicIcon, PhoneOff } from 'lucide-react';
import useVapi from '../hooks/useVapi';

interface Config {
  perlinTime: number;
  perlinMorph: number;
  perlinDNoise: number;
  chromaRGBr: number;
  chromaRGBg: number;
  chromaRGBb: number;
  chromaRGBn: number;
  chromaRGBm: number;
  sphereWireframe: boolean;
  spherePoints: boolean;
  spherePsize: number;
  cameraSpeedY: number;
  cameraSpeedX: number;
  cameraZoom: number;
  cameraGuide: boolean;
}

const ParentComponent: React.FC = () => {
  const { volumeLevel, isSessionActive, toggleCall } = useVapi();
  const [config, setConfig] = useState<Config>({
    perlinTime: 50.0,
    perlinMorph: 5.5,
    perlinDNoise: 2.5,
    chromaRGBr: 7.5,
    chromaRGBg: 5.0,
    chromaRGBb: 7.0,
    chromaRGBn: 0.0,
    chromaRGBm: 1.0,
    sphereWireframe: false,
    spherePoints: true,
    spherePsize: 2.0,
    cameraSpeedY: 0.0,
    cameraSpeedX: 0.0,
    cameraZoom: 175,
    cameraGuide: false,
  });

  useEffect(() => {
    if (isSessionActive && volumeLevel > 0) {
      setConfig(prevConfig => ({
        ...prevConfig,
        perlinTime: 100.0,
        perlinMorph: 10.0,
      }));
    } else {
      if (isSessionActive) {
        setConfig(prevConfig => ({
          ...prevConfig,
          perlinTime: 25.0,
          perlinMorph: 10.0,
        }));
      } else {
        setConfig(prevConfig => ({
          ...prevConfig,
          perlinTime: 5.0,
          perlinMorph: 0.0,
        }));
      }
    }
  }, [isSessionActive, volumeLevel]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* If you have a ConfigSheet component, include it here */}
      {/* <ConfigSheet config={config} setConfig={setConfig} /> */}
      <AbstractBall {...config} />
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleCall}
          className='m-2 p-2 bg-blue-500 text-white rounded flex items-center'
        >
          {isSessionActive ? <PhoneOff size={18} /> : <MicIcon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ParentComponent;
