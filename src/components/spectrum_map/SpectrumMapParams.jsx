import React from "react";

function SpectrumMapParams({ 
    imgSize, span, params, freqRes, sweepTime 
}) {
    if (!imgSize && !params && !span) {
        return <></>;
    }
    return <div>
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
                    Center {params.cf} MHz
                </span>
                <span>
                    Stop {params.stop} MHz
                </span>
                <span>
                    Resolution {freqRes} kHz
                </span>
                <br/>
                <span>
                    Sweep Time {sweepTime} ms
                </span>
            </div>
        </div>

        <div className="right-border" style={{
            left: imgSize.width,
            height: imgSize.height + 40
        }}>
        </div>
    </div>;
}

export default SpectrumMapParams;