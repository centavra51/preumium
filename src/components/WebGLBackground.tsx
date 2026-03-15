"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const numParticles = 2000;
  
  // Custom random generation to be stable
  const [positions, generateRandom] = useMemo(() => {
    const p = new Float32Array(numParticles * 3);
    for (let i = 0; i < numParticles; i++) {
        // distribute across width and height of viewport
        p[i * 3] = (Math.random() - 0.5) * 15; // x
        p[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
        p[i * 3 + 2] = (Math.random() - 0.5) * 5; // z
    }
    return [p, Math.random];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Gentle floating interaction with pointer
      const targetX = (state.pointer.x * viewport.width) / 10;
      const targetY = (state.pointer.y * viewport.height) / 10;
      
      ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#1B1B1B"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

export function WebGLBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
      <ParticleField />
    </Canvas>
  );
}
