import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber'
import './styles.css'
import { Stats } from '@react-three/drei'
import Box from './components/Box'

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container)
  root.render(
    <Canvas>
      <Stats />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

