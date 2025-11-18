

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function My_mug(props) {
  const { nodes, materials } = useGLTF('/my_mug.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <mesh geometry={nodes['Cylinder001_01_-_Default_0'].geometry} material={materials['01_-_Default']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Rectangle001__0.geometry} material={materials.Rectangle001__0} position={[3.183, 2.362, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/my_mug.glb')
