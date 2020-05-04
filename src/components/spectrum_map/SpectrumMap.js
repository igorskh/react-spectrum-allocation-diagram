import React, { useEffect, useRef, useState } from "react";

import { Spinner } from "react-bootstrap";

import "./SpectrumMap.scss";

const eps = 100;

function SpectrumTile({ path, data, imgSize, show }) {
    const [loading, setLoading] = useState(true);

    return <div style={{
        float: "left",
        position: "relative",
        overflowY: "hidden",
        width: imgSize.width,
        height: imgSize.height
    }}>
        {show && <>
            <div style={{
                left: 0
            }}
                className="freq-marker">
                {data.start} MHz
                </div>

            <div style={{
                left: imgSize.width / 2
            }}
                className="freq-marker">
                {data.cf} MHz
                </div>
            <img
                onLoad={() => setLoading(false)}
                style={{ display: loading ? "none" : "" }}
                alt="map_tile"
                src={`${path}/${data.prefix}.png`}
            />
        </>
        }
        {show && loading && <Spinner animation="border" size="lg">
            <span className="sr-only">Loading...</span>
        </Spinner>
        }

    </div >;
}

function SpectrumMap({
    id, spectrumMap, path, onScroll, scrollValue, span
}) {
    const firstImage = useRef();
    const canvas = useRef();
    const [currentImg, setCurrentImg] = useState([0, 0.0]);
    const [imgSize, setImgSize] = useState();
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
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

        setCurrentImg([imgID, pos >= 0 ? pos : 0]);
        setRange([nHide, (nOffset + 1) * imgPerCanvas]);
    }, [spectrumMap, canvasWidth, currentScroll, onScroll, canvas, imgSize, id]);

    useEffect(() => {
        if (!spectrumMap) {
            return;
        }
        console.log(currentImg);
        let startPos = spectrumMap.data[currentImg[0]].start;
        startPos += span * currentImg[1];
        setParams({
            start: Math.round(startPos * eps) / eps,
            stop: Math.round((startPos + span) * eps) / eps,
            cf: Math.round((startPos + span / 2) * eps) / eps
        });
    }, [spectrumMap, currentImg, span]);

    return <div style={{ position: "relative" }}>

        {imgSize && params &&
            <>
                <div style={{
                    width: imgSize.width,
                    height: imgSize.height + 40
                }}
                    className="spectrum-map-window">
                    <div className="spectrum-params">
                        <span>
                            Span {span} MHz
                    </span>
                        <span>
                            Start {params.start} MHz
                    </span>
                        <span>
                            CF {params.cf} MHz
                    </span>
                        <span>
                            Stop {params.stop} MHz
                    </span>
                    </div>
                </div>

                <div className="right-border" style={{
                    left: imgSize.width,
                    height: imgSize.height + 40
                }}>
                </div>
            </>
        }
        <div
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
    </div>;
}

export default SpectrumMap;