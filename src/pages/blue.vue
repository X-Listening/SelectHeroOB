<template>
  <div class="blue">
    <ul class="list">
      <li>
        <div class="icon"><img src="../assets/heroimg/106.jpg" alt="" /></div>
        <span>玩家1</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家2</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家3</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家4</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家5</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "blue",
};
</script>
<style scoped>
ul {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  border: 1px solid #333;
}
li .icon {
  width: 55px;
  height: 55px;
  border: 1px solid #00f;
}
li span {
  margin-left: 5px;
}
img {
  width: 100%;
  height: 100%;
}
.blue {
  text-align: left;
  width: 170px;
  height: 335px;
  border: 1px solid #333;
}
</style>