<template>
  <div class="header">
    <input
      placeholder="Искать здесь..."
      v-model="searchValue"
      type="text"
      class="search-inp"
    />
    <button @click="onClick" class="search-bth">Поиск</button>
    <button class="Basket-bth" @click="$emit('open-basket')">КОРЗИНА</button>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: () => ({
    searchValue: "",
  }),
  methods: {
    onClick() {
      this.$emit("filter-goods", this.searchValue);
    },
  },
  watch: {
    searchValue() {
      this.onClick();
    },
  },
};
</script>
<style>
.header {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
  height: 100px;
  flex-direction: row;
  align-content: stretch;
  align-items: center;
}
.search-inp {
  height: 30px;
  padding-left: 10px;
  border: 2px solid #7ba7ab;
  border-radius: 5px;
  outline: none;
  background: #f9f0da;
  color: #9e9c9c;
}
.search-bth {
  color: #fff; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background: rgb(212, 75, 56); /* фон кнопки */
  padding: 0.7em 1.5em; /* отступ от текста */
  outline: none; /* убирать контур в Mozilla */
  border: none;
  margin-left: 10px;
}
.search-bth:hover {
  background: rgb(232, 95, 76);
} /* при наведении курсора мышки */
.search-bth:active {
  background: rgb(152, 15, 0);
} /* при нажатии */
.Basket-bth {
  color: #fff; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background: rgb(212, 75, 56); /* фон кнопки */
  padding: 0.7em 1.5em; /* отступ от текста */
  outline: none; /* убирать контур в Mozilla */
  border: none;
  margin-left: auto;
}
.Basket-bth:hover {
  background: rgb(232, 95, 76);
} /* при наведении курсора мышки */
.Basket-bth:active {
  background: rgb(152, 15, 0);
} /* при нажатии */
</style>