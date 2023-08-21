<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CountItem />
  </div>
</template>

<script>
// @ is an alias to /src
import CountItem from '@/components/CountItem.vue';

export default {
  name: 'HomeView',
  components: {
    CountItem,
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  border-radius: 24px;
}
</style>
