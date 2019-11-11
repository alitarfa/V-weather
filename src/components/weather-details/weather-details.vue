<template>
<div> 
    
           <el-col :span="7" class="weather-info-section">
 
               <el-row :gutter="12" class="m-t-250">
                        <el-col :span="24" class="center p-10">
                        <!-- <img :src="listInfoWeather[0].img" alt="test" class="image-weather"/> -->
                        </el-col>
                </el-row>
                <el-row>
                        <el-col :span="24" class="center m-5">
                            <span class="color-w">{{listInfoWeather.list[0].weather[0].main}}</span>
                        </el-col>
                 </el-row>
                 <el-row>
                        <el-col :span="24" class="center m-5">
                            <span class="color-w">12/10/2019</span>
                        </el-col>
                 </el-row>
                  
                 <el-row>
                        <el-col :span="24" class="center m-5 degree-info">
                                <span class="color-w">{{listInfoWeather.list[0].main.temp}}</span>
                                <img src="../../assets/celsius.svg" alt="" width="30">
                        </el-col>
                </el-row>

                <el-row>
                        <el-col :span="24" class="center m-5">
                                <span class="color-w">{{listInfoWeather.city.name}}</span>
                        </el-col>
                </el-row>

                  <el-row class="center color-w" >
                      <el-col :span="5" class="center center-v-h" style="margin-right:4px">
                          <span>Sun rise</span>
                          <span>{{new Date(listInfoWeather.city.sunrise * 1000).getHours()+":"+new Date(listInfoWeather.city.sunrise * 1000).getMinutes()}}</span>
                      </el-col>
                        <el-col :span="12" class="center">
                                <el-slider v-model="value1"></el-slider>
                        </el-col>

                        <el-col :span="5" class="center-v-h">
                          <span>Sun set</span>
                          <span>{{new Date(listInfoWeather.city.sunset * 1000).getHours()+":"+new Date(listInfoWeather.city.sunset * 1000).getMinutes()}}</span>
                      </el-col>
                </el-row>
 

            </el-col>
</div>
</template>

<script>
import { log } from 'util';
//import {mapState} from 'vuex';

export default {
    name: 'weather-details',
   // computed: mapState(['listInfoWeather']),

    data() {
        return {
            value1: new Date().getHours(),
            listInfoWeather: this.$store.getters.getCurrentCityInfoGetter,
        }
    },

    
    watch: {
        getData() {
            let obj = this.$store.getters.getCurrentCityInfoGetter;
            return obj;
        },

        currentCity() {
            this.currentCity = this.$store.getters.getCurrentCityInfoGetter;
            log(this.$store.getters.getCurrentCityInfoGetter);
        }
    },

    created() {
        this.$store.subscribe((mutation, state)=> {
            log(mutation);
          if(mutation.type === 'getCurrentCityInfo') {
              this.listInfoWeather = state.listInfoWeather;
          }
        });
    }
}
</script>


<style>

    .image-weather {
        width: 130px;
    }

    .p-10 {
        padding: 15px;
    }
    .info-w-m {
      display: flex;
      justify-content: center;
    }

    .center-v-h {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 0.8em;
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
      padding: '0px' ;
      border-radius:'20px'
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

    .degree-info span{
        font-size: 6em;
        font-family: 'Montserrat', sans-serif;
    }

    .font-Montserrat{
        font-family: 'Montserrat', sans-serif;
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