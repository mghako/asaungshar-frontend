<template>
  <div class="home">
    <h3 class="display-1">အဆောင်ရှာဖွေခြင်း App မှကြိုဆိုပါတယ်</h3>
    <Locations />
  </div>
</template>

<script>
// @ is an alias to /src
import Locations from '@/components/Locations.vue'

export default {
  name: 'Home',
  components: {
    Locations
  }
}
</script>
