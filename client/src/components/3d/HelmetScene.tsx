import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HelmetModel from './HelmetModel';

interface HelmetSceneProps {
  className?: string;
}

const HelmetScene = ({ className = '' }: HelmetSceneProps) => {
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate position from -1 to 1 (center is 0,0)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1); // Invert Y for Three.js coordinate system
    
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    // Optional: Reset position or keep last position
    // setMousePosition(null);
  };

  return (
    <div 
      ref={containerRef}
      className={`helmet-scene ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.5], fov: 50 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <Suspense fallback={null}>
          <HelmetModel 
            mousePosition={mousePosition}
            path="" // Empty path as we're not using the GLB file anymore
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HelmetScene;