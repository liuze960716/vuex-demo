<template>
	<ul>
		<li v-for="p in products">
			{{p.title}} - {{p.price | currency}} - 库存: {{p.inventory}}
			<br>
			<button :disabled="!p.inventory" @click="addToCart(p)">加入购物车</button>
		</li>
	</ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style lang="css">
	li{
		list-style-type: none;
	}
</style>
