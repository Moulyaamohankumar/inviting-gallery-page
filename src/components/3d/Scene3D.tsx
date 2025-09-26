import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { FloatingGeometry, OrbitingSpheres, ParticleField, TechCube } from './Geometry';

interface Scene3DProps {
  className?: string;
  preset?: 'hero' | 'skills' | 'projects';
}

const Scene3D = ({ className = '', preset = 'hero' }: Scene3DProps) => {
  const renderScene = () => {
    switch (preset) {
      case 'hero':
        return (
          <>
            <ParticleField />
            <FloatingGeometry />
            <OrbitingSpheres />
          </>
        );
      case 'skills':
        return (
          <>
            <TechCube />
            <ParticleField />
          </>
        );
      case 'projects':
        return (
          <>
            <FloatingGeometry />
            <ParticleField />
          </>
        );
      default:
        return <FloatingGeometry />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
          <pointLight position={[0, 0, 10]} intensity={1} color="#ec4899" />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Scene Content */}
          {renderScene()}
          
          {/* Ground Shadow */}
          <ContactShadows
            opacity={0.4}
            scale={20}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;