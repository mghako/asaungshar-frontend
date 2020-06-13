<template>
  <div class="container py-10">
        <div class="mx-auto max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input v-model="details.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" autocomplete="off">
                    <div class="text-red-400 text-sm" v-if="errors">
                        {{ errors.email }}
                    </div>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input v-model="details.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <div class="text-red-400 text-sm" v-if="errors">
                        {{ errors.password }}
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <button @click.prevent="sendLoginRequest(details)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            details: {
                email: '',
                password:'',
            }
        }
    },
    methods: {
        ...mapActions(['sendLoginRequest'])
    },
    computed: {
        ...mapGetters(['errors'])
    }
}
</script>

<style>

</style>