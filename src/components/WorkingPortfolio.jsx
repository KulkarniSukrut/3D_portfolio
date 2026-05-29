import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function MacBook({ position }) {
  const groupRef = useRef();
  const lidRef = useRef();
  const screenRef = useRef();
  
  useEffect(() => {
    if (!lidRef.current) return;
    
    // MacBook opening animation
    gsap.to(lidRef.current.rotation, {
      x: -1.2,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      }
    });

    // Screen unlock
    if (screenRef.current) {
      gsap.to(screenRef.current.material, {
        opacity: 1,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(2)',
          start: 'center center',
          end: 'bottom center',
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {/* Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Lid */}
      <mesh ref={lidRef} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[1.8, 0.05, 1.3]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.03, -0.7]}>
        <planeGeometry args={[1.6, 1.1]} />
        <meshStandardMaterial color="#4ecdc4" opacity={0} transparent emissive="#4ecdc4" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function FileFolder({ position }) {
  const folderRef = useRef();
  const cardsRef = useRef([]);
  
  useEffect(() => {
    if (!folderRef.current) return;
    
    // Folder opens
    gsap.to(folderRef.current.rotation, {
      x: -1.5,
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(3)',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      }
    });

    // Cards fly out
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.to(card.position, {
        x: (index - 1) * 1.5,
        y: 1,
        z: 0,
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

  return (
    <group position={position}>
      {/* Folder */}
      <mesh ref={folderRef}>
        <boxGeometry args={[2, 0.15, 1.5]} />
        <meshStandardMaterial color="#f4e4c1" />
      </mesh>
      
      {/* Cards */}
      {[0, 1, 2].map((index) => (
        <mesh
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          position={[0, 0.2, 0]}
        >
          <boxGeometry args={[0.8, 0.6, 0.05]} />
          <meshStandardMaterial color={index === 0 ? '#ff6b6b' : index === 1 ? '#4ecdc4' : '#45b7d1'} />
        </mesh>
      ))}
    </group>
  );
}

function IPad({ position }) {
  const ipadRef = useRef();
  const screenRef = useRef();
  
  useEffect(() => {
    if (!ipadRef.current) return;
    
    // iPad scales in
    gsap.fromTo(ipadRef.current.scale, 
      { x: 0.1, y: 0.1, z: 0.1 },
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

    // Screen glows
    if (screenRef.current) {
      gsap.to(screenRef.current.material, {
        emissiveIntensity: 0.3,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'center center',
          end: 'bottom center',
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <group position={position}>
      <mesh ref={ipadRef}>
        {/* iPad Body */}
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.6} roughness={0.3} />
        
        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0, 0.06]}>
          <planeGeometry args={[1.3, 1.8]} />
          <meshStandardMaterial color="#000" emissive="#4ecdc4" emissiveIntensity={0} />
        </mesh>
      </mesh>
    </group>
  );
}

export default function WorkingPortfolio() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Ground */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      {/* All 3 models visible and working */}
      <MacBook position={[0, 0, 0]} />
      <FileFolder position={[3, 0, -1]} />
      <IPad position={[-3, 0, -1]} />
    </>
  );
}
