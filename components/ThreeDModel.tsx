'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Box, Torus, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Box args={[0.8, 0.8, 0.8]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#00E5FF" wireframe transparent opacity={0.3} />
        </Box>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
        <Torus args={[1.2, 0.1, 16, 32]} position={[2, -0.5, -1]}>
          <meshStandardMaterial color="#C9A84C" wireframe transparent opacity={0.4} />
        </Torus>
      </Float>
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Sphere args={[0.5, 16, 16]} position={[0, -1.5, 1]}>
          <meshStandardMaterial color="#00E5FF" transparent opacity={0.2} />
        </Sphere>
      </Float>
    </>
  );
}

export default function ThreeDModel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 -z-5 pointer-events-none"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00E5FF" />
        <Suspense fallback={null}>
          <FloatingShapes />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
