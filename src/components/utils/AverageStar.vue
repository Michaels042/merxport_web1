<template>
    <span class="starRating" v-if="user">
        <span v-for="n in star" :key="n">
            <i class="fa fa-star"></i>
        </span>
        <span v-if="decimal !== 0 && decimal >= 0.5">
            <i class="fa fa-star-half-o" ></i>
        </span>
        <i class="fa fa-star-o" v-for="s in remainingStar" :key="s+10"></i>
    </span>
</template>

<script>
export default {
    props: ['user', 'review'],
    data() {
        return {

        }
    },
    computed: {
        computedUser() {
            return this.user;
        },
        decimal() {
            if (this.review) {
                return this.computedUser ? this.computedUser.stars % 1 : 0;
            }
            return this.computedUser ? this.computedUser.averageStar % 1 : 0;
        },
        star() {
            if (this.review) {
                return this.computedUser ? Math.floor(this.computedUser.stars) : 0;
            }
            return this.computedUser ? Math.floor(this.computedUser.averageStar) : 0;
        },
        remainingStar() {
            let count = 0;
            if (this.star !== 0) {
                count = this.star;
            }
            if (this.decimal !== 0 && this.decimal >= 0.5 ) {
                count++;
            }
            return 5 - count;
        }
    },
}
</script>

<style>

</style>
