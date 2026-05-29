import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

function MacBook({ position }) {
  const groupRef = useRef();
  const lidRef = useRef();
  const screenRef = useRef();
  const screenContentRef = useRef();
  
  useEffect(() => {
    if (!lidRef.current) return;
    
    // MacBook opening animation with smooth easing
    gsap.to(lidRef.current.rotation, {
      x: -1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
      }
    });

    // Screen glow animation
    if (screenContentRef.current) {
      gsap.to(screenContentRef.current.material, {
        emissiveIntensity: 0.3,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(2)',
          start: 'center top',
          end: 'center center',
          scrub: 1.2,
        }
      });
    }

    // Subtle floating animation
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: position.y + 0.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [position]);

  return (
    <group ref={groupRef} position={position}>
      {/* MacBook Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial 
          color="#c0c0c0" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* MacBook Lid */}
      <mesh ref={lidRef} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2.3, 0.05, 1.6]} />
        <meshStandardMaterial 
          color="#d0d0d0" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.03, -0.8]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.1, 1.4, 0.02]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      
      {/* Screen Content */}
      <mesh ref={screenContentRef} position={[0, 0.04, -0.79]}>
        <planeGeometry args={[2.0, 1.3]} />
        <meshStandardMaterial 
          color="#fff" 
          opacity={0} 
          transparent
          emissive="#4ecdc4"
          emissiveIntensity={0}
        />
      </mesh>
    </group>
  );
}

function FileFolder({ position }) {
  const folderRef = useRef();
  const cardsRef = useRef([]);
  
  useEffect(() => {
    if (!folderRef.current) return;
    
    // Folder opening animation
    gsap.to(folderRef.current.rotation, {
      x: -1.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(3)',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.8,
      }
    });

    // Project cards flying out with stagger
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const angle = (index / 3) * Math.PI * 2;
      const radius = 2.5;
      
      gsap.to(card.position, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * 0.5 + 0.5,
        z: Math.sin(angle) * radius,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(3)',
          start: 'center bottom',
          end: 'bottom center',
          scrub: 1.5,
          delay: index * 0.15
        }
      });

      // Hover effect for cards
      gsap.to(card.scale, {
        x: 1.1,
        y: 1.1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      });
    });
  }, []);

  const projects = [
    { title: 'Project 1', color: '#ff6b6b', github: 'https://github.com' },
    { title: 'Project 2', color: '#4ecdc4', github: 'https://github.com' },
    { title: 'Project 3', color: '#45b7d1', github: 'https://github.com' },
  ];

  return (
    <group position={position}>
      {/* Folder */}
      <mesh ref={folderRef} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.15, 2]} />
        <meshStandardMaterial 
          color="#f4e4c1" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Project Cards */}
      {projects.map((project, index) => (
        <mesh
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          position={[0, 0.2, 0]}
        >
          <boxGeometry args={[0.9, 0.7, 0.05]} />
          <meshStandardMaterial 
            color={project.color} 
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function IPad({ position }) {
  const iPadRef = useRef();
  const screenRef = useRef();
  const appRef = useRef();
  
  useEffect(() => {
    if (!iPadRef.current) return;
    
    // iPad scaling animation
    gsap.fromTo(iPadRef.current.scale, 
      { x: 0, y: 0, z: 0 },
      { 
        x: 1, y: 1, z: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'top bottom',
          end: 'center center',
          scrub: 1.5,
        }
      }
    );

    // App opening animation
    if (appRef.current) {
      gsap.to(appRef.current.scale, {
        x: 1,
        y: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'center top',
          end: 'center center',
          scrub: 1.2,
        }
      });
    }

    // Screen glow
    if (screenRef.current) {
      gsap.to(screenRef.current.material, {
        emissiveIntensity: 0.2,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <group position={position}>
      <mesh ref={iPadRef} scale={[0.7, 0.7, 0.7]}>
        {/* iPad Body */}
        <mesh>
          <boxGeometry args={[1.8, 2.4, 0.12]} />
          <meshStandardMaterial 
            color="#e0e0e0" 
            metalness={0.7} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0, 0.07]}>
          <planeGeometry args={[1.6, 2.2]} />
          <meshStandardMaterial 
            color="#000" 
            emissive="#4ecdc4"
            emissiveIntensity={0}
          />
        </mesh>
        
        {/* Contact App */}
        <mesh ref={appRef} position={[0, 0, 0.08]} scale={[0, 0, 1]}>
          <planeGeometry args={[1.4, 2.0]} />
          <meshStandardMaterial 
            color="#fff" 
            opacity={0.9}
            transparent
          />
        </mesh>
      </mesh>
    </group>
  );
}

function RotatingParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(
      <mesh key={i} position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
          emissive="#4ecdc4"
          emissiveIntensity={0.5}
        />
      </mesh>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
}

export default function SmoothExperience() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ecdc4" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#ff6b6b" />
      
      {/* Environment */}
      <mesh position={[0, -3, -5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Particles */}
      <RotatingParticles />
      
      {/* MacBook */}
      <MacBook position={[0, 0, 0]} />
      
      {/* File Folder */}
      <FileFolder position={[4, -1, -3]} />
      
      {/* iPad */}
      <IPad position={[-4, -1, -3]} />
    </>
  );
}
