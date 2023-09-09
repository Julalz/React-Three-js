import { Canvas } from "@react-three/fiber";
import { HomeScene } from "../scenes/HomeScene";

export const App = () => {
  return (
    <>
      <main className="app ">
        <section className="container-section">
          <h1>Developer Junior</h1>
          <h2>Julian Alz</h2>
        </section>
      </main>

      <Canvas
        className="canvas"
        shadows
        camera={{ position: [20, 10, 60], fov: 18 }}
      >
        <HomeScene />
      </Canvas>
    </>
  );
};
