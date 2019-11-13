<template>
  <el-dialog title="Add City" :visible.sync="modelOpened" width="30%">
    <el-row>
      <el-col :span="21">
        <el-input placeholder="Please input" v-model="cityName"></el-input>
      </el-col>
      <el-col :span="3" class="style-position">
        <i class="el-icon-location" @click="findMyPosition" />
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">Cancel</el-button>
      <el-button type="primary" @click="addCity">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";
import { log } from "util";

export default {
  name: "model-add",
  data() {
    return {
      cityName: "",
      gps: false,
    };
  },

  created() {
    this.$store.subscribe((mutation,state)=> {
      if(mutation.type === 'getCurrentPositionName') {
        this.cityName = state.currentPositionName;
      }
    });
  },
  computed: mapState(["modelOpened","currentPositionName"]),
  methods: {
    findMyPosition() {
      this.$getLocation().then(coordinates => {
        let lat = coordinates.lat;
        let lng = coordinates.lng;
        log(coordinates);
        this.gps = true;

        this.$store.dispatch('getCurrentPostitionNameAction',{
          lat: lat,
          log : lng
        })

      });
    },

    close() {
      log("close");
      this.$store.dispatch("openModelAction", false);
    },
    openNotification() {
      this.$notify({
        title: "Notice",
        message: "You can not added it exist in the list",
        type: "warning"
      });
    },
    addCity() {
      // check if GPS is true;
      if (this.cityName != "") {
        // check if the city exist in the list or no
        var listCities = this.$store.getters.getCityModelList;
        log(listCities);
        if (listCities.length == 0) {
          this.$store
            .dispatch("addCityAction", {
              id: Math.random(),
              name: this.cityName
            })
            .then(() => {
              this.$store.dispatch("openModelAction", false);
            });
        } else {
          var listFiltered = listCities.filter(
            item => item.name.toUpperCase() === this.cityName.toUpperCase()
          );
          if (listFiltered.length > 0) {
            log("You cant add it");
            this.$store
              .dispatch("openModelAction", false)
              .then(() => this.openNotification());
          } else {
            this.$store
              .dispatch("addCityAction", {
                id: Math.random(),
                name: this.cityName,
                gps : this.gps
              })
              .then(() => {
                this.$store.dispatch("openModelAction", false);
                this.gps = false;
              });
          }
        }
      }
    }
  }
};
</script>

<style>
.style-position {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.style-position:hover {
  color: darkgrey;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
