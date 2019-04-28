import shop from '../../api/shop'
import * as types from '../mutation-types'

// 初始化state
// added模型： [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null
}

// Getter 就是把组件中共有的对state的操作进行了提取
// 等同于从state中获取数据
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions 提交mutation
const actions = {
  checkout ({ commit, state }) {
    const savedItem = [...state.added] // 拷贝数组等同于Array.slice()
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      () => { commit(types.CHECKOUT_SUCCESS) },
      () => { commit(types.CHECKOUT_FAILURE, { savedItem }) }
    )
  }
}

// mutations
const mutations = {
  // 添加到购物车
  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  // 初始化state
  [types.CHECKOUT_REQUEST] (state) {
    state.added = []
    state.checkoutStatus = null
  },

  // submit成功
  [types.CHECKOUT_SUCCESS] (state) {
    state.checkoutStatus = '成功'
  },

  // submit失败
  [types.CHECKOUT_FAILURE] (state, {savedItem}) {
    state.checkoutStatus = '失败'
    state.added = savedItem
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
