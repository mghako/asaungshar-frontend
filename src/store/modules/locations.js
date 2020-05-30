import axios from 'axios'
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiOTljNzY0ZjdmZWJiNGY4ZWUyY2I5ZWE1YTdiYjI0NTY4NTlhNDg5NjNmYjQyNzIxYjIxNWViZThjOWI0N2YzMjgxOWY2ZDc4ZWQxYTg4YzYiLCJpYXQiOjE1OTA4MTIzNDMsIm5iZiI6MTU5MDgxMjM0MywiZXhwIjoxNjIyMzQ4MzQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wFpqaJxgBeam1iTC2ZoX7HdLeh7KWeT5JmH1JLhT8qwPZq_ANg0EzkIjMVYw-biB1x2xzCecP7Ag5ktAr2ulqBIhug5xpmmGunWlB9CUsmwRLHeV3qmj1BC19kfWOjZ1SKVXRCWApYpFJZ21vPPfmmQzmV3rK6w-5RM18t56sPMYkOhO0OiUYoZ-Oz3vpe-P-QwZ0dN1OamN2jqXGCrILTJnCZNjFbIjINrPp8U3kT_FPQbM0AG6i49AvKh_YhuoQhOVWbluAQVzCOCSYRk1Gqb6A5t9kIzfPGYX5ocDQaD59T1H8MsUr-eaZ_P0-4UsjsDI_iLvx8qIDx_we0wBcmDHpYCjKu1yjKgOV162xtr9IyQJ45x4SsFYlC8NEotfTtFRdR8DhT-B3cwFNHJY91p5NkWYDvkqzT8EDO8BXwpQyUlZXtQ19vTjxvPNaa9pQxGbCB-dTrpm7isUs6_7GrJbnr7LA_xA1s_H4N0bRatCGZxsoEi-EBy5QG74hcUZypQl45B7YEbKgL9_AywyL8lWUpuRWJ4CJHA62mTHgtnY2oVyHvwg68qACagkyZlDgN3Jm_uNmSVDKmcO1-Hapkwzw2636CLrSbuAGgZ7Ud4jMg3u0obrpXa6RQjndl9nrhtHDx2IcPqiBhZGM6rsiDZl8xnyFRMPX5ksFiul4IQ"

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Authorization"] = "Bearer " + token



const state = {
    locations: []
}

const getters = {
    allLocations: state => state.locations
}

const actions = {
    async fetchLocations({commit}) {
        // get all locations
        const response = await axios.get('http://localhost:8000/api/locations')

        // commit setLocation mutation
        commit('setLocations', response.data.data)

    }
}

const mutations = {
    setLocations: (state, locations) => state.locations = locations
}


export default {
    state,
    getters,
    actions,
    mutations
}