import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useRef, useState } from "react";
import { Nav } from "./components/Nav";
import './index.css'
import { useEffect } from "react";



function App() {
  const [section, setSection] = useState(0);
  const [navOpened, setNavOpened] = useState(false);

  const [isPlaying, setIsPlayer] = useState(0)
  const audioRef = useRef(new Audio('/music/music.mp3'));


  const toggleMusic = () =>{
    if(isPlaying){
      audioRef.current.pause();
    }else{
        audioRef.current.play();
      }
      setIsPlayer(!isPlaying);
    };

    useEffect(() => {
      return () => {
        audioRef.current.pause();
      };
    }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? 'Turn Off Music' : 'Turn On Music'}
      </button>
      </div>
  );
}

export default App;
