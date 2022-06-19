<template>
  <span class="starRating">
    <i class="fa fa-star" v-for="s in fullStars" :key="'full' + s"></i>
    <i class="fa fa-star-half-o" v-for="s in halfStars" :key="'half' + s"></i>
    <i class="fa fa-star-o" v-for="s in emptyStars" :key="'empty' + s"></i>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Number
    }
  },
  computed: {
    fullStars() {
      return Math.floor(this.value);
    },
    halfStars() {
      return this.value % 5 > 0 ? 1 : 0;
    },
    emptyStars() {
      return 5 - this.fullStars - this.halfStars;
    }
  }
};
</script>