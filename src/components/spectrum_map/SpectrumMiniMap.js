import React, { useEffect, useRef, useState } from "react";

import "./SpectrumMiniMap.scss";

function SpectrumMiniMap({ currentLoc, minimapPath, onLocSelected }) {
    const miniMapRef = useRef();
    const miniMapCanvasRef = useRef();
    const [loc, setLoc] = useState(0);

    useEffect(() => {
        if (miniMapRef.current) {
            const locPos = miniMapRef.current.offsetWidth * currentLoc;
            setLoc(miniMapRef.current.offsetWidth * currentLoc);
            const leftPos = miniMapCanvasRef.current.scrollLeft;
            const rightPos = leftPos + miniMapCanvasRef.current.offsetWidth;
            if (locPos < leftPos || locPos > rightPos) {
                miniMapCanvasRef.current.scrollLeft = locPos;
            }
        }
    }, [currentLoc]);

    if (!minimapPath) {
        return <></>;
    }

    return <div
        ref={miniMapCanvasRef}
        className="spectrum-mini-map-canvas">
        <div
            onClick={e =>
                onLocSelected(
                    (e.clientX + miniMapCanvasRef.current.scrollLeft - 40) / miniMapRef.current.offsetWidth
                )}
            ref={miniMapCanvasRef}
            className="spectrum-mini-map">
            <div
                style={{
                    left: loc
                }}
                className="spectrum-mini-map-loc"></div>
            <img
                ref={miniMapRef}
                alt="minimap"
                src={minimapPath} />
        </div>
    </div>;
}

export default SpectrumMiniMap;