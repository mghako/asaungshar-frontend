<template>
  <div class="container">
      <h3>Townships</h3>
      <div class="locations-box">
        <div v-for="location in allLocations" :key="location.id" class="location-box">
          {{ location.name }}
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Locations",
    methods: {
      ...mapActions(['fetchLocations'])
    },
    created() {
      this.fetchLocations()
    },
    computed: mapGetters(['allLocations'])
}
</script>

<style scoped>
  .locations-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .location-box {
    border: 1px solid #ccc;
    background: #41b883;
    color: #fff;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    .locations-box {
      grid-template-columns: 1fr;
    }
  }
</style>