<template>
  <el-card :body-style="{ padding: '0px' }" class="card-add-city">
    <img
      src="https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/16:9/w_1440,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg"
      class="image"
    />

    <div class="center">
      <p>{{info.name}}</p>
    </div>
  </el-card>
</template>

<script>

export default {
  name: "city-card",
  props: ["info"],
  methods: {
    openNotification(name) {
      this.$notify({
        title: "Success",
        message: "The " + name + " Country selected",
        type: "success"
      });
    },
 
  }
};
</script>

<style>
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
</style>
