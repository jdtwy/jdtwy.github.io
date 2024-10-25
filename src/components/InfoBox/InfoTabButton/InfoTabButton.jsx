import './InfoTabButton.css'
import { useState, useEffect, useContext } from 'react'
import { SceneContext } from '../../../SceneContext'

export default function InfoTabButton({ onClick }) {
    const { infoBoxVisible } = useContext(SceneContext)
    const tabOpenImg = "/src/images/infoTabOpen.svg"
    const tabCloseImg = "src/images/infoTabClose.svg"

    const [imgSource, setImgSource] = useState()
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        if(infoBoxVisible){
            setImgSource(tabCloseImg)
        } else {
            setImgSource(tabOpenImg)
        }
    })

    //Toggle image in box on click, propagate click upwards
    const onClickInternal = () => {
        if (toggle) {
            setImgSource(tabOpenImg)
        } else {
            setImgSource(tabCloseImg)
        }
        setToggle(!toggle)
        onClick()
    }

    return (
        <div className="RoundedBox" id="InfoTabButton" onClick={onClickInternal}>
            <img src={imgSource}
                alt="INFO" />
        </div>
    )
}