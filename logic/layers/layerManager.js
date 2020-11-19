import Konva from "konva";
import {beaconArray, stage} from "../main";
import {main as initImageLayer} from "./imageLayer";
import {main as initBeaconLayer} from "./beaconLayer";

export let imageLayer;
export let beaconLayer;
let circle2;
let circle;

export function layerManager() {
    imageLayer = new Konva.Layer();
    stage.add(imageLayer);
    initImageLayer();

    beaconLayer = new Konva.Layer();
    stage.add(beaconLayer);
    initBeaconLayer();

    circle = new Konva.Circle({
        radius: 40,
        x: 0,
        y: 0,
        fill: "blue",
        draggable: true
    })

    circle2 = new Konva.Circle({
        radius: 20,
        x: 0,
        y: 0,
        fill: "red"
    })

    circle.on("dragend", () => {
        calculateDistance();
    })

    beaconLayer.add(circle2);
}

export function calculateDistance() {
    let newX = 0;
    let newY = 0;

    // let x = circle.x(), y = circle.y();

    let beaconPower = [...beaconArray];


    /*for (let beacon of beaconPower) {
        let max = 200;
        let power;
        power = 1 - Math.sqrt(Math.pow(x - beacon.x, 2) + Math.pow(y - beacon.y, 2)) / 400;
        power = power < 0 ? 0 : power;
        beacon.power = power;
    }*/

    beaconPower = beaconPower.map(b =>  {
        return {
            ...b, power: b.power || 0
        }
    });

    let sum = beaconPower.map(b => b.power).reduce((a, b) => a + b);

    alert = () => {};

    alert(beaconPower.map(b => b.power))

    alert(sum)

    beaconPower = beaconPower.map(b => {
        return {
            ...b, power: b.power / sum
        }
    })

    alert(beaconPower.map(b => b.power));

    for (let beacon of beaconPower) {
        newX += beacon.x * beacon.power;
        newY += beacon.y * beacon.power;
    }

    circle2.x(newX);
    circle2.y(newY)

    beaconLayer.batchDraw();
}
