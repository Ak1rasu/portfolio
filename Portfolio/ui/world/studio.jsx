import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei";
import roomHDR from "../assets/room.hdr";
import { OrbitControls } from "@react-three/drei";
import { CameraSetup } from "./camera.jsx";
import Room from "./room.jsx";
import Components from "./components.jsx";

function Studio() {
    return (
        <Canvas>
            <CameraSetup/>
            <Environment files={roomHDR} />
            <Room/>
            <Components/>
            {/* <OrbitControls/> */} 
        </Canvas>
    )
}

export default Studio