import { Suspense, useEffect, useState } from 'react'
import { canvas } from '@react-three/fiber';
import { orbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <div>Computers</div>
  )
}

export default Computers
