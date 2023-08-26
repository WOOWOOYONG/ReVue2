<template>
  <main>
  <div class="hello">
    <h1>Hello I'm {{ myName }} studying {{ study }}</h1>
    <p style="font-weight: 600;">{{ count }} Days</p>
    <!-- <button type="button" @click="decrement">minus</button>
    <button type="button" @click="increment">plus</button> -->
    <button type="button" @click="decrement(n)">minus</button>
    <button type="button" @click="increment(n)">plus</button>
    <button type="button" @click="randomDecrement(randomNum)">random minus</button>
    <button type="button" @click="randomIncrement(randomNum)">random plus</button>
    <!-- <button type="button" @click="PLUS(n)">+</button>
    <button type="button" @click="MINUS(n)">-</button> -->
  </div>
  <p>我是來自mixin的 {{ code }}</p>
  </main>

</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';
import secret from '@/mixins/secret';

export default {
  name: 'CountItem',
  data() {
    return {
      n: 1,
      randomNum: Math.floor(Math.random() * 100),
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
    // ...mapGetters({todoNum: 'todoNum'})
    ...mapGetters(['todoNum']),
  },
  methods: {
    // increment() {
    //   this.$store.dispatch('plus', this.n);
    // },
    // decreement() {
    //   this.$store.dispatch('minus', this.n);
    // },

    // 使用mapMutations生成對應的方法，會調用commit去操作mutations
    ...mapMutations({ increment: 'PLUS', decrement: 'MINUS' }),
    // ...mapMutations(['PLUS', 'MINUS']),
    ...mapActions({ randomDecrement: 'randomPlus', randomIncrement: 'randomMinus' }),
    // ...mapActions(['randomPlus', 'randomMinus']),

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
