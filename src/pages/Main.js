import React, { useState } from "react";
import SpectrumGrid from "../components/SpectrumGrid";
import SpectrumGridDetail from "../components/SpectrumGridDetail";

import data from "../data/grid_with_bands.json";

function Main() {
    const [elementID, setElementID] = useState();

    return <>
        <h1>Interactive Germany Spectrum Allocation Diagram</h1>
        <SpectrumGrid
            onElementClick={(id) => setElementID(id)}
            selectedItemID={elementID}
            data={data}
        />

        <SpectrumGridDetail element={data[elementID]} />
        <div>
            References:
            <ol>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.bundesnetzagentur.de/SharedDocs/Downloads/EN/Areas/Telecommunications/Companies/TelecomRegulation/FrequencyManagement/ElectronicCommunicationsServices/FrequencyAward2018/20200128_SpectrumDiagram_pdf.pdf?__blob=publicationFile&v=1">
                        Spectrum diagram for Germany - Bundesnetzagentur
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.3gpp.org/dynareport/36101.htm">
                        E-UTRA Bands - 3GPP TS 36.101
                    </a>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.3gpp.org/DynaReport/38101-1.htm">
                        NR Bands - 3GPP TS 38.101-1
                    </a>
                </li>
            </ol>
        </div>
    </>;
}

export default Main;