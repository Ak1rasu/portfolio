import windowTexture from "../assets/textures/window.jpg";
import {useVideoTexture, RoundedBox, useTexture} from "@react-three/drei";
import { windowVideo } from "./season.jsx";
import { useState, useEffect} from "react";

export default function Components() {
    const videoTexture = useVideoTexture(windowVideo);
    const [page, setPage] = useState("room");
    const [hovered, setHovered] = useState(false);
    const caseyPhoto = useTexture("../ui/assets/myself.jpg")

    useEffect(() => {
        const canvas = document.querySelector("canvas");
        if (hovered) {
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }
    }, [hovered]);

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
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            <mesh position={[1.7, 1.1, 0]}>
                <planeGeometry args={[0.1, 1.8]}/>
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            <mesh position={[0.25, 0.25, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            <mesh position={[0.25, 1.95, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            <mesh position={[0.25, 0.8, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            <mesh position={[0.25, 1.5, 0]}>
                <planeGeometry args={[2.8, 0.1]}/>
                <meshStandardMaterial color={"#5a3824"}/>
            </mesh>
            {/*Table*/}
            <mesh position={[0.25, 0, 0.7]}>
                <boxGeometry args={[3.5, 0.2, 1.5]} />
                <meshStandardMaterial 
                color="#6b4226"
                />
            </mesh>
            {/* DOOR */}

            {/* Door frame */}
            <RoundedBox
                position={[-3.45, 0.2, 2.1]}
                rotation={[0, -Math.PI / -2.2, 0]}
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
                position={[-3.35, 0.2, 2.15]}
                rotation={[0, -Math.PI / -2.2, 0]}
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
            <mesh position={[-3.2, 0.2, 1.85]}>
                <sphereGeometry args={[0.09, 16, 16]} />
                <meshStandardMaterial
                color="#c9a45c"
                metalness={0.8}
                roughness={0.25}
            />
            </mesh>
            {/*  PICTURE FRAME */}
<mesh 
    position={[-1, 0.48, 0.4]} 
    rotation={[-0.2, -Math.PI / -10.15, 0]}

    onClick={() => window.location.href = "/onepager.html"}

    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
>
    <boxGeometry args={[0.6, 0.75, 0.12]} />

    <meshStandardMaterial
        color="#241811"
        roughness={0.8}
        emissive="#85644b"
        emissiveIntensity={hovered ? 1.5 : 0.4}
    />
</mesh>

            {/* Photo */}
            <mesh
            position={[-0.98, 0.5, 0.48]}
            rotation={[-0.2, -Math.PI / -12, 0]}
            onClick={() => window.location.href = "/onepager.html"}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
                <planeGeometry args={[0.5, 0.61]} />
                <meshBasicMaterial map={caseyPhoto} />
            </mesh>
        </>
    )
}