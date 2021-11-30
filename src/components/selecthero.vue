<template>
  <div class="selecthero">
    <Blue></Blue>
    <Heropool></Heropool>
    <Red></Red>
  </div>
</template>
<script>
import Blue from "../pages/blue";
import Heropool from "../pages/heropool";
import Red from "../pages/red";
export default {
  name: "selecthero",
  data() {
    return {};
  },
  components: {
    Blue,
    Heropool,
    Red,
  },
};
</script>
<style scoped>
.selecthero {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
</style>