import windowTexture from "../assets/textures/window.jpg";
import {useVideoTexture, RoundedBox} from "@react-three/drei";
import { windowVideo } from "./season.jsx";

export default function Components() {
    const videoTexture = useVideoTexture(windowVideo);

    return (
        <>
            {/*Window*/}
            <mesh position={[0.2, 1, -0.05]}>
                <planeGeometry args={[3, 2]}/>
                <meshStandardMaterial 
                    color={"#292929"} 
                    opacity={0.3} 
                    transparent={true}
                    roughness={0}
                />
            </mesh>
            <mesh position={[0.2, 1, -0.1]}>
                <planeGeometry args={[3, 2]}/>
                <meshStandardMaterial map={videoTexture}/>
                
            </mesh>
            <mesh position={[-1.2, 1.1, 0]}>
                <planeGeometry args={[0.1, 1.8]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            <mesh position={[1.7, 1.1, 0]}>
                <planeGeometry args={[0.1, 1.8]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            <mesh position={[0.25, 0.25, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            <mesh position={[0.25, 1.95, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            <mesh position={[0.25, 0.8, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            <mesh position={[0.25, 1.5, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#472c13"}/>
            </mesh>
            {/*Table*/}
            <mesh position={[0.25, 0, 0.7]}>
                <boxGeometry args={[3.5, 0.2, 1.5]} />
                <meshStandardMaterial color="#6b4226" />
            </mesh>
            {/* DOOR */}

            {/* Door frame */}
            <RoundedBox
                position={[-3.45, 0.2, 2.1]}
                rotation={[0, -Math.PI / 2, 0]}
                args={[1.4, 2.4, 0.15]}
                radius={0.05}
                smoothness={4}
            >
            <meshStandardMaterial
                color="#5a3824"
                roughness={0.8}
            />
            </RoundedBox>

            {/* Door */}
            <RoundedBox
                position={[-3.3, 0.2, 2.0]}
                rotation={[0, -Math.PI / 2, 0]}
                args={[1.15, 2.2, 0.12]}
                radius={0.04}
                smoothness={4}
            >
            <meshStandardMaterial
                color="#8a6045"
                roughness={0.8}
            />
            </RoundedBox>

            {/* Door handle */}
            <mesh position={[2.2, 0.2, 1.88]}>
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial
                color="#c9a45c"
                metalness={0.8}
                roughness={0.25}
            />
            </mesh>
        </>
    )
}