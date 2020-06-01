<template>
  <div class="flex flex-row items-center justify-between p-4">
    <!-- <div class="w-"></div> -->
    <div class="md:w-4/12">
      <h3 class="md:mr-2 text-lg text-right">Cities:</h3>
    </div>
    <div class="md:w-8/12">
      <select name="" @change="showTownships($event)"  id="" class="w-full border shadow px-4 py-2">
        <option v-for="city in allCities" :key="city.id" :value="city.id">{{ city.name }}</option>
      </select>
    </div>
      
      
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Cities',
    data() {
      return {
        city_id: ''
      }
    },
    methods: {
        ...mapActions(['fetchCities','showTownships']),
    },
    created() {
        this.fetchCities()
    },
    computed: {
      ...mapGetters(['allCities'])
    },
    

}
</script>

<style scoped>
  
  @media (max-width: 500px) {
    
  }
</style>