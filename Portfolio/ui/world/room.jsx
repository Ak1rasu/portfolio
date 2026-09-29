
export default function Room() {
    return (
        <>
            {/*Wall1*/}
            <mesh position={[0, 2.5, 0]}>
                <planeGeometry args={[6.5, 1]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            <mesh position={[0, -0.5, 0]}>
                <planeGeometry args={[6.5, 1.4]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            <mesh position={[-2.25, 1, 0]}>
                <planeGeometry args={[2, 2.2]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            <mesh position={[2.5, 1, 0]}>
                <planeGeometry args={[1.5, 2.2]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            {/*Wall2*/}
            <mesh position={[3.5, 1, 2]} rotation={[0, -Math.PI / 2.2, 0]}>
                <planeGeometry args={[4, 4]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            {/*Wall3*/}
            <mesh position={[-3.5, 1, 2]} rotation={[0, -Math.PI / -2.2, 0]}>
                <planeGeometry args={[4, 4]}/>
                <meshStandardMaterial color={"#d1b29c"}/>
            </mesh>
            {/*Floor*/}
            <mesh position={[0, -1, 2.4]} rotation={[-Math.PI / 2, 0, 0]} >
                <planeGeometry args={[9, 5]}/>
                <meshStandardMaterial color={"#6c4d36"} metalness={[3]}/>
            </mesh>
            {/*Roof*/}
            <mesh position={[0, 3, 2]} rotation={[-Math.PI / 2, 3.14159, 0]} >
                <planeGeometry args={[9, 5]}/>
                <meshStandardMaterial color={"#6c4d36"} roughness={0.5} metalness={[3]}/>
            </mesh>
        </>
        
    )
}