import React, { useState } from "react";

import { Spinner } from "react-bootstrap";

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
            <span className="sr-only">
                Loading...
            </span>
        </Spinner>
        }

    </div >;
}

export default SpectrumTile;