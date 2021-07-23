import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        products: []
    },
    actions: {
       async fetchProducts({commit}) {
            const response = await fetch('http://localhost:5000/products')

           const data = await response.json()
           console.log(data)

          commit('SAVE_PRODUCTS', data)
        }
    },
    mutations: {
        SAVE_PRODUCTS(state, products) {
            state.products = products
        }
    }
})