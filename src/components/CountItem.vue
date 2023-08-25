<template>
  <main>
  <div class="hello">
    <h1>Hello I'm {{ myName }} studying {{ study }}</h1>
    <p>{{ count }} Days</p>
    <button type="button" @click="decreasement">minus</button>
    <button type="button" @click="increment">plus</button>
  </div>
  <p>我是來自mixin的 {{ code }}</p>
  </main>

</template>

<script>
import { mapState } from 'vuex';
import secret from '@/mixins/secret';

export default {
  name: 'CountItem',
  data() {
    return {
      n: 1,
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  computed: {
    // ...mapState({
    //   count: 'count',
    //   myName: 'myName',
    //   study: 'study',
    // }),
    ...mapState(['count', 'myName', 'study']),
  },
  methods: {
    increment() {
      this.$store.dispatch('plus', this.n);
    },
    decreasement() {
      this.$store.dispatch('minus', this.n);
    },
  },
  mixins: [secret],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin-right: 4px;
  cursor: pointer;
}
</style>
