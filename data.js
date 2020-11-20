import AppHoc from "apphoc-js-sdk";
import {calculateDistance} from "./logic/triangulation";
import {beaconArray} from "./logic/main";

AppHoc.setCallbackMethod(beacon => {
    beaconArray.filter(b => beacon.uuid.toLowerCase() === b.uuid.toLowerCase())[0].power = -1 / (beacon.rssi + 45);
    calculateDistance();
})
