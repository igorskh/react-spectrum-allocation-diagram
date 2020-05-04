import React, { useState } from "react";

import SpectrumMap from "../components/spectrum_map/SpectrumMap";
import spectrumMap from "../data/spectrum_map.json";

import { DEFAULT_SPAN, BUCKET_PATH } from "../config";

function SpectrumMapPage() {
    const [scrollValue, setScrollValue] = useState();

    return <>
        <h1>Spectrum Map</h1>

        <h2>Antenna: VERT900</h2>
        <SpectrumMap
            id="vert900"
            span={DEFAULT_SPAN}
            onScroll={v => setScrollValue(v)}
            spectrumMap={spectrumMap}
            minimapPath={BUCKET_PATH + "/vert900/minimap.png"}
            path={BUCKET_PATH + "/vert900/waterfall"}
        />
        <h2>Antenna: VERT2450</h2>
        <SpectrumMap
            id="vert2450"
            span={DEFAULT_SPAN}
            scrollValue={scrollValue}
            spectrumMap={spectrumMap}
            minimapPath={BUCKET_PATH + "/vert2450/minimap.png"}
            path={BUCKET_PATH + "/vert2450/waterfall"}
        />
    </>;
}

export default SpectrumMapPage;