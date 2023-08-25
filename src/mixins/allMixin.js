const allMixin = {
  data() {
    return {
      allMixin: '全域註冊mixin',
    };
  },
  mounted() {
    console.log('這是全域註冊的mixin');
  },
};

export default allMixin;
