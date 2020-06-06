import axios from 'axios'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZjUwMGZmMjEwNmE2ODZmODZhYTViYTUzOTIzOWJkMjA2NDA0ZTgyYzhiYmRkMmZmMjVhNjE2ZjhjYjZkNTg4YjE2ZGYwYmMxZTczNmQ0M2YiLCJpYXQiOjE1OTEyNjA0OTQsIm5iZiI6MTU5MTI2MDQ5NCwiZXhwIjoxNjIyNzk2NDk0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wnhJSg_fUrZtKe1MkoNfT4c7RlrDvYdvCJy_-GRZxB68odTe6IcrONGgt0ztt40PDH4icZzTZxik7I5clYA5rUhI54NUtuPswok5LDH1LUJHFnBWyLcJoRjupbPVjMethGOY8Jtv1Z8HpfsDTzVyj5siDe5wCIA9JgzAqir2gPMzbmHt1stuF2xpkiG_U-tOkmIJUH9oVONwWBPA2AfrDGGV2GXHyNYxP8CdTa66E8cE5XcPtTRxU-uJ3F7in5YFuA__8FV-cqKg111edPtZ-OiLF0CREpmPoNAU4kgqFheFMTeyYQZ8XsMowY9j15I8F150dWBo6SscwbetS5UQMhiMsXFGh-39DRWAb_DamtVX-cJVPUerJbpLBPBctDuRE0RBbSX3iGGkuzMXbqpwXPGS87uYk_PomGkqNzQC4X5xoqJ0qC_P0UsFGompAWZgFikX6OVsCzPQTSojN3R8Pg66IsYF8L7LSBcHeuWbP-jtOXV6efmUqQzqQ4ezKAp1Z-NBIBrcN-xk9tAEPn42N34xBuJUw2JTGjhTf1WRg7rlBLVbSw_-AU6jistkVTI8-RWtqfZ2Y7dmwcR5hWD3xKnXv6ocrO1W-YMQMlZNeXx7peoUoiA2CBTt-v4zNYoylho_2bE92XGBOGb5ieKB3JTo2q3DUnIwaP72Gt3PvkA"

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
        const response = await axios.get('http://172.20.10.4:8000/api/townships')

        // commit setTownship mutation
        commit('setTownships', response.data.data)
    },
    async showTownships({commit}, e) {
        let id = e.target.value;
        // show townships of requested city
        await axios.get(`http://172.20.10.4:8000/api/city/${id}/townships`)
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