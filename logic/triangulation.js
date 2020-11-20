import {beaconArray} from "./main";
import {setUserLocation} from "./layers/userLayer";

export function calculateDistance() {

    let beaconPower = [...beaconArray];

    beaconPower = beaconPower.map(b =>  {
        return {
            ...b, power: b.power || 0
        }
    });

    let sum = beaconPower.map(b => b.power).reduce((a, b) => a + b);

    beaconPower = beaconPower.map(b => {
        return {
            ...b, power: b.power / sum
        }
    })

    let newX = 0, newY = 0;

    for (let beacon of beaconPower) {
        newX += beacon.x * beacon.power;
        newY += beacon.y * beacon.power;
    }

    setUserLocation(newX, newY);

}
