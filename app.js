const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 10,
      inputValue: "",
      confirmedName: "",
    };
  },
  methods: {
    setConfirmedName() {
      this.confirmedName = this.inputValue;
    },

    setName(event, fname) {
      // event.preventDefault();
      this.inputValue = event.target.value + " " + fname;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
  },
});

app.mount("#events");
