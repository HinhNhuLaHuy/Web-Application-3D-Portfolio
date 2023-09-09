import {Canvas} from "@react-three/fiber";
import React, {Suspense, useEffect, useState} from "react";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
    const computer = useGLTF("./macbook/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={15} groundColor='black'/>
            <pointLight intensity={700} position={[-10, 18, -5]}/>
            <spotLight position={[-50, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
            <primitive object={computer.scene} scale={isMobile ? 1 : 2.5}
                       position={isMobile ? [-0.75, -2.5, -1.25] : [-1, -3.5, -1.5]} rotation={[0, 8, 0]}/>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas className="-ml-20" frameloop='demand' shadows dpr={[1, 2]} camera={{position: [20, 3, 5], fov: 25}}
                gl={{preserveDrawingBuffer: true}}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
                <Computers isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;