<script>
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields(
      ['fieldName', 'fieldJob', 'fieldPhone'],
    ),
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) {
        console.log('表單資料：', this.form);
      } else {
        console.log('表單驗證失敗');
      }
    },
    validateForm() {
      // 簡單的表單驗證
      if (!this.fieldName || !this.fieldJob || !this.fieldPhone) {
        return false;
      }
      return true;
    },
  },
};
</script>

<template>
<div>
  <h3>使用vuex-map-fields，改變表格中的值，Vuex store當中的值也會跟著改變</h3>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="nickname">暱稱:
      <input type="text" id="nickname" v-model="fieldName">
      </label>
    </div>
    <div>
      <label for="job">職業:
      <input type="text" id="job" v-model="fieldJob">
      </label>
    </div>
    <div>
      <label for="phone">電話:
      <input type="text" id="phone" v-model="fieldPhone">
      </label>
    </div>
    <button type="submit">提交</button>
  </form>
</div>
</template>
<style scoped>
  form {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 4px;
  }
  label {
    display: block;
    text-align: left;
    font-weight: bold;
    margin-bottom: 16px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  button {
    background-color: #7e8286;
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  button:hover {
    background-color: #cdd0d2;
  }
</style>
