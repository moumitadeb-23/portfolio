import React, { useRef, useEffect, useCallback } from 'react';
import * as THREE from 'three';

const ThreeOrb = ({ isDark }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const orbRef = useRef(null);
  const glowRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(isDark ? 0x8b5cf6 : 0xa78bfa, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 0.5, 15);
    pointLight1.position.set(-4, -3, -3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 0.35, 15);
    pointLight2.position.set(3, -2, 3);
    scene.add(pointLight2);

    // Main orb with custom vertex distortion
    const orbGeometry = new THREE.SphereGeometry(1.6, 48, 48);
    const orbMaterial = new THREE.MeshStandardMaterial({
      color: isDark ? 0x8b5cf6 : 0xa78bfa,
      emissive: isDark ? 0x4c1d95 : 0x6d28d9,
      emissiveIntensity: isDark ? 0.5 : 0.2,
      roughness: 0.1,
      metalness: 0.92,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(orb);
    orbRef.current = orb;

    // Store original positions for distortion
    const originalPositions = orbGeometry.attributes.position.array.slice();

    // Glow layer
    const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x7c3aed : 0xa78bfa,
      transparent: true,
      opacity: 0.06,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);
    glowRef.current = glow;

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const mouse = mouseRef.current;

      // Orb rotation + mouse follow
      orb.rotation.x = t * 0.08 + mouse.y * 0.15;
      orb.rotation.y = t * 0.12 + mouse.x * 0.15;

      // Pulsing scale
      const s = 1 + Math.sin(t * 0.4) * 0.04;
      orb.scale.setScalar(s);

      // Vertex distortion (wavy surface)
      const positions = orbGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const ox = originalPositions[i];
        const oy = originalPositions[i + 1];
        const oz = originalPositions[i + 2];
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const noise = Math.sin(ox * 3 + t * 1.5) * Math.cos(oy * 3 + t * 1.2) * Math.sin(oz * 3 + t * 0.8) * 0.06;
        const factor = (len + noise) / len;
        positions[i] = ox * factor;
        positions[i + 1] = oy * factor;
        positions[i + 2] = oz * factor;
      }
      orbGeometry.attributes.position.needsUpdate = true;
      orbGeometry.computeVertexNormals();

      // Glow follows
      glow.rotation.x = t * 0.05;
      glow.rotation.y = t * 0.07;
      glow.scale.setScalar(s * 1.15);

      renderer.render(scene, camera);
    };
    animate();

    // Mouse listener
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark, handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ThreeOrb;
