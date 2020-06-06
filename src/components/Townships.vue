<template>
    <div class="md:flex md:flex-row md:content-center">
        <div class="w-2/6 mb-2 md:mr-2 mx-auto">
          <h3 class="w-full text-2xl text-center">Townships:</h3>
        </div>
        <div class="w-4/6 mx-auto">
          <select @change="showHostels($event)"  id="" class="w-full border shadow px-4 py-2">
            <option value="0">Please select township...</option>
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
      ...mapActions(['showHostels']) // add this if u want to show all township at first 'fetchTownships'
    },
    created() {
      // this.fetchTownships()
    },
    computed: mapGetters(['allTownships', 'loadingStatus'])
}
</script>

<style scoped>
  
  @media (max-width: 500px) {
    
  }
</style>