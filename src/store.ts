import { mountStoreDevtool } from 'simple-zustand-devtools'
import * as THREE from 'three'
import create from 'zustand'

export interface State {
  targetPoint: THREE.Vector3
}

export const initialState: State = {
  targetPoint: new THREE.Vector3(0, 0, 1),
}

export const useStore = create<State>(() => initialState)

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useStore)
}
