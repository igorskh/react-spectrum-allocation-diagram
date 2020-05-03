import React from "react";

function BandRows({ bands }) {
    const renderResult = [];
    for (let i in bands) {
        const e = bands[i];
        renderResult.push(
            <tr key={`${e["dl_ul"]}_${e["band"]}`}>
                <td>{e["band"]}</td>
                <td>{e["dl_ul"]}</td>
                <td>{e["mode"]}</td>
                <td>{e["region"]}</td>
            </tr>
        );
    }
    return <>{renderResult}</>;
};

export default BandRows;