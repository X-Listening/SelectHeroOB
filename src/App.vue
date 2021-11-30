<template>
  <div class="wrap">
    <h1>
      <span class="teamA">blue team</span> vs
      <span class="teamB">red team</span>
    </h1>
    <Bphero></Bphero>
    <SelectHero></SelectHero>
  </div>
</template>

<script>
import Bphero from "./components/bphero";
import SelectHero from "./components/selecthero";

export default {
  name: "App",
  components: {
    Bphero,
    SelectHero,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 35px;
  box-sizing: border-box;
}
.wrap {
  width: 1000px;
  min-height: 550px;
  border: 1px solid #333;
  margin: 0 auto;
}
.teamA {
  color: #00f;
}
.teamB {
  color: #f00;
}
</style>
