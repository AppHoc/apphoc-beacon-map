import {beaconLayer} from "./layerManager";

let layer;
let user;

export function main() {
    layer = beaconLayer;

     user = new Konva.Circle({
        radius: 20,
        fill: "red",
    })

    layer.add(user);
}

export function setUserLocation(x, y) {
    user.x(x);
    user.y(y);

    layer.batchDraw();
}
