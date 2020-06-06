<template>
  <div class="md:flex md:flex-row md:content-center">
    <!-- <div class="w-"></div> -->
    <div class="w-2/6 mb-2 mx-auto">
      <h3 class="text-2xl text-center">Cities:</h3>
    </div>
    <div class="mb-2 w-4/6 mx-auto">
      <select name="" @change="showTownships($event)"  id="" class="w-full border shadow px-4 py-2">
        <option value="0">Please select city...</option>
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
        ...mapActions(['fetchCities','showTownships']), // showTownships for all townships
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