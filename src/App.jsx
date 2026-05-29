import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import WorkingPortfolio from './components/WorkingPortfolio';
import LoadingScreen from './components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Pin the canvas
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: canvasRef.current,
      pinSpacing: false,
    });

    // Text animations for section 1
    gsap.fromTo('.section-1 h1', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(1)',
          start: 'top center',
          end: 'center center',
          scrub: 1.2,
        }
      }
    );

    gsap.fromTo('.section-1 p', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(1)',
          start: 'top center',
          end: 'center center',
          scrub: 1.2,
          delay: 0.2
        }
      }
    );

    // Text animations for section 2
    gsap.fromTo('.section-2 h2', 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(2)',
          start: 'top center',
          end: 'center center',
          scrub: 1.5,
        }
      }
    );

    gsap.fromTo('.section-2 p', 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(2)',
          start: 'center top',
          end: 'center center',
          scrub: 1.3,
          delay: 0.3
        }
      }
    );

    // Text animations for section 3
    gsap.fromTo('.section-3 h2', 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(3)',
          start: 'top center',
          end: 'center center',
          scrub: 1.6,
        }
      }
    );

    // Text animations for section 4
    gsap.fromTo('.section-4 h2', 
      { opacity: 0, rotation: 5 },
      { 
        opacity: 1, 
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'top center',
          end: 'center center',
          scrub: 1.4,
        }
      }
    );

    gsap.fromTo('.section-4 p', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'center top',
          end: 'center center',
          scrub: 1.3,
          delay: 0.2
        }
      }
    );

    gsap.fromTo('.section-4 a', 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.scroll-section:nth-child(4)',
          start: 'center center',
          end: 'bottom center',
          scrub: 1.2,
          delay: 0.4
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed 3D Canvas */}
      <div 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-screen z-10"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <WorkingPortfolio />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Sections */}
      <div className="relative z-20">
        {/* Section 1: Landing */}
        <section className="scroll-section section-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl">
              Scroll to explore my 3D experience
            </p>
          </div>
        </section>

        {/* Section 2: About Me */}
        <section className="scroll-section section-2 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a creative developer passionate about building immersive web experiences 
                that blend cutting-edge technology with beautiful design.
              </p>
              <p>
                With expertise in React, Three.js, and modern web technologies, I transform 
                ideas into interactive digital realities that captivate and engage users.
              </p>
              <p>
                My journey spans from traditional web development to pioneering 3D web experiences, 
                always pushing the boundaries of what's possible in the browser.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Projects */}
        <section className="scroll-section section-3 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will be populated by 3D animation */}
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section className="scroll-section section-4 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl mb-8">
              Let's create something amazing together
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="block text-lg hover:text-blue-400 transition-colors">
                hello@example.com
              </a>
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com" className="text-2xl hover:text-blue-400 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" className="text-2xl hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" className="text-2xl hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
