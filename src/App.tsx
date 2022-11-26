import Face from './components/Face'
import TargetScreen from './components/TargetScreen'
import { Loader, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import React, { Suspense } from 'react'

const App = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <color attach="background" args={['#1a1a1a']} />
        <Stats />
        <ambientLight />
        <Suspense fallback={null}>
          <Face />
          <TargetScreen />
        </Suspense>
      </Canvas>

      <Loader />

      <Leva
        theme={{
          sizes: {
            rootWidth: '400px',
          },
        }}
      />
    </>
  )
}

export default App
