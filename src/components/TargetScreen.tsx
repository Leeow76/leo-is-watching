import { ThreeEvent } from "@react-three/fiber"
import React, { useCallback } from "react"
import * as THREE from "three"
import { useStore } from "../store"

const TargetScreen = () => {
  const setHoverPoint = useCallback((e: ThreeEvent<PointerEvent>) => {
    useStore.setState({ targetPoint: e.intersections[0].point })
  }, [])

  return (
    <mesh
      position={[0, 0, 1]}
      onPointerMove={(e) => setHoverPoint(e)}
    >
      <planeGeometry
        args={[2, 2, 1]}
      />
      <meshBasicMaterial
        color={'#fff'}
        transparent
        side={THREE.DoubleSide}
        opacity={0.1}
      />
    </mesh>
  )
}

export default TargetScreen
