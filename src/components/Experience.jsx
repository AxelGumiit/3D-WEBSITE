import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import {motion} from "framer-motion-3d"
import { Avatar2 } from "./Avatar2";
import { PunchingBag } from "./PunchingBag";
import { Avatar3 } from "./Avatar3";
import { Avatar4 } from "./Avatar4";

export const Experience = (props) => {
  const {section} = props;



  return (
    <>
      <Environment preset ="sunset"></Environment>
      <group position={[-1, -2, -1.5]}>
        <motion.group
          position = {[-1.5, 20,-1]}
          scale = {[0.9, 0.9, 0.9]}
          rotation-y = {-Math.PI / 4}
          animate = {{
            y : section == 0 ? 0 : -1,
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

        
        <group  position={[-1, -12, -1.5]} rotation={[0, 1, 0]} scale={3}><Avatar2/></group>    
        <group  position={[-1, -24, -1]} rotation={[0.09, 1, 0]} scale={3}> <Avatar4/></group>
        <group  position={[1.5, -12, 0.5]} rotation={[0, 1, 0]} scale={0.8}> <PunchingBag/></group>


        <group  position={[-1, -37.5, 0]} rotation={[0.05, 1, 0]} scale={3.5}> <Avatar3/></group>
      </group>
    </>
  );
};