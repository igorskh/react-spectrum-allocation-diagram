import React, { useState, useEffect } from "react";

import SubGridElements from "./SubGridElements";
import BandParams from "./BandParams";

function SubGrid({ 
    element
}) {
    const [startID, setStartID] = useState(-1);
    const [endID, setEndID] = useState(-1);
    const [isSelecting, setIsSelecting] = useState(false);

    useEffect(() => {
        if (element) {
            setStartID(0);
            if (element.step && element.length) {
                setEndID(parseInt(element.length / element.step) - 1);
            } else {
                setEndID(-1);
            }
            setIsSelecting(false);
        }
    }, [element]);

    return <div className="sg-detail-subgrid">
        <SubGridElements
            startID={startID}
            endID={endID}
            onMouseDown={(id) => {
                setStartID(id);
                setEndID();
                setIsSelecting(true);
            }}
            onMouseUp={(id) => {
                setEndID(id);
                setIsSelecting(false);
            }}
            onMouseMove={(id) => {
                if (isSelecting) {
                    setEndID(id);
                }
            }}
            step={element["step"]}
            bw={element["length"]} />
        {startID >= 0 && endID >= 0 &&
            <BandParams
                startID={startID}
                endID={endID}
                element={element} />}
    </div>;
}
export default SubGrid;