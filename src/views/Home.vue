<template>
  <div class="md:flex md:justify-center sm:flex-col items-center flex-wrap">
    <div class="w-6/12">
      <Cities />
    </div>
    <div class="w-6/12">
      <Townships />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cities from '@/components/Cities.vue'
import Townships from '@/components/Townships.vue'


export default {
  name: 'Home',
  components: {
    Cities,
    Townships
  }
}
</script>
