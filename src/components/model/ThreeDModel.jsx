import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const ThreeDModel = () => {
  return (
    <div style={{ height: "50vh" }}>
      <Canvas>
        <ambientLight intensity={3} />
        <Model url="gray_matter_os.glb" />
        <OrbitControls
          makeDefault
          target={[0, -1, 1]}
          minDistance={5}
          maxDistance={20}
          initialPosition={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
