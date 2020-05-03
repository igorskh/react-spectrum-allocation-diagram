import React from "react";

function BandParams({ element, startID, endID }) {
    const nBlocks = parseInt(element["length"] / element["step"]);
    let start = element["start"];
    let end = element["end"];
    if (element["step"]) {
        start += startID * element["step"];
        end -= (nBlocks - endID - 1) * element["step"];
    }
    const center = (start + end) / 2;
    const span = end - start;

    return <div className="sg-detail-params">
        <div className="sg-detail-param">
            <h4>Start</h4>
            <p>{start}</p>
        </div>
        <div className="sg-detail-param">
            <h4>Center</h4>
            <p>{center}</p>
        </div>
        <div className="sg-detail-param">
            <h4>End</h4>
            <p>{end}</p>
        </div>
        <div className="sg-detail-param">
            <h4>Span</h4>
            <p>{span}</p>
        </div>
    </div>;
};

export default BandParams;