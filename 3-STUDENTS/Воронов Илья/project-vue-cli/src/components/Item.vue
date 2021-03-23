<template>
  <div>
    <template v-if="type == 'catalog'">
      <div class="catalog-item">
        <div class="product-item">
          <img :src="item.productImg" alt="item.productId" />
          <div class="hover-bg">
            <button name="add" @click="add(item)">
              <i class="fas fa-shopping-cart"></i> Add to cart
            </button>
          </div>
          <div class="product-item__desc">
            <div class="product-item__name" name="bascket-click">
              <a href="#">{{ item.productName }}</a>
            </div>
            <div class="product-item__detail">
              <div class="product-item__price">${{ item.productPrice }}.00</div>
              <div class="product-item__rating">
                <i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i><i class="fas fa-star"></i
                ><i class="fas fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type == 'basket'">
      <div class="basket-items">
        <div class="basket-item" :key="item.productId">
          <img :src="item.productImg" alt="item.productId" />
          <div class="basket-item-details">
            <a href="#">{{ item.productName }}</a>
            <div>
              <div>
                <input type="text" id="basket-quantity" :value="item.amount" />
                <span>
                  X ${{ item.productPrice }}.00 - $<output name="result-item">{{
                    item.amount * item.productPrice
                  }}</output></span
                >
              </div>
            </div>
          </div>
          <button
            @click.prevent="$emit('del', item.productId)"
            name="remove"
            class="fas fa-times-circle"
          ></button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: "catalog",
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    add(item) {
      //this.$parent.$parent.$refs.bask.add(item);
      this.$store.dispatch("changeBasketItems", { item, action: undefined });
    },
  },
};
</script>

<style>
</style>