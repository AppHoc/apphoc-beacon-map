import {layerManager} from "./layers/layerManager";
import {enableZoom} from "../zoom";

export let stage;
export let imageURL;
export let beaconArray;

export function main(pStage, pImageURL, pBeaconArray) {
    stage = pStage;
    imageURL = pImageURL;
    beaconArray = pBeaconArray;

    layerManager();
    enableZoom();
}
