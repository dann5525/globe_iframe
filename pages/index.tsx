// pages/index.tsx

import React from 'react';
import ParentComponent from '../components/ParentComponent';

const Home: React.FC = () => {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <ParentComponent />
    </div>
  );
};

export default Home;
