import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import React, { useEffect, useMemo, useRef } from "react"
import { useStore } from "../store"
import { useFrame } from "@react-three/fiber"
import { useControls } from 'leva'

const Face = () => {
  const headTarget = useMemo(() => new THREE.Vector3, [])
  const ref = useRef<THREE.Object3D>(null)
  const targetPoint = useRef(useStore.getState().targetPoint)
  const { scene } = useGLTF('/assets/models/face_v1.glb')
  const { HEAD_ROTATION_MULTIPLIER } = useControls(
    {
      HEAD_ROTATION_MULTIPLIER: {
        label: 'Head rotation multiplier',
        value: 0.6,
        min: 0.1,
        max: 1,
      },
    },
  )

  useEffect(() => {
    useStore.subscribe((state) => (targetPoint.current = state.targetPoint))
  }, [])

  useEffect(() => {
    console.log(scene.children)
  }, [scene])

  useFrame(() => {
    headTarget.subVectors(targetPoint.current, new THREE.Vector3(
      targetPoint.current.x - targetPoint.current.x * HEAD_ROTATION_MULTIPLIER, 
      targetPoint.current.y - targetPoint.current.y * HEAD_ROTATION_MULTIPLIER, 
      0
    ))

    ref.current && ref.current.lookAt(headTarget)
    scene.children[0].lookAt(targetPoint.current)
    scene.children[1].lookAt(targetPoint.current)
    scene.children[0].rotateX(-0.15)
    scene.children[1].rotateX(-0.15)
  })

  return (
    <primitive
      ref={ref}
      object={scene}
    />
  )
}

export default Face
