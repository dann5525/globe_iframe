// pages/index.tsx

import React from 'react';
import ParentComponent from '../components/ParentComponent';

const Home: React.FC = () => {
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <ParentComponent />
    </div>
  );
};

export default Home;
