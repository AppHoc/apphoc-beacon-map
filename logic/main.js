import {layerManager} from "./layers/layerManager";

export let stage;

export function main(pStage) {
    stage = pStage;
    layerManager();
}
