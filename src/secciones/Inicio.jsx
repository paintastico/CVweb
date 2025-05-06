
import '../index.css'; // Asegúrate de importar el CSS
import CanvasLoader from '../components/CanvasLoader';
import Escena from '../components/escena';

import React, { Suspense } from 'react';
import * as THREE from 'three'
import { useRef, useReducer, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
import {  N8AO, EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'



const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00']
const shuffle = () => [
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  { position: [THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10), THREE.MathUtils.randFloatSpread(10)] },
  


]







function Inicio() {

  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])

  



  return (
    <section 
      id="inicio" 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black to-Aoscuro"
    >
      <div className=" animate-fadeIn">

        <div className=" w-full h-screen items-center flex justify-center text-Aoscuro">
          <div className="FondoAnim">
          <span>&lt;Felipe Pardo/&gt;</span>
          </div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white pointer-events-none">
          <h1 className="text-6xl md:text-7xl font-bold mb-4  "
          style={{
            textShadow: "2px 4px 12px rgba(0,0,0,0.7)"
          }}>Felipe Pardo</h1>
          <h2 className="text-2xl md:text-3xl opacity-80 text-white"
          style={{
            textShadow: "2px 4px 12px rgba(0,0,0,0.7)"
          }}>Frontend Developer | Santiago, CL</h2>
          
          {/* Botón opcional */}
          <div className='md:flex-row pointer-events-auto'>
            <button className="pointer-events-auto mt-8 px-8 py-3 bg-white text-black font-bold rounded-full 
            hover:bg-opacity-90 hover:[transform:scale(1.2)] transition-transform duration-200 " href="#sobre-mi">
            Mi CV
            </button>
          </div><br/>

          <div className="absolute bottom-8 pointer-events-auto mb-8">
            <button className="pointer-events-auto mt-8 px-8 py-3 bg-bacl text-white text-2xl font-bold rounded-full 
            hover:scale-110 transform transition-transform duration-200 " 
            style={{
              textShadow: "2px 4px 12px rgba(0,0,0,0.7)"
            }}>
            <a href="#sobre-mi">Conóceme 👇</a>
            </button>
            
            <p className="text-xs">(o quedate molestando patos)</p>
          </div>
          

        </div>
        

        <Canvas 
          style={{ position: 'absolute', top: 0 }} 
          camera={{ position: [0, 0, 8], fov: 15 }}
        >
          
          
          {/* Iluminación mejorada */}
          <ambientLight intensity={0.5}  radius={10}/>

          <spotLight position={[0, 2, -10]} intensity={8}/>
          
          
          <directionalLight position={[0, 0, 5]} intensity={0.5}/>

          <directionalLight position={[0, -8, 0]} intensity={1} castShadow/>


          <Suspense fallback={null}>
            <Physics gravity={[0, 0, 0]}>
              <Pointer />
              <group scale={[0.5, 0.5, 0.5]}>
              
                {connectors.map((props, i) => (
                    <Connector key={i} {...props}>
                      <Escena scale={[0.1, 0.1, 0.1]} /> {/* Ajusta escala según necesidad */}
                    </Connector>
                  ))}
              </group>
            </Physics>
          </Suspense>

          {/* --- Efectos Post-Procesamiento --- 
            <EffectComposer>
              <DepthOfField 
                target={[0, 0, 1]}  // Punto de enfoque en el espacio 3D (X, Y, Z)
                focalLength={0.1}     // Intensidad del enfoque (valores bajos = más desenfoque)
                bokehScale={1}       // Tamaño del efecto "bokeh" (desenfoque artístico)
                height={700}          // Altura del área de renderizado del efecto
              />
            </EffectComposer>*/}

            


          
        </Canvas>


        <div className=" w-full h-screen items-center flex justify-center text-Aoscuro">
          <div>
          <span>&lt;Golpea los patos/&gt;</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Inicio;


function Connector({ position, children, vec = new THREE.Vector3() }) {
  const api = useRef()
  const pos = useMemo(() => position || [
    THREE.MathUtils.randFloatSpread(10),
    THREE.MathUtils.randFloatSpread(10),
    THREE.MathUtils.randFloatSpread(10)
  ], [])

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    // Atracción al centro
    api.current?.applyImpulse(
      vec.copy(api.current.translation())
         .negate()
         .multiplyScalar(0.04 * delta * 60) // Ajuste para framerate independiente
    )
  })

  return (
    <RigidBody
      ref={api}
      position={pos}
      linearDamping={0.8}
      angularDamping={0.9}
      colliders="hull"
    >
      {children || <Escena scale={[0.3, 0.3, 0.3]} />}
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set(
      (mouse.x * viewport.width) / 3, 
      (mouse.y * viewport.height) / 3, 0))
  })
  return (
    <RigidBody position={[0, 0, 0] }  interpolate smoothTime={0.2}
    type="kinematicPosition" 
    colliders={false} ref={ref}>
      <BallCollider 
        args={[0.5]} 
        restitution={0.2} // Reduce el "rebote"
        onCollisionEnter={({ other }) => {
          // Fuerza de repulsión más controlada
          const direction = other.rigidBody.translation()
            .sub(ref.current.translation())
            .normalize()
            .multiplyScalar(repulsionStrength)
          other.rigidBody.applyImpulse(direction, true)
        }}
      />
    </RigidBody>
  )
}