import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styles from "./Model.module.css";
import cx from "classnames";
import { motion, AnimatePresence } from "motion/react";
import { Suspense } from "react";

//make the imported model spin
function SpinningModel({ modelPath }) {
  const modelRef = useRef();
  const { scene } = useGLTF(modelPath);

  //animation loop
  useFrame((state, delta) => {
    modelRef.current.rotation.y += delta * 0.5; //rotate at 0.5 radians per second
  });
  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[0, 0, 0]}
      scale={[2.2, 2.2, 2.2]}
    />
  );
}

const ModelViewer = () => {
  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={{ visibility: "visible" }}
      transition={{ delay: 3, ease: "easeIn" }}
      className={cx(styles["canvas-container"])}
    >
      <Canvas
        style={{ height: "30vh" }}
        camera={{ position: [2.2, 2.2, 2.2], fov: 70 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <SpinningModel modelPath="water_god.glb" />
          <OrbitControls
            minDistance={4}
            maxDistance={2}
            initialPosition={[0, 0, 2]}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default ModelViewer;
