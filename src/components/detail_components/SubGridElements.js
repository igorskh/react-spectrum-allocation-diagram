import React from "react";

function SubGridElements({
    startID, endID, step, bw,
    onMouseDown, onMouseUp, onMouseMove
}) {
    if (!step || !bw) {
        return <></>;
    }
    const onTouchMoveEnd = (e) => {
        const endTarget = document.elementFromPoint(
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY
        );
        try {
            onMouseUp(parseInt(endTarget.getAttribute("tag")));
        } catch {
            console.error("Unable to detect end target of onTouchMoveEnd", endTarget);
        }
    };

    const elements = [];
    for (let i = 0; i < parseInt(bw / step); i++) {
        const selected = i >= startID && i <= endID;
        elements.push(
            <div
                onTouchStart={() => onMouseDown(i)}
                onTouchEnd={onTouchMoveEnd}
                onTouchMove={onTouchMoveEnd}

                onMouseDown={() => onMouseDown(i)}
                onMouseUp={() => onMouseUp(i)}
                onMouseMove={() => onMouseMove(i)}
                className={`sg-subgrid-element ${selected ? "selected" : ""}`}
                key={`sg-subgrid-${i}`}
                tag={i}>
                {step}
            </div>
        );
    }
    return <div className="sg-subgrid">
        {elements}
    </div>;
};

export default SubGridElements;