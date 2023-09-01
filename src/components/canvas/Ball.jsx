import React, { Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { MeshStandardMaterial } from 'three';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1}
    floatIntensity={2.0}>
      < ambientLight intensity={0.7}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial 
        color="#fff"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        position={[0, 0, 1]}
        rotation={[2*Math.PI, 0, 6.25]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
  <Canvas 
      frameLoop="demand" 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all/>
    </Canvas>
)
  }

export default BallCanvas