// src/App.tsx
import React from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App: React.FC = () => {
  return (
    <div>
      <Parallax pages={6}>
        <ParallaxLayer>
          <h2>Portfolio of Mathew Veale</h2>
        </ParallaxLayer>
        <ParallaxLayer>
          <h3>About</h3>
        </ParallaxLayer>
        <ParallaxLayer>
          <h3>Skills</h3>
        </ParallaxLayer>
        <ParallaxLayer>
          <h3>Projects</h3>
        </ParallaxLayer>
        <ParallaxLayer>
          <h3>Contact</h3>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
