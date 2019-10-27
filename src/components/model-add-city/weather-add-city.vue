<template>
         <el-dialog
            title="Add City"
            :visible.sync="modelOpened"
            width="30%">
            <el-input placeholder="Please input" v-model="cityName"></el-input>

            <span slot="footer" class="dialog-footer">
                <el-button @click="close">Cancel</el-button>
                <el-button type="primary" @click="addCity">Confirm</el-button>
            </span>
        </el-dialog>
</template>

<script>
 
import {mapState} from 'vuex';
import { log } from 'util';

export default {
    name:'model-add',
    data() {
        return{
            cityName: ""
        }
    },
    computed : mapState(['modelOpened']),
    methods: {
        close () {
            log("close")
            this.$store.dispatch('openModelAction', false)
        },
       openNotification() {
          this.$notify({
            title: 'Notice',
            message: 'You can not added it exist in the list',
            type: 'warning'
          });
        },
        addCity() {
            if(this.cityName != "" ) {

                // check if the city exist in the list or no 
                var listCities = this.$store.getters.getCityModelList;
                log(listCities);
                if(listCities.length == 0) {
                    this.$store.dispatch('addCityAction', {id:Math.random(),name: this.cityName}).then(()=> {
                    this.$store.dispatch('openModelAction', false);
                });
                }else {
                    listCities.filter(elem => {
                    if(elem.name.toUpperCase() === this.cityName.toUpperCase() ) {
                        log('You cant add it');
                        this.$store.dispatch('openModelAction', false).then(()=>  this.openNotification());
                    }else{
                        this.$store.dispatch('addCityAction', {id:Math.random(),name: this.cityName}).then(()=> {
                        this.$store.dispatch('openModelAction', false);
                      })
                    }
                });
                }

                

                
            }
        },

    
        
    }
}
</script>

<style>

</style>