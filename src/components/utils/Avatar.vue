<template>
  <!-- <div class="user_info_avi" :class="{'avi_lg': size === 'large'}"> -->
  <div class="user_info_avi" :class="avatarSize">
    <div class="defined-avatar" v-if="user.avatar">
      <span @click="openImage" style="cursor: pointer;">
        <img :src="user.avatar.thumb" style="width: 100%; height: 100%;" />
      </span>
    </div>
    <span v-else class="default_avi bg-blue">
      {{user ? user.firstName.charAt(0).toUpperCase() : '*'}}
      {{user ? user.lastName.charAt(0).toUpperCase() : '*'}}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: false,
      type: Object
    },
    size: {
      required: false,
      default: "small",
      enum: ["small", "large", "medium"]
    },
    color: {
      required: false,
      default: "red",
      enum: ["red", "blue", "green", "orange"]
    }
  },
  data() {
    return {};
  },
  computed: {
    avatarSize() {
      if(this.size === 'medium') {
        return 'avi_md'
      }
      if(this.size === 'large') {
        return 'avi_lg'
      }
      return ''
    }
  },
  methods: {
    openImage() {
      window.$("#pictureModal").modal("show");
    }
  }
};
</script>

<style scoped>
.defined-avatar {
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  overflow: hidden;
}
</style>
