import { useThree } from "@react-three/fiber";

export function CameraSetup() {
    const { camera } = useThree()

    camera.lookAt(0, -0.6, 0)
    camera.position.set(0, 1, 5.5)

    return null
}