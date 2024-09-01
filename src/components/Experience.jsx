import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import {motion} from "framer-motion-3d"
import { MotionConfig } from "framer-motion";

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
      </group>

    </>
  );
};
