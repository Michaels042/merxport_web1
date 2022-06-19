<template>
  <button class="btn">{{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
        },
    },
};
</script>

<style>

</style>