<template>
  <div ref="outerContainer">
    <div id="container"></div>
  </div>
</template>
<script>
import {main} from "./logic/main"
import Konva from "konva";

export default {
  name: "AppHocBeaconMap",
  mounted() {
    let width = this.$refs.outerContainer.offsetWidth;
    let height = this.$refs.outerContainer.offsetHeight;
    let stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
      draggable: true
    });
    main(stage);
  }
}
</script>
