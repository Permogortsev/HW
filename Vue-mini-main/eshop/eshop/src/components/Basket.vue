<template>
     <div v-show="showBasket" class="basket">
         <div class="basket-card" v-for="(item, index) in goodsCart" :key="index">
          <h2 class="basket-card__h2">{{ item.product_name }}</h2>
          <span class="basket-card__span">{{ item.price }}</span>
          <button class="card-bth" @click="deleteBasket(item)">Удалить</button>
        </div> 
      </div>
</template>

<script>
export default {
    name: 'Basket',
    props: {
        showBasket : {
            type: Boolean,
            default: false,
        },
        goodsCart :{
            type: Array,
        }
    },
    methods:{
        deleteBasket(item){
            this.$emit('delete-basket', item)
        }
    }
}
</script>
<style>
.basket {
   box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  padding: 20px;
  width: 800px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  overflow: auto;
}
.basket-card {
  width: 300px;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #f5f5f5;
  background: white;
  font-family: "Open Sans";
  transition: 0.3s ease-in;
}
.basket-card__h2 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}
.basket-card__span {
  font-size: 16px;
  color: #fc5a5a;
  display: block;
  margin-bottom: 12px;
}
.card-bth {
  color: #fff; /* цвет текста */
  text-decoration: none; /* убирать подчёркивание у ссылок */
  user-select: none; /* убирать выделение текста */
  background: rgb(212, 75, 56); /* фон кнопки */
  padding: 0.7em 1.5em; /* отступ от текста */
  outline: none; /* убирать контур в Mozilla */
  border: none;
  margin-left: 10px;
}
.card-bth:hover {
  background: rgb(232, 95, 76);
} /* при наведении курсора мышки */
.card-bth:active {
  background: rgb(152, 15, 0);
} /* при нажатии */
</style>