import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Simple MacBook
function MacBook({ position }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    // Simple rotation animation
    gsap.to(meshRef.current.rotation, {
      y: Math.PI * 2,
      duration: 10,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 1.5, 0.5]} />
      <meshStandardMaterial color="#ff0000" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

// Simple File Folder
function FileFolder({ position }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    // Simple scale animation
    gsap.to(meshRef.current.scale, {
      x: 1.2,
      y: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  }, []);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1, 0.3]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
}

// Simple iPad
function IPad({ position }) {
  const meshRef = useRef();
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    // Simple rotation animation (more obvious)
    gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      duration: 5,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[2, 2, 0.5]} />
      <meshStandardMaterial color="#0000ff" metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

export default function MinimalExperience() {
  return (
    <>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Ground plane */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      {/* 3D Models - VISIBLE AND ANIMATED */}
      <MacBook position={[-2, 0, 0]} />
      <FileFolder position={[2, 0, 0]} />
      <IPad position={[0, 1, 0]} />
    </>
  );
}
