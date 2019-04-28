<template>
  <div id="app">
	<h1>购物车</h1>
	<hr>
	<h2>产品列表</h2>
	<products></products>
	<hr>
	<h2>购物车列表</h2>
	<cart></cart>
  </div>
</template>

<script>
import cart from './components/Cart.vue'
import products from './components/ProductsList.vue'

export default {
  components: {
    cart, // 在 .vue 组件, data 必须是一个函数，它return（返回一个对象），这个返回的对象的数据，供组件实现。
    products
  }
}
</script>
