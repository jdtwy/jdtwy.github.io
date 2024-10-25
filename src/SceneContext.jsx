/* 
                    -- SceneContext -- 
 Provides global property/state access to any component in the DOM 
 where that component is a child of '<SceneContextProvider>'. 
 Avoids 'prop-drilling' through multiple children.

 The <SceneContextProvider> component wraps the <App> component in 
 main.jsx, giving property access to all children. 

 Properties can be selectively exposed as needed with useContext().
*/

import { createContext, useState, useEffect } from 'react';

// import splatData from "../public/building_info.json"

export const SceneContext = createContext();

export function SceneContextProvider({ children }) {

    const [infoBoxVisible, setInfoBoxVisible] = useState(false)
    const [showListView, setShowListView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [splatData, setSplatData] = useState([]);
    const [buildingID, setBuildingID] = useState(1);

    /*  -- Load the JSON data
        If this implementation needs to be changed, make sure
        setSplatData() is used to populate splatData, and isLoading 
        is correctly updated when data loading completes or fails.*/
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch('modelData.json')
                    .then(res => res.json())
                    .then(data => {
                        // const parseData = data.map(item => ({
                        //     ...item,
                        //     pos: JSON.parse(item.pos),
                        //     rot: JSON.parse(item.rot)
                        // }))
                        setSplatData(data);
                    });
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching model data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <SceneContext.Provider value={{
            isLoading,
            splatData,
            buildingID,
            setBuildingID,
            infoBoxVisible,
            setInfoBoxVisible,
            showListView,
            setShowListView
        }}>
            {children}
        </SceneContext.Provider>
    );
}