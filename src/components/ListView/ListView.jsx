import { useContext } from 'react';
import ListItem from './ListItem/ListItem.jsx';
import './ListView.css'
import { SceneContext } from '/src/SceneContext.jsx'

export default function ListContainer({ items, onChildClick }) {
    const { splatData, setBuildingID } = useContext(SceneContext)

    const handleItemClick = (item) => {
        setBuildingID(item)
    };

    return (
        <div className="FlexColumn ListView">
            {splatData.map((item, index) => (
                <ListItem
                    key={index}
                    label={item.name}
                    onClick={() => handleItemClick(item.id)}
                />
            ))}
        </div>
    );
}