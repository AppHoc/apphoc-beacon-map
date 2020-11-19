import AppHoc from "apphoc-js-sdk";
import {beaconLayer, calculateDistance} from "./logic/layers/layerManager";
import {beaconArray} from "./logic/main";

AppHoc.setCallbackMethod(beacon => {

 alert(beacon.uuid )

    let power = beacon.rssi + 60;



    beaconArray.filter(b => beacon.uuid.toLowerCase() === b.uuid.toLowerCase())[0].power = -1 / (beacon.rssi + 45);
    //alert(beaconLayer.children.filter(konvaBeacon => konvaBeacon.uuid && beacon.uuid.toLowerCase() === konvaBeacon.uuid.toLowerCase()).length)

    calculateDistance();
})
