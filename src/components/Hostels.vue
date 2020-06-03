<template>
  <div class="container">
      <table class="table-auto w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Rooms</th>
            <th>Number of Person</th>
            <th>Monthly Fee</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hostel in allHostels" :key="hostel.id">
            <td>{{ hostel.name }}</td>
            <td>{{ hostel.number_of_room }}</td>
            <td>{{ hostel.number_of_person }}</td>
            <td>{{ hostel.mothly_fee }}</td>
            <td>{{ hostel.address }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'Hostels',
  data() {
    return {

    }
  },
  methods: {
    
  },
  computed: mapGetters(['allHostels'])

}
</script>

<style>

</style>