<template>
  <el-row>
    <el-col class="list-city">
      <city-card
        @click.native="selectCity(city.name)"
        v-bind:info="city"
        v-for="city in cityModels"
        v-bind:key="city.id"
      />

      <el-card shadow="hover" :body-style="{ padding: '0px' }" class="card-add-city center-h-v">
        <div @click="openModel" class="center-h-v card-body">
          <img src="../../../assets/plus.png" width="45" alt />
        </div>
      </el-card>

      <model-add />
    </el-col>
  </el-row>
</template>

<script>
// import
import cityCard from "../weather-city-card/weather-city-card";
import modelAdd from "../../model-add-city/weather-add-city";
import { log } from "util";
import { mapState } from "vuex";

export default {
  name: "list-cities",
  components: {
    cityCard,
    modelAdd
  },
  computed: mapState(["cityModels"]),
  data() {
    return {};
  },

  methods: {
    openModel() {
      // invoke method using Vuex
      log("clicked");
      this.$store.dispatch("openModelAction", true);
    },

    openNotification() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success"
      });
    },

    selectCity(name) {
      this.$store
        .dispatch("getCityInfoByNameAction", name)
        .then(() => this.openNotification(name));
    }
  }
};
</script>

<style>
.card-body {
  height: 175px;
  width: 130px;
}

.info-w-m {
  display: flex;
  justify-content: center;
}

.image {
  width: 100%;
  height: 130px;
  display: block;
}

.search-input el-input {
  border: none;
}

.search-input {
  height: 58px;
  margin-top: 45px;
  margin-left: 50px;
}

.card-style {
  padding: "0px";
  border-radius: "20px";
}

.card-container {
  height: 100%;
  width: 100%;
  padding: 0px;
}

.continer-weather {
  padding: 50px;
  height: 800px;
  width: 100%;
}

.wather-two-section {
  height: 700px;
  width: 100%;
}

.weather-info-section {
  height: 100%;
  background-color: #100e3b;
}

.weather-city-section {
  height: 100%;
  background-color: #f2fbff;
}

.color-w {
  color: white;
}

.center {
  text-align: center;
}

.left {
  text-align: left;
}
.right {
  text-align: right;
}

.m-10 {
  margin: 10px;
}

.m-5 {
  margin: 5px;
}

.red-c {
  background: red;
}

.green-c {
  background: green;
}

.m-t-250 {
  margin-top: 150px;
}

.degree-info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 150px;
}

.degree-info span {
  font-size: 6em;
  font-family: "Montserrat", sans-serif;
}

.font-Montserrat {
  font-family: "Montserrat", sans-serif;
}

.title-forcast {
  font-size: 2em;
  margin-left: 50px;
  color: #202b5c;
}

.title-forcast p span {
  color: #100e3b;
  font-style: bold;
}

.card-add-city {
  margin: 10px;
  height: 175px;
  width: 130px;
  border-radius: 20px;
}

.list-city {
  display: flex;
}
.center-h-v {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hover:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
