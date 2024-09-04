import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import {motion} from "framer-motion-3d"
import { Avatar2 } from "./Avatar2";
import { PunchingBag } from "./PunchingBag";
import { Avatar3 } from "./Avatar3";

export const Experience = (props) => {
  const {section} = props;


  const positions = [
    [-1.5, 20, -1], // ABOUT
    [-1.5, 15, -1], // SKILLS
    [-1.5, 10, -1], // PROJECTS
    [-1.5, 5, -1], // CONTACT
  ];

  return (
    <>
      <Environment preset ="sunset"></Environment>
      <group position={[-1, -2, -1.5]}>
        <motion.group
          position = {positions[Math.floor(section / 1.5)]} 
          scale = {[0.9, 0.9, 0.9]}
          rotation-y = {-Math.PI / 4}
          animate = {{
            y : section == 1 ? 0 : -1,
          }}
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 50,
            damping: 50,
            restDelta: 0.001,
          }}
        >
          <group  position={[-1.3, 0.5, 0.2]} rotation={[0, 180, 0]} scale={2.5}> <Avatar/></group>
          <Office/>
        </motion.group>

        <group  position={[-1, -13, -1.5]} rotation={[0, 1, 0]} scale={3.5}> <Avatar2/></group>
        <group  position={[1.5, -13, 0.5]} rotation={[0, 1, 0]} scale={0.9}> <PunchingBag/></group>


        <group  position={[-1, -36, -1.5]} rotation={[0.05, 1, 0]} scale={3.5}> <Avatar3/></group>
      </group>
    </>
  );
};