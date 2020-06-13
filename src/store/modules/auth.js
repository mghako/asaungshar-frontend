import axios from 'axios'
import router from '../../router'


const state = {
    userData : null, // user`s data
    
}

const getters = {
    user: state => state.userData,
    
}

const actions = {
    sendRegisterRequest({commit}, data) {
        axios.post(process.env.VUE_APP_API_URL+"register", data) // send user info to register
            .then( response => {
                commit("cleanErrors")
                localStorage.setItem("authToken", response.data.token);
                this.$router.push({ name: "Login" })
            })
            .catch( (errors) => {
                console.log("errors:", errors.response.data.errors)
                commit('setErrors', errors.response.data.errors)
                // console.log("error:", errors.response)
            })
    },
    sendLoginRequest({commit}, data) {
        axios.post(process.env.VUE_APP_API_URL+"login", data)
            .then( response => {
                commit("setUserData", response.data.user); // set or mutate registered user data
                localStorage.setItem("authToken", response.data.token); // set token in local storage
                router.push('/') // change route
            })
            .catch()
    }
}

const mutations = {
    setUserData: (state, user) => state.userData = user
    
    
}


export default {
    state,
    getters,
    actions,
    mutations
}