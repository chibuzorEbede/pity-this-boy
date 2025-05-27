import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./Model.module.css";
import cx from "classnames";
import { motion } from "motion/react";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={[3.6, 3.6, 3.6]} />;
}

const ThreeDModel = () => {
  return (
    <div className={cx(styles["canvas-container"])}>
      <Canvas>
        <ambientLight intensity={2} />
        <pointLight intensity={1} />
        <Model url="planet_saturn.glb" />
        <OrbitControls
          makeDefault
          minDistance={5}
          maxDistance={20}
          initialPosition={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
