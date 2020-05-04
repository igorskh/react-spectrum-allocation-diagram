import React, { useEffect, useRef, useState } from "react";

import "./SpectrumMap.scss";
import SpectrumMiniMap from "./SpectrumMiniMap";
import SpectrumTile from "./SpectrumTile";
import SpectrumMapParams from "./SpectrumMapParams";

const EPS = 100;
const roundToEps = (v, eps) => {
    return Math.round(v * eps) / eps;
};

function SpectrumMap({
    id,
    spectrumMap,
    path,
    onScroll,
    scrollValue,
    span,
    minimapPath
}) {
    const firstImage = useRef();
    const canvas = useRef();
    const [currentImg, setCurrentImg] = useState([0, 0.0, 0.0]);
    const [imgSize, setImgSize] = useState();
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
    const miniMapCanvasRef = useRef();
    const [range, setRange] = useState([0, 0]);
    const [params, setParams] = useState();

    useEffect(() => {
    }, [spectrumMap, firstImage]);

    useEffect(() => {
        if (typeof (scrollValue) !== "undefined") {
            canvas.current.scrollLeft = scrollValue;
        }
    }, [scrollValue]);

    useEffect(() => {
        if (imgSize) {
            const canvasCurrentWidth = canvas.current.offsetWidth;
            const imgPerCanvas = Math.ceil(canvasCurrentWidth / imgSize.width);
            setRange([0, imgPerCanvas + 1]);
        }
    }, [imgSize]);

    useEffect(() => {
        if (onScroll) {
            onScroll(currentScroll);
        }

        if (!canvasWidth || !imgSize) {
            return;
        }

        const canvasCurrentWidth = canvas.current.offsetWidth;
        const nOffset = Math.round(currentScroll / canvasCurrentWidth);
        const imgPerCanvas = Math.ceil(canvasCurrentWidth / imgSize.width);
        const nHide = currentScroll > 0 ? Math.floor(currentScroll / imgSize.width) - 1 : 0;

        const focusedImgPos = currentScroll / imgSize.width;
        const imgID = focusedImgPos > 0 ? Math.floor(focusedImgPos) : 0;
        const pos = focusedImgPos % 1;

        setCurrentImg([
            imgID,
            pos >= 0 ? pos : 0,
            currentScroll > 0 ? currentScroll / canvasWidth : 0.0
        ]);
        setRange([nHide, (nOffset + 1) * imgPerCanvas]);
    }, [spectrumMap, canvasWidth, currentScroll, onScroll, canvas, imgSize, id]);

    useEffect(() => {
        if (!spectrumMap) {
            return;
        }
        let startPos = spectrumMap.data[currentImg[0]].start;
        startPos += span * currentImg[1];
        setParams({
            start: roundToEps(startPos, EPS),
            stop: roundToEps(startPos + span, EPS),
            cf: roundToEps(startPos + span / 2, EPS)
        });
    }, [spectrumMap, currentImg, span]);

    return <div style={{ position: "relative" }}>
        {minimapPath &&
            <div
                ref={miniMapCanvasRef}
                className="spectrum-mini-map-canvas">
                <SpectrumMiniMap
                    miniMapCanvasRef={miniMapCanvasRef}
                    onLocSelected={loc => canvas.current.scrollLeft = canvasWidth * loc}
                    minimapPath={minimapPath}
                    currentLoc={currentImg[2]}
                />
            </div>}
        <div style={{
            position: "relative"
        }}>
            {imgSize && params &&
                <SpectrumMapParams
                    imgSize={imgSize}
                    params={params}
                    span={span} />
            }
            <div
                style={{
                    minWidth: imgSize ? imgSize.width : ""
                }}
                ref={canvas}
                className="spectrum-map-canvas"
                onScroll={(e) => setCurrentScroll(e.currentTarget.scrollLeft)}>
                <div className="spectrum-map"
                    style={{
                        width: canvasWidth
                    }}
                >
                    {canvasWidth === 0 &&
                        <img
                            onLoad={(e) => {
                                setImgSize({
                                    width: e.currentTarget.width,
                                    height: e.currentTarget.height
                                });
                                setCanvasWidth(e.currentTarget.width * (spectrumMap.data.length + 1));
                            }}
                            ref={firstImage}
                            alt="map_tile"
                            src={`${path}/${spectrumMap.data[0].prefix}.png`}
                        />
                    }
                    {imgSize && canvasWidth > 0 &&
                        spectrumMap.data.map((e, i) => {
                            return <SpectrumTile
                                show={i <= range[1] && i >= range[0]}
                                imgSize={imgSize}
                                key={e.start}
                                path={path}
                                data={e}
                            />;
                        })
                    }
                </div>
            </div>
        </div>
    </div>;
}

export default SpectrumMap;