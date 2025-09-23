import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Ubada <span className="waving-hand"> 👋 </span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building products and brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HackerRoom
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
