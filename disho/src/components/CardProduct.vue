<template>
  <div v-on:mouseleave="btnStatus = false" v-on:mousemove="btnStatus = true" class="card-product">
    <img v-bind:src="img" alt="" />
    <p>
      <span class="title-product">{{ name }} </span>
      <br />
      <span class="price">${{ price }} </span>
    </p>
    <button v-on:click="$router.push(`/shop/product/${id}`)" v-show="btnStatus" class="btn-green">
      <fa icon="cart-shopping"></fa> Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  props: ["name", "img", "price", "id"],
  components: {},
  data() {
    return {
      btnStatus: false,
    };
  },
  methods: {
    viewBtn() {
      this.btnStatus = true;
    },
  },
};
</script>

<style lang="scss">
.card-product {
  height: 50vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 70%;
    width: 100%;
    object-fit: fill;
    border-radius: 1rem;
  }
  button {
    margin-top: 5%;
    letter-spacing: 2px;
    transition-delay: 2s;
  }
}
.title-product {
  color: var(--colorDisho);
  font-size: 1rem;
  font-family: viga;
  font-weight: 400px;
}
.price {
  font-family: PT-Sans-Regular;
  font-size: 0.8rem;
  color: #fc4b4e;
  font-weight: 700;
}
@media (max-width: 768px) {
  .card-product {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .card-product {
    width: 40%;
  }
}
</style>
