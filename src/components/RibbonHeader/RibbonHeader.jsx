import './RibbonHeader.css'

export default function RibbonHeader() {
    return (
        <div className="RoundedBox FlexItem_Fixed" id="RibbonHeader">
            <a href="https://www.latrobe.edu.au/research/centres/health/aiot">
                <img src="/src/images/latrobe_cisco_icon.png" alt="Latrobe Cisco Centre" />
            </a>
            <h1>Latrobe 3D Campus Viewer</h1>
        </div>
    )
}