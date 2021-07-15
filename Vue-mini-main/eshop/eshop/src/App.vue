<template>
  <div id="app">
    <Header  @open-basket="onBasket"  @filter-goods="filterGoods"></Header>
    <main>
      <goods-list :goods="filteredGoods" @add-basket="addToBasket"></goods-list>
      <Basket :showBasket="showBasket" :goodsCart="goodsCart" @delete-basket ="deleteBasket"></Basket>
    </main>
  </div>
</template>

<script>
import Basket from "./components/Basket.vue";
import GoodsList from "./components/GoodsList.vue";
import Header from "./components/Header.vue";
const API_URL = "http://localhost:3000";
export default {
  name: "App",
  components: { Header, GoodsList, Basket },
  data() {
    return {
      showBasket: false,
      goodsItem: [],
      goodsCart: [],
      filteredGoods: [],
    };
  },
  mounted() {
    this.addGoodsItem();
    this.getCart();
  },
  methods: {
    filterGoods(value) {
      console.log('поиск')
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goodsItem.filter(good => regexp.test(good.product_name));
    },
    onBasket() {
      this.showBasket = !this.showBasket
    },
    makeGetRequst(url) {
      return fetch(url).then((response) => response.json());
    },
    makePostRequst(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((responce) => responce.json());
    },
    addGoodsItem() {
      this.makeGetRequst(`${API_URL}/database/catalog.json`).then(
        (response) => {
          this.goodsItem = response;
          this.filteredGoods = response;
        }
      );
    },
    deleteBasket(item) {
      this.makePostRequst(`${API_URL}/deleteFromCart`, item).then(() =>
        this.getCart()
      );
    },
    addToBasket(item) {
      this.makePostRequst(`${API_URL}/addToCart`, item).then(() =>
        this.getCart()
      );
    },
    getCart() {
      this.makeGetRequst(`${API_URL}/cartData`).then((data) => {
        this.goodsCart = data;
      });
    },
  },
};
</script>
<style>
main {
  padding: 20px 5%;
}
</style>
