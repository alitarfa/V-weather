<template>
  <div id="app">
    <el-container class="continer-weather">
      <el-card class="card-container font-Montserrat" :body-style="{padding: '0px'}">
        <el-row class="wather-two-section">
          <!-- Section of City information -->
          <el-col :span="17" class="weather-city-section">
            <!-- Search Section -->
            <el-row>
              <el-col :span="6" class="search-input">
                <el-input placeholder="Search new place"></el-input>
              </el-col>
            </el-row>
            <!-- Search Section -->

            <!-- Title -->
            <el-row>
              <el-col :span="8" class="title-forcast">
                <p>
                  Weather
                  <span>Forcast</span>
                </p>
              </el-col>
            </el-row>
            <!-- Title-->

            <!-- List City Section -->
            <list-cities />
            <!-- List City Section -->

            <!-- Details  -->
            <el-row class="info-w-m">
              <el-col :span="22">
                <el-tabs v-model="activeName" @tab-click="handleClick" style="width:100%">
                  <el-tab-pane label="Week" name="first">
                    <el-table
                      :show-header="false"
                      :data="tableData"
                      style="width: 100%; background:#f2fbff"
                    >
                      <el-table-column width="180">
                        <template slot-scope="scope">
                          <span>
                            {{scope.row.data}}
                          </span>
                        </template>
                      </el-table-column>

                      <el-table-column width="80">
                        <template slot-scope="scope">
                          <div class="center-h-v-s-h">
                            <img src="./assets/001-drop.png" width="23" />
                            <span>{{ scope.row.humidity }}</span>
                            <span>%</span>
                          </div>
                        </template>
                      </el-table-column>

                      <el-table-column class width="170">
                        <template slot-scope="scope">
                          <div class="m-l-50">
                            <img src="./assets/005-wind.png" width="23" />
                            <span>{{ scope.row.wind }}</span>
                          </div>
                        </template>
                      </el-table-column>

                      <el-table-column class>
                        <template slot-scope="scope">
                          <div class="m-l-50">
                            <img src="./assets/004-clouds.png" width="23" />
                            <span>{{ scope.row.clouds }}</span>
                            <span>%</span>
                          </div>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="Month" name="second">
                    <div class="center-h-v-s">
                      <img src="../src/assets/emoji.png" width="80" alt />
                      <span>
                        <h3>You need to pay to get access</h3>
                      </span>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="3 Month" name="third">
                    <div class="center-h-v-s">
                      <img src="../src/assets/emoji.png" width="80" alt />
                      <span>
                        <h3>You need to pay to get access</h3>
                      </span>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="6 Month" name="fourth">
                    <div class="center-h-v-s">
                      <img src="../src/assets/emoji.png" width="80" alt />
                      <span>
                        <h3>You need to pay to get access</h3>
                      </span>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>

            <!-- Details  -->
          </el-col>
          <!-- Section of City information -->

          <!-- Section of Details information Daily -->
          <weather-details />
          <!-- Section of Details information Daily -->
        </el-row>
      </el-card>
    </el-container>
  </div>
</template>

<script>
import weatherDetails from "./components/weather-details/weather-details";
import listCities from "./components/weather-city/weather-list-city/weather-list-city.vue";
import { mapState } from "vuex";
import { log } from "util";

export default {
  name: "app",
  components: {
    weatherDetails,
    listCities
  },

  computed: mapState(["currentCityInfo"]),

  data() {
    return {
      activeName: "first",
      cardStyle: {
        background: "red",
        padding: "0px"
      },

      tableData: [],

      listInfoWeather: this.$store.getters.getCurrentCityInfoGetter
    };
  },

  methods: {
    getDayName(timestamp) {
      var date = new Date(timestamp * 1000);
      var dateObj = date.toDateString().split(' ')[0];
      log(dateObj);
      return dateObj.toString();
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "getCurrentCityInfo") {
        this.listInfoWeather = state.listInfoWeather;
        log(state);
        let list = this.listInfoWeather.list;
        for (var i = 0; i < list.length; i = i + 8) {
          this.tableData.push({
            data: this.getDayName(list[i].dt),
            humidity: list[i].main.humidity,
            wind: list[i].wind.speed,
            clouds: list[i].clouds.all
          });
        }
      }
    });
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

.m-l-50 {
  margin-left: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.m-l-50 img {
  margin-right: 10px;
}

.m-l-50 span {
  margin-left: 10px;
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

.center-h-v-s {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.center-h-v-s-h {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
}
</style>

 