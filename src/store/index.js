import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//import state from './state';
import * as mutations from './mutations';

import * as actions from './actions';
import usuarios from '/src/modules/usuarios.js'
//import productos from '/src/modules/productos.js'

export default new Vuex.Store({
  state:{
    productos: [],
    carrito: [
      {
        id: 1,
        producto: 'Cerezas',
        precio: 25556,
        cantidad: 150,
        contador: 1
      }      
    ],
    carritoAgrupado: [],
    product: null
  },
  getters: {
    listaProductos(state){
      return state.productos
    }
  },
  mutations,
  actions,
  modules: {
    usuarios
    //productos
  }
})
