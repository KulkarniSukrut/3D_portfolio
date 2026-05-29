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
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: '.scroll-section:nth-child(2)',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
      }
    });

    // Screen unlock animation
    if (screenRef.current) {
      gsap.to(screenRef.current.material, {
        opacity: 1,
        emissiveIntensity: 0.3,
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(2)',
          start: 'center top',
          end: 'center center',
          scrub: 1.2,
        }
      });
    }
  }, []);

  return (
    <group ref={groupRef} position={position}>
      {/* MacBook Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.8]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* MacBook Lid */}
      <mesh ref={lidRef} position={[0, 0, 0]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[2.3, 0.05, 1.6]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.03, -0.8]}>
        <planeGeometry args={[2.0, 1.3]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
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

    // Project cards flying out
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
          delay: index * 0.2
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
      <mesh ref={folderRef}>
        <boxGeometry args={[2.5, 0.15, 2]} />
        <meshStandardMaterial color="#f4e4c1" roughness={0.8} metalness={0.1} />
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
            emissive={project.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function IPad({ position }) {
  const ipadRef = useRef();
  const screenRef = useRef();
  const appRef = useRef();
  
  useEffect(() => {
    if (!ipadRef.current) return;
    
    // iPad scaling animation
    gsap.fromTo(ipadRef.current.scale, 
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
      <mesh ref={ipadRef} scale={[0.8, 0.8, 0.8]}>
        {/* iPad Body */}
        <mesh>
          <boxGeometry args={[1.8, 2.4, 0.12]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.7} roughness={0.2} />
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

export default function FinalExperience() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#4ecdc4" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#ff6b6b" />
      
      {/* Environment */}
      <mesh position={[0, -3, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
      </mesh>
      
      {/* 3D Models */}
      <MacBook position={[0, 0, 0]} />
      <FileFolder position={[4, -1, -3]} />
      <IPad position={[-4, -1, -3]} />
    </>
  );
}
