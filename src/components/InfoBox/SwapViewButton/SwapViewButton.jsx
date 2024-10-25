import { useState, useEffect, useContext } from 'react';
import './SwapViewButton.css'
import { SceneContext } from '../../../SceneContext';

export default function SwapViewButton({ onClick }) {
    const { showListView } = useContext(SceneContext)
    const labels = ["Show Building Information", "Show Building List"]
    const [label, setLabel] = useState(labels[0])

    useEffect(() => {
        if (showListView) {
            setLabel(labels[0])
        } else {
            setLabel(labels[1])
        }
    })

    const onClickInternal = () => {
        onClick();
    }

    return (
        <div className="SwapViewButton" onClick={onClickInternal}>
            <h4 id="Label">{label}</h4>
        </div>
    );
}