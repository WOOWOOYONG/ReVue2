const secret = {
  data() {
    return {
      code: '777',
    };
  },
  methods: {
    showSecret() {
      console.log('你發現我的Mixin練習了！');
    },
  },
  mounted() {
    console.log('Hello from Mixin');
  },
};

export default secret;
