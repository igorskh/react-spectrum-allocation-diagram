import React, { useEffect, useRef, useState } from "react";

function SpectrumMiniMap({ currentLoc, minimapPath, onLocSelected, miniMapCanvasRef }) {
    const miniMapRef = useRef();
    const [loc, setLoc] = useState(0);

    useEffect(() => {
        setLoc(miniMapRef.current.offsetWidth * currentLoc);
    }, [currentLoc]);

    return <div
        onClick={e => onLocSelected((e.clientX + miniMapCanvasRef.current.scrollLeft - 40) / miniMapRef.current.offsetWidth)}
        ref={miniMapCanvasRef} className="spectrum-mini-map">
        <div
            style={{
                left: loc
            }}
            className="spectrum-mini-map-loc"></div>
        <img
            ref={miniMapRef}
            alt="minimap"
            src={minimapPath} />
    </div>;
}

export default SpectrumMiniMap;