<template>
    <div class="flex flex-col items-center">
        <div class="mb-2">
          <h3 class="text-2xl">Townships:</h3>
        </div>
        <div class="w-4/6">
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