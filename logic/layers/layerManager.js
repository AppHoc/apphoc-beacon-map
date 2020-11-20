import Konva from "konva";
import {stage} from "../main";
import {main as initImageLayer} from "./imageLayer";
import {main as initBeaconLayer} from "./beaconLayer";
import {main as initUserLayer} from "./userLayer";

export let imageLayer;
export let beaconLayer;

export function layerManager() {
    imageLayer = new Konva.Layer();
    stage.add(imageLayer);
    initImageLayer();

    beaconLayer = new Konva.Layer();
    stage.add(beaconLayer);
    initBeaconLayer();

    initUserLayer()

}
