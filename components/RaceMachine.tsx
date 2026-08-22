'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Webverse() {
  const root = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const points:number[] = [];
    for(let i=0;i<85;i++){ const r=1.1+Math.random()*1.25, a=Math.random()*Math.PI*2, b=Math.acos(2*Math.random()-1); points.push(r*Math.sin(b)*Math.cos(a),r*Math.cos(b),r*Math.sin(b)*Math.sin(a)); }
    return new Float32Array(points);
  }, []);
  useFrame((state,delta) => { if(root.current){root.current.rotation.y += delta*.16; root.current.rotation.y += (state.pointer.x-root.current.rotation.y)*.018; root.current.rotation.x = state.pointer.y*.14;} if(ring.current)ring.current.rotation.z-=delta*.24; });
  return <group ref={root}>
    <group ref={ring} rotation={[.6,.3,.2]}><mesh><torusGeometry args={[1.75,.024,8,100]}/><meshBasicMaterial color="#ff3149"/></mesh><mesh rotation={[Math.PI/2,0,0]}><torusGeometry args={[1.22,.013,8,100]}/><meshBasicMaterial color="#1668f2" transparent opacity={.65}/></mesh></group>
    <mesh><icosahedronGeometry args={[1.08,3]}/><meshBasicMaterial color="#1968ee" wireframe transparent opacity={.35}/></mesh>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[particles,3]}/></bufferGeometry><pointsMaterial color="#ff3149" size={.045} sizeAttenuation/></points>
    <mesh position={[0,0,.1]}><sphereGeometry args={[.38,32,20]}/><meshStandardMaterial color="#f8fbff" metalness={.65} roughness={.18}/></mesh>
  </group>;
}
export default function RaceMachine(){return <Canvas camera={{position:[0,0,5.7],fov:43}} dpr={[1,1.5]} gl={{antialias:true,alpha:true}}><ambientLight intensity={1.8}/><directionalLight position={[3,4,4]} intensity={3} color="#ffffff"/><pointLight position={[-3,-1,2]} intensity={8} color="#ff3149"/><Webverse/></Canvas>;}
