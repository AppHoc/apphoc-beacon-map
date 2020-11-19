import {beaconLayer} from "./layerManager";
import {beaconArray} from "../main";

export function main() {
    let layer = beaconLayer;

    for (let beacon of beaconArray) {
        let konvaBeacon = new Konva.Circle({
            radius: 10,
            fill: "white",
            x: beacon.x,
            y: beacon.y
        });
        konvaBeacon.uuid = beacon.uuid;

        layer.add(konvaBeacon);
    }
    layer.batchDraw();
}
