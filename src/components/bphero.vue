<template>
  <div class="banpick">
    <div class="selfban style">
      <div class="circle">
        <img src="../assets/heroimg/106.jpg" alt="">
      </div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div class="time">30</div>
    <div class="content">请<span class="team">蓝色方</span>禁英雄</div>
    <div class="time">30</div>
    <div class="otherban style">
      <div class="circle"><img src="../assets/heroimg/106.jpg" alt=""></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bphero",
  data() {
    return {};
  },

  components: {},
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.banpick {
  width: 1000px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
}
.style,
.content {
  width: 300px;
  height: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .team{
    color: #00f;
    font-weight: bold;
}
.circle {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
}
.selfban .circle {
  border: 1px solid #09f;
}
.otherban .circle {
  border: 1px solid #f00;
}
</style>