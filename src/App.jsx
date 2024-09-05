import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState } from "react";
import { Nav } from "./components/Nav";

function App() {
  const [section, setSection] = useState(0);
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div style={{ background: 'radial-gradient(#FDDC5C #FFE5B4 80%)', height: '100vh', width: '100vw' }}>
      <Canvas shadows camera={{ position: [10, 5, -1], fov: 45 }}>
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
