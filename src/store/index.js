import Vue from 'vue'
import Vuex from 'vuex'
import cities from './modules/cities'
import townships from './modules/townships'
import hostels from './modules/hostels'
import auth from './modules/auth'
import errors from './modules/errors'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        errors,
        cities,
        townships,
        hostels
    }
})