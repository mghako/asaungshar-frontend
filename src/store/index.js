import Vue from 'vue'
import Vuex from 'vuex'
import cities from './modules/cities'
import townships from './modules/townships'
import hostels from './modules/hostels'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cities,
        townships,
        hostels
    }
})