import './MapTabButton.css'
import { useState } from 'react'

export default function MapTabButton({ onClick }) {
    const tabOpenImg = "/src/images/mapTabOpen.svg"

    const onClickInternal = () => {
        onClick()
    }

    return (
        <div className="RoundedBox FlexRow FlexItem_Fixed" id="MapTabButton" onClick={onClickInternal}>
            <h1>View Map</h1>
            <img src={tabOpenImg} alt="MAP" />
        </div>
    )
}