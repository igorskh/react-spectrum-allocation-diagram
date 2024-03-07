import React from "react";

import SpectrumGridElement from "./SpectrumGridElement";

import "./SpectrumGrid.scss";

function SpectrumGrid({ data, onElementClick, selectedItemID }) {
    return <div className="sg-grid-container">
        <div className="sg-grid">
            {data.map((e, i) => (
                <SpectrumGridElement
                    id={i}
                    key={i}
                    selected={i === selectedItemID}
                    element={e}
                    onClick={onElementClick}
                />
            ))}
        </div>
    </div>;
}

export default SpectrumGrid;