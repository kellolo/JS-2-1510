<template>
  <div>
    <input type="checkbox" id="basket" />
    <label @click="show = !show">
      <img src="@/assets/img/header/cart.png" alt="cart" />
      <div class="num-cart">
        <span>{{ totalItemsBasket() }}</span>
      </div>
    </label>
    <div class="basket-drop" v-show="show">
      <Item
        v-for="item of items"
        type="basket"
        :key="item.productId"
        :item="item"
        @del="remove"
      />
      <div v-if="items == 0" class="basket-empty">
        <span>Корзина пуста</span>
      </div>
      <div class="basket-total">
        <p>TOTAL</p>
        <p>
          $
          <output name="result">{{ totalPriceBasket() }}</output>
        </p>
      </div>
      <div class="basket-btn">
        <button type="submit">Checkout</button>
        <button type="reset">Go to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
//import { get } from "@/core/requests";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      //items: [],
      url:
        //"https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand/basket.json",
        "/api/basket",
      show: false,
    };
  },
  components: { Item },
  methods: {
    add(item) {
      let find = this.items.find(
        (basketItem) => basketItem.productId == item.productId
      );

      if (!find) {
        let newItem = Object.assign({}, item, { amount: 1 });
        this.$store.dispatch("changeBasketItems", { item: newItem, action: 1 });
      } else {
        //find.amount++;
        this.$store.dispatch("changeBasketItems", {
          item: find,
          action: 3,
          amount: 1,
        });
      }
    },
    remove(id) {
      let find = this.items.find((basketItem) => basketItem.productId == id);

      if (find.amount > 1) {
        //find.amount--;
        this.$store.dispatch("changeBasketItems", {
          item: find,
          action: 3,
          amount: -1,
        });
      } else {
        //this.items.splice(this.items.indexOf(find), 1);
        this.$store.dispatch("changeBasketItems", {
          item: find,
          action: 2,
        });
      }
    },
    totalPriceBasket() {
      let sum = 0;
      for (let item of this.items) {
        sum += item.productPrice * item.amount;
      }
      return sum;
    },
    totalItemsBasket() {
      let qty = 0;
      for (let item of this.items) {
        qty += item.amount;
      }
      return qty;
    },
  },
  async mounted() {
    try {
      //this.items = (await get(this.url)).content;
      this.$store.dispatch("loadBasket", this.url);
    } catch (err) {
      console.log(err);
    } finally {
      //console.log(await this._get(this.basket.url));
    }
  },
  computed: {
    ...mapGetters({ items: "basket_getter" }),
  },
};
</script>

<style>
</style>