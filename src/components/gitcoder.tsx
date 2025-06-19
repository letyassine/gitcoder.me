"use client";
import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Text3D, OrbitControls, Center, Sparkles } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";

const ParticleField = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 200;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3] = Math.random() * 0.5 + 0.5;
    colors[i * 3 + 1] = Math.random() * 0.3 + 0.7;
    colors[i * 3 + 2] = 1;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.1;
      points.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} />
    </points>
  );
};

const HolographicMaterial = ({ map }: { map: THREE.Texture }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  useEffect(() => {
    if (materialRef.current && materialRef.current.uniforms.matcap) {
      materialRef.current.uniforms.matcap.value.colorSpace =
        THREE.SRGBColorSpace;
    }
  }, []);

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float time;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          pos.x += sin(time * 2.0 + position.y * 0.5) * 0.1;
          pos.y += cos(time * 1.5 + position.x * 0.5) * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `}
      fragmentShader={`
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform float time;
        uniform sampler2D matcap;
        
        void main() {
          vec2 matcapUv = vNormal.xy * 0.5 + 0.5;
          vec4 matcapColor = texture2D(matcap, matcapUv);
          
          // Holographic effect
          float fresnel = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
          vec3 hologram = vec3(0.0, 0.8, 1.0) * fresnel;
          
          // Animated rainbow effect
          vec3 rainbow = vec3(
            sin(time * 2.0 + vPosition.x * 0.5) * 0.5 + 0.5,
            sin(time * 2.0 + vPosition.y * 0.5 + 2.0) * 0.5 + 0.5,
            sin(time * 2.0 + vPosition.z * 0.5 + 4.0) * 0.5 + 0.5
          );
          
          vec3 finalColor = mix(matcapColor.rgb, hologram + rainbow * 0.3, 0.4);
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `}
      uniforms={{
        time: { value: 0 },
        matcap: { value: map },
      }}
      transparent
    />
  );
};

const GitcoderText = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const map = useLoader(TextureLoader, "matcap.png");

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle breathing scale effect only
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.02;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Center position={[0, -1, 0]}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.5}
        curveSegments={16}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={8}
      >
        GitCoder
        <HolographicMaterial map={map} />
      </Text3D>

      {/* Sparkles around the text */}
      <Sparkles
        count={50}
        scale={[8, 8, 8]}
        size={3}
        speed={0.8}
        color="#00ffff"
      />
    </Center>
  );
};

const Gitcoder = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      style={{ background: "#14141C" }}
    >
      {/* Enhanced lighting */}
      <ambientLight intensity={0.3} color="#4a90e2" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#00ffff"
      />

      {/* Interactive controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxDistance={15}
        minDistance={3}
      />

      {/* Background particle field */}
      <ParticleField />

      <Suspense fallback={null}>
        <GitcoderText />
      </Suspense>
    </Canvas>
  );
};

export default Gitcoder;
