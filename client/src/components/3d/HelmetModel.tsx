import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import { Group } from 'three';

interface HelmetModelProps {
  mousePosition: { x: number, y: number } | null;
  path: string;
}

// This is a simplified model as a placeholder for the helmet
// It creates a stylized helmet-like shape with simple 3D primitives
const HelmetModel = ({ mousePosition }: HelmetModelProps) => {
  const groupRef = useRef<Group>(null);
  
  // Animate the model based on mouse position
  useFrame(() => {
    if (!groupRef.current || !mousePosition) return;
    
    // Smooth rotation based on mouse position
    const targetRotationX = mousePosition.y * 0.5; // Vertical rotation (up/down)
    const targetRotationY = mousePosition.x * 0.5; // Horizontal rotation (left/right)
    
    // Apply smooth interpolation to the current rotation
    groupRef.current.rotation.x = groupRef.current.rotation.x + (targetRotationX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y = groupRef.current.rotation.y + (targetRotationY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#C0A080" />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={0.8} intensity={1.5} color="#FFFFFF" />
      
      {/* Main helmet group */}
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Helmet base */}
        <Box 
          args={[1, 1.2, 1]} 
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color="#8B0000" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Helmet top crest */}
        <Box 
          args={[0.15, 0.7, 0.15]} 
          position={[0, 0.8, 0]}
        >
          <meshStandardMaterial color="#FF4D4D" metalness={0.5} roughness={0.2} />
        </Box>
        
        {/* Face shield */}
        <Box 
          args={[0.9, 0.6, 0.1]} 
          position={[0, 0.1, 0.55]}
        >
          <meshStandardMaterial color="#8B0000" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* Eye slits */}
        <Box 
          args={[0.7, 0.1, 0.05]} 
          position={[0, 0.2, 0.61]}
        >
          <meshStandardMaterial color="#000000" />
        </Box>
        
        {/* Decorative elements */}
        <Sphere
          args={[0.1, 16, 16]}
          position={[0.5, 0.3, 0.4]}
        >
          <meshStandardMaterial color="#C0A080" metalness={0.9} roughness={0.1} />
        </Sphere>
        
        <Sphere
          args={[0.1, 16, 16]}
          position={[-0.5, 0.3, 0.4]}
        >
          <meshStandardMaterial color="#C0A080" metalness={0.9} roughness={0.1} />
        </Sphere>
      </group>
    </>
  );
};

export default HelmetModel;