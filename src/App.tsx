import React from "react"

import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'
import Face from "./components/Face"
import TargetScreen from "./components/TargetScreen"

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <color attach="background" args={['#1a1a1a']} />
        <Stats />
        <ambientLight />
        <Face />
        <TargetScreen />
      </Canvas>
      <Leva theme={{
        sizes: {
          rootWidth: '400px',
        }
      }} />
    </>
  )
}

export default App
