import React, { useState } from "react";

import SpectrumMap from "../components/spectrum_map/SpectrumMap";
import spectrumMap from "../data/spectrum_map.json";

import { DEFAULT_SPAN, BUCKET_PATH } from "../config";

function SpectrumMapPage() {
    const [scrollValue, setScrollValue] = useState();
    const maps = [
        {
            title: "Antenna VERT900",
            id: "vert900",
            span: DEFAULT_SPAN,
            spectrumMap,
            minimapPath: BUCKET_PATH + "/vert900/minimap.png",
            path: BUCKET_PATH + "/vert900/waterfall",
            onScroll: true
        },
        {
            title: "Antenna VERT2450",
            id: "vert2450",
            span: DEFAULT_SPAN,
            spectrumMap,
            minimapPath: BUCKET_PATH + "/vert2450/minimap.png",
            path: BUCKET_PATH + "/vert2450/waterfall",
            scrollValue: true
        }
    ];

    return <>
        <h1>Spectrum Map</h1>
        {maps.map(e => {
            return <SpectrumMap
                key={e.id}
                id={e.id}
                title={e.title}
                span={e.span}
                onScroll={v => e.onScroll ? setScrollValue(v) : null}
                scrollValue={e.scrollValue ? scrollValue : null}
                spectrumMap={e.spectrumMap}
                minimapPath={e.minimapPath}
                path={e.path}
            />;
        })}
    </>;
}

export default SpectrumMapPage;