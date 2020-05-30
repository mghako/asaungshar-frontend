<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        locations: ''
      }
    },
    mounted() {
      axios.get('http://localhost:8000/api/locations', {
        headers: {
          'Content-Type' : 'application/json'
        }
      })
        .then(({data}) => {
          this.locations = data
        })
        .catch( (err) => {
          console.log(err)
        })
    }
}
</script>

<style>

</style>
