<template>
  <div>
    <div class="loadmore">
      <div class="loader_wrap">
        <!-- <span class="spinner"></span> -->
        <span :class="spinner"></span>
        <span class="info_text" v-if="!smallSpinner">Please hold on...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['smallSpinner'],
  data() {
    return {};
  },
  computed: {
    spinner() {
      return this.smallSpinner ? 'smallSpinner' : 'spinner';
    }
  }
};
</script>
