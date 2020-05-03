import React from "react";

function SubGridElements({
    startID, endID, step, bw,
    onMouseDown, onMouseUp, onMouseMove
}) {
    if (!step || !bw) {
        return <></>;
    }

    const elements = [];
    for (let i = 0; i < parseInt(bw / step); i++) {
        const selected = i >= startID && i <= endID;
        elements.push(
            <div
                onMouseDown={() => onMouseDown(i)}
                onMouseUp={() => onMouseUp(i)}
                onMouseMove={() => onMouseMove(i)}
                className={`sg-subgrid-element ${selected ? "selected" : ""}`}
                key={`sg-subgrid-${i}`}>
                {step}
            </div>
        );
    }
    return <div className="sg-subgrid">
        {elements}
    </div>;
};

export default SubGridElements;