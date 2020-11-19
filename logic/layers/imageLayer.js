import {imageLayer} from "./layerManager";
import {imageURL} from "../main";

export function main() {
    let layer = imageLayer;

    let imageObj = new Image();
    imageObj.onload = function () {
        let image = new Konva.Image({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
            image: imageObj
        });

        layer.add(image);
        layer.batchDraw();
    };
    imageObj.src = imageURL;
}
