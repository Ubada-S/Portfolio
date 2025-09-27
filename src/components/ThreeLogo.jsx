import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function ReactLogo(props) {
  const groupRef = useRef();
  const { nodes } = useGLTF("/models/threejs.glb");
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Target rotations from mouse
      const targetX = -mouse.y * 0.3; // up/down
      const targetY = mouse.x * 0.3; // left/right

      // Smoothly interpolate (lerp) toward target
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float floatIntensity={1}>
      <group
        ref={groupRef}
        position={[8, 8, 0]}
        scale={0.01}
        {...props}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.threejs.geometry}
          material={nodes.threejs.material}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/threejs.glb");

export default ReactLogo;
