import React from "react";

import "./SpectrumGridDetail.scss";

import BandsTable from "./detail_components/BandsTable";
import SubGrid from "./detail_components/SubGrid";

function SpectrumGridDetail({ element }) {
    if (!element) {
        return <center>
            <h2>Select a block above to view details</h2>
        </center>;
    }
    const convertBands = (b, bands, dlUl) => {
        if (b) {
            b.forEach(e => {
                const band = e["band"];
                if (bands[band]) {
                    bands[band]["dl_ul"] += "/" + dlUl;
                } else {
                    bands[band] = e;
                    bands[band]["dl_ul"] = dlUl;
                }
            });
        }
    };
    const bands = {};
    convertBands(element["dl_bands"], bands, "DL");
    convertBands(element["ul_bands"], bands, "UL");

    return <div className="sg-detail">
        <h2>Selected Range</h2>
        <SubGrid element={element} />
        <BandsTable bands={bands} />
    </div>;
}

export default SpectrumGridDetail;