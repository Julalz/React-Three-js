/* eslint-disable react/no-unknown-property */
import {
  Cloud,
  Environment,
  GizmoHelper,
  OrbitControls,
} from "@react-three/drei";
import Video from "../components/Video";
import { Suspense } from "react";
import { Perro } from "../components/Perro";

export const HomeScene = () => {
  return (
    <Suspense>
      <OrbitControls />
      <pointLight
        position={[10, 15, 15]}
        color="blue"
        castShadow
        intensity={100}
        shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-heigth={1024}
      />
      <Environment preset="city" />
      <Video videourl={"../../public/2023-09-01 12-57-52.mkv"} />
      <Video
        position={[0, 2, -0.11]}
        rotation-y={Math.PI}
        videourl={"../../public/9x16_1.mp4"}
      />
      {/* pantalla */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[5, 4, 0.2]} />
        <meshStandardMaterial color={"black"} roughness={0} metalness={0} />
      </mesh>
      {/* forma arriba */}
      <mesh position={[3, 6, 3]}>
        <cylinderGeometry args={[3, 1, 1, 64]} />
        <meshStandardMaterial color={"red"} roughness={0} metalness={0} />
      </mesh>
      {/* base */}
      <mesh>
        <cylinderGeometry args={[3, 3, 0.3, 64]} />
        <meshStandardMaterial color={"black"} roughness={0} metalness={0} />
      </mesh>
      {/* forma abajo */}
      <mesh position={[-2, -6, -5]}>
        <cylinderGeometry args={[4, 4, 0.3, 64]} />
        <meshStandardMaterial color={"purple"} roughness={0} metalness={0} />
      </mesh>{" "}
      <Suspense fallback={null}>
        <Perro
          position={[-1, -5.8, -5.1]}
          rotation-y={(Math.PI / 0, 31)}
          scale={1.5}
        />
      </Suspense>
      <Cloud
        color={"white"}
        segments={300}
        depth={1}
        opacity={0.2}
        width={56}
        speed={0.4}
      />
    </Suspense>
  );
};

export default HomeScene;
