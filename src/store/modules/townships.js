import axios from 'axios'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNGZhMDBhYWRmYTUxOTEzNmM5NjRlZTg0ZmY5MDc0YWJlMTAxZmVjYTVjYjhhMTYwNmI1NjEyNDUzZmU0MjJjMDY0M2Q3YmViMWFkZWMwMjQiLCJpYXQiOjE1OTA5ODg4MDAsIm5iZiI6MTU5MDk4ODgwMCwiZXhwIjoxNjIyNTI0Nzk5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.U7h5mbzZCvG0xXQvRIgq60j-KwOGkWx9FSm8s06hOcgKHxlFepYVLWwYZfgrXeOVd_vfqJg4BWaP_uywxyS5TsDg42hJdhe9J8tDGQht54N6fmTIjGAoF19h-cV05deQxYyG3FORuRlu8GUIsj8cofawZn0cEZuRRc8B1blqMnEX_KlYNlDBi7L4iG08zHbLa9HLqzzGiU13rBr1sDf9MaUP_buQ-vCGMWycnmnI4f9tFp2sQ4bziMneSNokXphlB0pTAjJ1B0r3jnkv9fTfCFmGyoz4bM3-x9hdU1CI8R3WFpOLShgFptASPB8d3E7xlc8H8jb7K_akjeR6wZi_BKK-2-mGJI6KC22nv9SR-bh5rT11Rf_NEbV4NYkfZQ0E9O4im0E40TXxzOVsQgiSFFUVSQClXRmU52Js5uhgISnsT1JTbbtoZeoyZdLieB_AH_FJJ5ldufXcsZw8R4NB4Ni_nhXBLEs6bDZQ3q_W4oz8XmiCFpjwJjRYGo4152AbyD9ZUmtjVH2yTBMnj61nsXDIpY-VqagZIR4jvEMjJwRzOAi-ajwAOOk8F4gvYNswaRtiiF9JDoiIrZ016-WJoQHKlPkwFsYYFJNCsClca5nmG3S0VtkQlysu0NMwkNuVlXSIltO88sRseElX-VX4j9iouwSIXUykBbImsvIcwt8"

axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common["Authorization"] = "Bearer " + token



const state = {
    townships: []
}

const getters = {
    allTownships: state => state.townships
}

const actions = {
    async fetchTownships({commit}) {
        // get all Townships
        const response = await axios.get('http://localhost:8000/api/townships')

        // commit setTownship mutation
        commit('setTownships', response.data.data)
    },
    async showTownships({commit}, e) {
        let id = e.target.value;
        // show townships of requested city
        await axios.get(`http://localhost:8000/api/city/${id}/townships`)
            .then( ({data}) => {
                // commit setTownshsips
                commit('setTownships', data.data)
            })
            .catch( (err) => {
                console.log(err)
            })

        // // commit setTownshsips
        // commit('setTownships', response.data.data)
    }
}

const mutations = {
    setTownships: (state, townships) => state.townships = townships
}


export default {
    state,
    getters,
    actions,
    mutations
}