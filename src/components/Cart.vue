<template>
	<div class="cart">
		<p v-show="!products.length"><i>请添加一些物品</i></p>
		<ul>
			<li v-for="p in products">
				{{p.title}} - {{p.price | currency}} x {{p.quantity}}
			</li>
		</ul>
		<p>总额:{{total}}</p>
		<p><button :disabled="!products.length" @click="checkout()">结账</button></p>
		<p v-show="checkoutStatus">结账{{ checkoutStatus }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      checkoutStatus: 'checkoutStatus'
    }),
    total () {
      return this.products.reduce((total, p) => {   // 累加，第一个参数是数组第一项，之后是上一次返回值，二参数是数组第二项，这里给出
        return total + p.price * p.quantity    // 初始值0，表示从0开始，可以理解为total=0开始
      }, 0)
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>

