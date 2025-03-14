import { useRef, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface HelmetModelProps {
  mousePosition: { x: number, y: number } | null;
  path: string;
}

const HelmetModel = ({ mousePosition, path }: HelmetModelProps) => {
  const gltf = useLoader(GLTFLoader, path);
  const modelRef = useRef<Mesh>(null);
  const { camera } = useThree();
  
  // Set camera position on initial load
  useEffect(() => {
    if (camera) {
      camera.position.set(0, 0, 2.5);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  // Animate the model based on mouse position
  useFrame(() => {
    if (!modelRef.current || !mousePosition) return;
    
    // Smooth rotation based on mouse position
    const targetRotationX = mousePosition.y * 0.5; // Vertical rotation (up/down)
    const targetRotationY = mousePosition.x * 0.5; // Horizontal rotation (left/right)
    
    // Apply smooth interpolation to the current rotation
    modelRef.current.rotation.x = modelRef.current.rotation.x + (targetRotationX - modelRef.current.rotation.x) * 0.05;
    modelRef.current.rotation.y = modelRef.current.rotation.y + (targetRotationY - modelRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      {/* Ambient light to ensure the model is visible */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light to add some depth/shadows */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#C0A080" />
      
      {/* Spot light to highlight the helmet */}
      <spotLight 
        position={[0, 5, 5]} 
        angle={0.3} 
        penumbra={0.8} 
        intensity={1.5} 
        castShadow 
        color="#FFFFFF" 
      />
      
      {/* The 3D model */}
      <primitive 
        ref={modelRef}
        object={gltf.scene} 
        scale={0.5} 
        position={[0, -0.5, 0]} 
        rotation={[0, 0, 0]} 
      />
      
      {/* Optional controls for development - can be removed in production */}
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </>
  );
};

export default HelmetModel;