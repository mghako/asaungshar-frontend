import axios from 'axios'

const state = {
    hostels: []
}

const getters = {
    allHostels: state => state.hostels
}
const actions = {
    async showHostels({commit}, id) {
        const response = axios.get(`http://localhost:8000/api/township/${id}/hostels`);
       
        commit('setHostels', response.data)
    }
}
const mutations = {
    setHostels: (state, hostels) => state.hostels = hostels
}


export default {
    state,
    getters,
    actions,
    mutations
}
