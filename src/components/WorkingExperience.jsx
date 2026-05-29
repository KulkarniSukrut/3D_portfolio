import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

function MacBook({ position }) {
  const groupRef = useRef();
  const lidRef = useRef();
  
  useEffect(() => {
    if (!lidRef.current) return;
    
    // Simple opening animation
    gsap.to(lidRef.current.rotation, {
      x: -1.2,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {/* MacBook Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* MacBook Lid */}
      <mesh ref={lidRef} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[1.8, 0.05, 1.3]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.03, -0.7]}>
        <planeGeometry args={[1.6, 1.2]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  );
}

function FileFolder({ position }) {
  const folderRef = useRef();
  
  useEffect(() => {
    if (!folderRef.current) return;
    
    gsap.to(folderRef.current.rotation, {
      x: -1.5,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(3)',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      }
    });
  }, []);

  return (
    <group position={position}>
      <mesh ref={folderRef}>
        <boxGeometry args={[2, 0.15, 1.5]} />
        <meshStandardMaterial color="#f4e4c1" />
      </mesh>
    </group>
  );
}

function IPad({ position }) {
  const ipadRef = useRef();
  
  useEffect(() => {
    if (!ipadRef.current) return;
    
    gsap.fromTo(ipadRef.current.scale, 
      { x: 0, y: 0, z: 0 },
      { 
        x: 1, y: 1, z: 1,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'top center',
          end: 'center center',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <group position={position}>
      <mesh ref={ipadRef}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function WorkingExperience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* MacBook */}
      <MacBook position={[0, 0, 0]} />
      
      {/* File Folder */}
      <FileFolder position={[3, -1, -2]} />
      
      {/* iPad */}
      <IPad position={[-3, -1, -2]} />
      
      {/* Environment */}
      <mesh position={[0, -2, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </>
  );
}
