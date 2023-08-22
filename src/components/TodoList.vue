<template>
  <div>
    <input type="text" placeholder="Add Todo" aria-label="TodoInput" v-model="todoInput" />
    <button type="button" @click="addTodo">Add</button>
    <div class="todo">
      <p>Todos: {{ todos }}</p>
      <p>(From Getters) TodoNum: {{ todoNum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: this.$store.state.todos,
      todoInput: '',
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.todoInput);
      this.todoInput = '';
    },
  },
  computed: {
    todoNum() {
      return this.$store.getters.todoNum;
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
.todo {
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
