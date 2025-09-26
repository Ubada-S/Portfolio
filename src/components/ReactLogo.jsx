import React from "react";
import { useGLTF } from "@react-three/drei";

function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/models/threejs.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.threejs.geometry}
        material={nodes.threejs.material}
      />
    </group>
  );
}

useGLTF.preload("/models/threejs.glb");

export default ReactLogo;
