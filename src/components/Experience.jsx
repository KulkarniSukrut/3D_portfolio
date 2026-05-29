import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { MeshStandardMaterial, PlaneGeometry, Mesh } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

// Import models (you'll need to add these to public/models/)
// import macbookModel from '../models/macbook.glb';
// import ipadModel from '../models/ipad.glb';

function MacBook({ position, rotation }) {
  const meshRef = useRef();
  const screenRef = useRef();
  
  useEffect(() => {
    // MacBook opening animation
    gsap.to(meshRef.current.rotation, {
      x: -0.3,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });

    // Screen unlock animation
    gsap.to(screenRef.current.material, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'center center',
        end: 'bottom center',
        scrub: 1,
      }
    });
  }, []);

  return (
    <group position={position} rotation={rotation}>
      {/* MacBook Base */}
      <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2, 0.05, 1.5]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* MacBook Screen */}
      <mesh ref={screenRef} position={[0, 0.6, -0.7]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.05]} />
        <meshStandardMaterial color="#000" opacity={0} transparent />
      </mesh>
      
      {/* Screen Content */}
      <mesh position={[0, 0.6, -0.67]}>
        <planeGeometry args={[1.7, 1.1]} />
        <meshStandardMaterial 
          color="#fff" 
          opacity={1} 
          transparent
          emissive="#fff"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
}

function FileFolder({ position }) {
  const folderRef = useRef();
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Folder opening animation
    gsap.to(folderRef.current.rotation, {
      x: -1.2,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(3)',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      }
    });

    // Project cards flying out
    cardsRef.current.forEach((card, index) => {
      gsap.to(card.position, {
        x: (index - 1) * 2,
        y: Math.random() * 2 - 1,
        z: Math.random() * 2 - 1,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(3)',
          start: 'center center',
          end: 'bottom center',
          scrub: 1,
          delay: index * 0.1
        }
      });
    });
  }, []);

  const projects = [
    { title: 'Project 1', color: '#ff6b6b' },
    { title: 'Project 2', color: '#4ecdc4' },
    { title: 'Project 3', color: '#45b7d1' },
  ];

  return (
    <group position={position}>
      {/* Folder */}
      <mesh ref={folderRef} rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#f4e4c1" />
      </mesh>
      
      {/* Project Cards */}
      {projects.map((project, index) => (
        <mesh
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          position={[0, 0.2, 0]}
        >
          <planeGeometry args={[0.8, 0.6]} />
          <meshStandardMaterial color={project.color} />
        </mesh>
      ))}
    </group>
  );
}

function iPad({ position }) {
  const ipadRef = useRef();
  const screenRef = useRef();
  
  useEffect(() => {
    // iPad appearance animation
    gsap.to(ipadRef.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(4)',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      }
    });

    // App opening animation
    gsap.to(screenRef.current.material, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(4)',
        start: 'center center',
        end: 'bottom center',
        scrub: 1,
      }
    });
  }, []);

  return (
    <group position={position} scale={[0.5, 0.5, 0.5]}>
      <mesh ref={ipadRef}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* iPad Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.06]}>
        <planeGeometry args={[1.3, 1.8]} />
        <meshStandardMaterial color="#000" opacity={0} transparent />
      </mesh>
      
      {/* Contact Form on Screen */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[1.2, 1.7]} />
        <meshStandardMaterial 
          color="#fff" 
          opacity={0} 
          transparent
          emissive="#fff"
          emissiveIntensity={0.05}
        />
      </mesh>
    </group>
  );
}

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* MacBook */}
      <MacBook position={[0, 0, 0]} rotation={[0, 0, 0]} />
      
      {/* Environment */}
      <mesh position={[0, -2, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </>
  );
}
