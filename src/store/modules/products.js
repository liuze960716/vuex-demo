import shop from '../../api/shop'
import * as types from '../mutation-types'

// 初始化仓库state
const state = {
  all: []
}

// Getter 就是把组件中共有的对state的操作进行了提取
const getters = {
  allProducts: state => state.all
}

// action
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
