const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 10,
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
