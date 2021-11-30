<template>
  <div class="red">
    <ul class="list">
      <li>
        <div class="icon"><img src="../assets/heroimg/106.jpg" alt="" /></div>
        <span>玩家6</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家7</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家8</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家9</span>
      </li>
      <li>
        <div class="icon"></div>
        <span>玩家10</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "red",
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
  flex-direction: row-reverse;
  border: 1px solid #333;
}
li .icon {
  width: 55px;
  height: 55px;
  border: 1px solid #f00;
}
li span {
  margin-right: 5px;
}
img{
    width: 100%;
    height: 100%;
}
.red {
  text-align: right;
  width: 170px;
  height: 335px;
  border: 1px solid #333;
}
</style>