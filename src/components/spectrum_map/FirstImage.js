import React from "react";

function FirstImage({ onImageHasSize, src }) {
    return <img
        alt="map_tile"
        onLoad={(e) => {
            onImageHasSize({
                width: e.currentTarget.width,
                height: e.currentTarget.height
            });
        }}
        src={src}
    />;
}

export default FirstImage;