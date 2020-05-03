import React, { useState } from "react";
import SpectrumGrid from "../components/SpectrumGrid";
import SpectrumGridDetail from "../components/SpectrumGridDetail";

import data from "../data/grid_with_bands.json";
import Footer from "../components/Footer";

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

        <Footer />
    </>;
}

export default Main;