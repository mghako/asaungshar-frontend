<template>
  <div class="container">
    <div class="mb-4">
      <Cities />
    </div>
    <div class="mb-6">
      <Townships />
      <!-- <button @click.prevent="findHostel" type="submit" class="flex-none block bg-green-500 mx-auto text-center text-white py-2 px-4 rounded outline-none shadow hover:bg-green-700 mt-6 w-2/6"><i class="fas fa-search"></i> Find</button> -->
    </div>
    <div class="mt-2">
      <h2 class="text-2xl">Dormitory Rooms</h2>
      <fieldset class="border p-4 h-auto">
        <legend class="text-left">Available Lists</legend>
        <div class="dormitory-box">
          <Hostels />
        </div>
      </fieldset>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Cities from '@/components/Cities.vue'
import Townships from '@/components/Townships.vue'
import Hostels from '@/components/Hostels.vue'

export default {
  name: 'Home',
  components: {
    Cities,
    Townships,
    Hostels
  }
}
</script>
