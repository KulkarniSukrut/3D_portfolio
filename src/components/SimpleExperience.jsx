import React from 'react';

export default function SimpleExperience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Simple rotating cube */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4ecdc4" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Ground plane */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </>
  );
}
