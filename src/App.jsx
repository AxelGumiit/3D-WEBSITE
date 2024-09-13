import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState } from "react";
import { Nav } from "./components/Nav";
import './index.css'


function App() {
  const [section, setSection] = useState(0);
  const [navOpened, setNavOpened] = useState(false);

  return (
     <div className="canvas-container">
      <Canvas shadows camera={{ position: [10, 5, -1], fov: 45 }}>
      <color attach="background" args={["#CF9FFF"]} />
        <ScrollControls pages={5} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience section={section} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Nav onSectionChange={setSection} navOpened={navOpened} setNavOpened={setNavOpened} />
      </div>
  );
}

export default App;
