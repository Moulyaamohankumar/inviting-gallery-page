import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#6366f1"
          transparent
          opacity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

export const OrbitingSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={1}>
          <Sphere
            position={[
              Math.cos((i / 6) * Math.PI * 2) * 4,
              Math.sin((i / 6) * Math.PI * 2) * 2,
              Math.sin((i / 6) * Math.PI * 4) * 2,
            ]}
            scale={0.2 + i * 0.1}
          >
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#a855f7" : "#ec4899"}
              transparent
              opacity={0.7}
              distort={0.4}
              speed={3}
              roughness={0.1}
              metalness={0.9}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

export const AnimatedText3D = ({ children }: { children: string }) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D
        ref={textRef}
        font="/fonts/Inter_Bold.json"
        size={1}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {children}
        <MeshDistortMaterial
          color="#60a5fa"
          transparent
          opacity={0.9}
          distort={0.1}
          speed={1}
          roughness={0.2}
          metalness={0.7}
        />
      </Text3D>
    </Float>
  );
};

export const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [particlePositions] = useState(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const TechCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={cubeRef} scale={1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color="#10b981"
          transparent
          opacity={0.7}
          distort={0.2}
          speed={2}
          roughness={0.3}
          metalness={0.6}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};