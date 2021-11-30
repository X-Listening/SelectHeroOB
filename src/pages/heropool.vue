<template>
  <div class="heropool">
    <ul class="itemize">
      <li @click="tanke">坦克</li>
      <li @click="zhanshi">战士</li>
      <li @click="fashi">法师</li>
      <li @click="cike">刺客</li>
      <li @click="sheshou">射手</li>
      <li @click="fuzhu">辅助</li>
    </ul>
    <div class="items">
      <div class="listarray" v-if="flag === 1">
        <div class="list" v-for="value in tankehero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
      <div class="listarray" v-if="flag === 2">
        <div class="list" v-for="value in zhanshihero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
      <div class="listarray" v-if="flag === 3">
        <div class="list" v-for="value in fashihero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
      <div class="listarray" v-if="flag === 4">
        <div class="list" v-for="value in cikehero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
      <div class="listarray" v-if="flag === 5">
        <div class="list" v-for="value in sheshouhero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
      <div class="listarray" v-if="flag === 6">
        <div class="list" v-for="value in fuzhuhero" :key="value.name">
          <img :src="'http://127.0.0.1:5500/json/' + value.url" alt="" />
          <div>{{ value.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from "../api/index";
export default {
  name: "heropool",
  data() {
    return {
      flag: 1, //1：代表坦克，2：代表战士，3：代表法术，4：代表刺客，5：代表射手，6；代表辅助
      tankehero: [],
      zhanshihero: [],
      fashihero: [],
      cikehero: [],
      sheshouhero: [],
      fuzhuhero: [],
    };
  },
  mounted() {
    getData()
      .then((res) => {
        if (this.flag === 1) {
          for (let i = 0; i < res.data.tanke.length; i++) {
            this.tankehero.push(res.data.tanke[i]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    changeList() {
      getData()
        .then((res) => {
          if (this.flag === 1) {
            for (let i = 0; i < res.data.tanke.length; i++) {
              if (this.tankehero.length < res.data.tanke.length) {
                this.tankehero.push(res.data.tanke[i]);
              }
            }
          }
          if (this.flag === 2) {
            for (let i = 0; i < res.data.zhanshi.length; i++) {
              if (this.zhanshihero.length < res.data.zhanshi.length) {
                this.zhanshihero.push(res.data.zhanshi[i]);
              }
            }
          }
          if (this.flag === 3) {
            for (let i = 0; i < res.data.fashi.length; i++) {
              if (this.fashihero.length < res.data.fashi.length) {
                this.fashihero.push(res.data.fashi[i]);
              }
            }
          }
          if (this.flag === 4) {
            for (let i = 0; i < res.data.cike.length; i++) {
              if (this.cikehero.length < res.data.cike.length) {
                this.cikehero.push(res.data.cike[i]);
              }
            }
          }
          if (this.flag === 5) {
            for (let i = 0; i < res.data.sheshou.length; i++) {
              if (this.sheshouhero.length < res.data.sheshou.length) {
                this.sheshouhero.push(res.data.sheshou[i]);
              }
            }
          }
          if (this.flag === 6) {
            for (let i = 0; i < res.data.fuzhu.length; i++) {
              if (this.fuzhuhero.length < res.data.fuzhu.length) {
                this.fuzhuhero.push(res.data.fuzhu[i]);
              }
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    tanke() {
      if (this.flag != 1) {
        this.flag = 1;
        this.changeList();
      }
    },
    zhanshi() {
      this.flag = 2;
      this.changeList();
    },
    fashi() {
      this.flag = 3;
      this.changeList();
    },
    cike() {
      this.flag = 4;
      this.changeList();
    },
    sheshou() {
      this.flag = 5;
      this.changeList();
    },
    fuzhu() {
      this.flag = 6;
      this.changeList();
    },
  },
};
</script>
<style scoped>
.heropool {
  width: 660px;
  height: 330px;
  border: 1px solid #333;
}
ul.itemize {
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
img {
  width: 100%;
  height: 100%;
}
.itemize li {
  width: 107px;
  height: 45px;
  float: left;
  background: #ddd;
  line-height: 45px;
  margin-left: 2px;
  cursor: pointer;
}
.items {
  width: 100%;
  height: 270px;
  margin-top: 5px;
  border: 1px solid #ddd;
}
.active {
  color: #f00;
}
.listarray {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: scroll;
}
.list {
  width: 50px;
  height: 50px;
  margin: 19px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  font-family: "微软雅黑";
  border: 1px solid #f00;
}
</style>