import React from "react";

import "./SpectrumGridElement.scss";

const BREAK_POINTS = [5, 10, 20, 50, 100, 200];

const SpectrumGridElement = ({ id, element, selected, onClick }) => {
    const getBreakPointID = (len) => {
        for (let i = 0; i < BREAK_POINTS.length; i++) {
            if (len <= BREAK_POINTS[i]) {
                return i;
            }
        }
        return BREAK_POINTS.length;
    };

    return (
        <div
            className={
                `sg-grid-element 
                ${selected ? "selected" : ""}
                ${element["code"]}
                ${element["is_pause"] ? "pause" : ""}
                w${getBreakPointID(element["length"])}`
            }
            onClick={() => element["is_pause"] ? null : onClick(id)}
        >
            <div className="freq-note freq-start">
                {element["start"]}
            </div>

            <div className="freq-note freq-end">
                {element["end"]}
            </div>

            <div className="sge-title">
                {element["length"]}
            </div>
        </div>
    );
};

export default SpectrumGridElement;