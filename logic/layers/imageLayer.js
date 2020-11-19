import {imageLayer} from "./layerManager";

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
    imageObj.src = "https://mk0a2minutetabl7hq7i.kinstacdn.com/wp-content/uploads/2020/03/Dungeon-Jail-Prison-Battle-Map-Banner.jpg";
}
