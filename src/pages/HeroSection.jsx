import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import Footer from "../ui/Footer";
import useNavigation from "../utils/useNavigation";

const CHARACTERS = ["+", "-", "=", "<", "*", ">"];

const HeroSection = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const handleClick = useNavigation();

  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetMouse = useRef(new THREE.Vector2(0, 0));

  const PARTICLE_COUNT = 20000;
  const PARTICLE_SIZE = 5;

  const onMouseMove = useCallback((event) => {
    targetMouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    targetMouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }, []);

  const onWindowResize = useCallback(() => {
    if (containerRef.current && cameraRef.current && rendererRef.current) {
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    }
  }, []);

  const animate = useCallback(() => {
    if (!rendererRef.current) return;

    // eslint-disable-next-line react-hooks/immutability
    requestAnimationFrame(animate);

    mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.05;
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.05;

    if (particlesRef.current) {
      particlesRef.current.rotation.x = mouse.current.y * 0.1;
      particlesRef.current.rotation.y = mouse.current.x * 0.1;
      particlesRef.current.rotation.z += 0.0005;
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  const createCharacterTexture = useCallback((char) => {
    const canvas = document.createElement("canvas");
    const size = 128;
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";
    context.font = `bold ${size * 0.8}px Inter, sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(char, size / 2, size / 2 + size * 0.05);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  const createParticles = useCallback(() => {
    if (particlesRef.current) {
      sceneRef.current.remove(particlesRef.current);
      particlesRef.current = null;
    }

    const particleGroup = new THREE.Group();

    const maxRange = 1000;
    const particlesPerType = Math.floor(PARTICLE_COUNT / CHARACTERS.length);

    CHARACTERS.forEach((char, index) => {
      const texture = createCharacterTexture(char);

      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color = new THREE.Color();

      for (let i = 0; i < particlesPerType; i++) {
        const x = Math.random() * maxRange * 2 - maxRange;
        const y = Math.random() * maxRange * 2 - maxRange;
        const z = Math.random() * maxRange * 2 - maxRange;
        positions.push(x, y, z);

        color.setHSL(
          index / CHARACTERS.length + 0.5,
          0.7,
          0.6 + Math.random() * 0.3
        );
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: PARTICLE_SIZE,
        map: texture,
        vertexColors: true,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geometry, material);
      particleGroup.add(points);
    });

    particlesRef.current = particleGroup;
    sceneRef.current.add(particlesRef.current);
  }, [createCharacterTexture, PARTICLE_COUNT, PARTICLE_SIZE]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    sceneRef.current = new THREE.Scene();

    const aspect = container.clientWidth / container.clientHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspect, 1, 3000);
    cameraRef.current.position.z = 1000;

    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(rendererRef.current.domElement);

    createParticles();
    animate();

    window.addEventListener("resize", onWindowResize, false);
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      window.removeEventListener("mousemove", onMouseMove, false);
      if (
        rendererRef.current &&
        container.contains(rendererRef.current.domElement)
      ) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, [animate, createParticles, onMouseMove, onWindowResize]);

  return (
    <section
      id="hero-section"
      className="relative w-screen h-screen bg-[#0A192F] overflow-hidden"
    >
      <div
        ref={containerRef}
        id="interactive-background"
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      ></div>

      <div
        id="hero-content"
        className="relative z-20 flex flex-col justify-center items-center h-full text-center p-4 text-[#E0E7FF] gap-8"
      >
        <h1 className="text-4xl sm:text-7xl font-bold font-montserrat bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 w-9/10 ">
          Sanusi Olayinka.{" "}
          <p className="text-3xl sm:text-5xl text-white mt-2">
            <span className="text-violet-950">{"<"}</span>Creative Frontend
            Developer.<span className="text-violet-950">{"/>"}</span>
          </p>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl font-light font-raleway">
          I build exceptional and accessible digital experiences
        </p>
        <div className="flex justify-between items-center gap-3">
          <button
            className="bg-transparent hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 border-2 border-white font-roboto"
            onClick={() => handleClick("projects")}
          >
            View My Work
          </button>
          <button
            className="bg-transparent hover:bg-purple-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 border-2 border-white font-roboto"
            onClick={() => handleClick("aboutme")}
          >
            About Me
          </button>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default HeroSection;
