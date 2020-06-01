<template>
    <div class="flex flex-row items-center justify-between p-4">
        <div class="md:w-4/12">
          <h3 class="md:mr-2 text-lg text-right">Townships:</h3>
        </div>
        <div class="md:w-8/12">
          <select name="" @change="showHostels($event)"  id="" class="w-full border shadow px-4 py-2">
            <option v-for="township in allTownships" :key="township.id" :value="township.id">{{ township.name }}</option>
          </select>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Townships",
    methods: {
      ...mapActions(['fetchTownships','showHostels']) // add this if u want to show all township at first 'fetchTownships'
    },
    created() {
      this.fetchTownships()
    },
    computed: mapGetters(['allTownships', 'loadingStatus'])
}
</script>

<style scoped>
  
  @media (max-width: 500px) {
    
  }
</style>