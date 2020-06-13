

const state = {
    errors: []
}
const getters = {
    errors: state => state.errors
}
const actions = {

}
const mutations = {
    setErrors: (state, errors) => state.errors = errors,
    cleanErrors: (state) => state.errors = null
}


export default {
    state,
    getters,
    actions,
    mutations
}