import axios from 'axios'

const state = {
    hostels: []
}

const getters = {
    allHostels: state => state.hostels
}
const actions = {
    async showHostels({commit}, event) {
        console.log(event)
        let id =  parseInt(
            event.target.value
        )
        const response = await axios.get(`http://localhost:8000/api/township/${id}/hostels`);
       
        commit('setHostels', response.data)
    }
}
const mutations = {
    setHostels: (state, hostels) => state.hostels = hostels.data
}


export default {
    state,
    getters,
    actions,
    mutations
}
