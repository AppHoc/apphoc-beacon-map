<template>
  <div ref="outerContainer">
    <div id="container"></div>
  </div>
</template>
<script>
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
  }
}
</script>
