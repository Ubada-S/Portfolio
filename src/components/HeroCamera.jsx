import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame(
    (state, delta) => {
      // Smooth camera movement
      easing.damp3(state.camera.position, [0, 0, 20], 0.15, delta);

      // Rotate group with mouse when not on mobile
      // if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0], // flipped signs
        0.6,
        delta
      );
    }
    //   }
    // actually i disabled this if statement because a little movement on mobile looks cool ngl
  );

  return (
    <group ref={groupRef} scale={isMobile ? 1.5 : 1.3}>
      {children}
    </group>
  );
};

export default HeroCamera;
