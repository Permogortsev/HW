<template>
  <div class="gooods-card">
    <div v-for="(item, index) in goods" :key="index" class="item-card">
      <h2 class="item-card__h2">{{ item.product_name }}</h2>
      <span class="item-card__span">{{ item.price }}</span>
      <button class="addBasket" @click="onClick(item)">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  props: {
    goods: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick(item) {
      this.$emit("add-basket", item);
    },
  },
};
</script>

<style>
.gooods-card {
  display: flex;
  flex-direction: row;
}
.item-card {
  width: 300px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #f5f5f5;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
}
.item-card__h2 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}
.item-card__span {
  font-size: 16px;
  color: #fc5a5a;
  display: block;
  margin-bottom: 12px;
}
.addBasket {
  color: #fff; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background: rgb(212, 75, 56); /* фон кнопки */
  padding: 0.7em 1.5em; /* отступ от текста */
  outline: none; /* убирать контур в Mozilla */
  border: none;
  margin-left: 10px;
}
.addBasket:hover {
  background: rgb(232, 95, 76);
} /* при наведении курсора мышки */
.addBasket:active {
  background: rgb(152, 15, 0);
} /* при нажатии */
</style>