import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr } from '@react-three/drei'

import Scene from './Scene/Scene.jsx'
import './SceneDisplay.css'

import { useContext } from 'react'
import { SceneContext } from '/src/SceneContext.jsx'

export default function SceneDisplay() {
    const { buildingID, setBuildingID } = useContext(SceneContext)
    return (
        <div className="scene-display">
            <Canvas flat gl={{ antialias: false }} dpr={[0.5, 2.5]} camera={{ fov: 60, position: [0, 3, 0] }}>{/* 'flat' required so text white. Tonemapping issue */}
                <AdaptiveDpr pixelated />
                <Scene targetBuildingID={buildingID} setTargetBuildingID={setBuildingID} />
            </Canvas>
        </div>
    )
}