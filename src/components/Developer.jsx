import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  const { scene } = useGLTF("/models/human/developer.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX("/models/human/idle.fbx");
  const { animations: saluteAnimation } = useFBX("/models/human/cheering1.fbx");
  const { animations: clappingAnimation } = useFBX(
    "/models/human/cheering2.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/human/cheering3.fbx"
  );

  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "cheering1";
  clappingAnimation[0].name = "cheering2";
  victoryAnimation[0].name = "cheering3";

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName].fadeOut(0.5);
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <group>
        <mesh
          name="Alpha_Surface"
          castShadow
          receiveShadow
          geometry={nodes.Alpha_Surface.geometry}
          material={materials.Alpha_Body_MAT}
        />
        <mesh
          name="Alpha_Joints"
          castShadow
          receiveShadow
          geometry={nodes.Alpha_Joints.geometry}
          material={materials.Alpha_Joints_MAT}
        />
      </group>
    </group>
  );
};

// Preload all files
useGLTF.preload("/models/human/developer.glb");
useFBX.preload("/models/human/idle.fbx");
useFBX.preload("/models/human/cheering1.fbx");
useFBX.preload("/models/human/cheering2.fbx");
useFBX.preload("/models/human/cheering3.fbx");

export default Developer;
