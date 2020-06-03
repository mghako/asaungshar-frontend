<template>
  <div class="flex flex-col items-center">
    <!-- <div class="w-"></div> -->
    <div class="mb-2">
      <h3 class="text-2xl">Cities:</h3>
    </div>
    <div class="mb-2 w-4/6">
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