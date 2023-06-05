const app = Vue.createApp({
  data() {
    return {
      alertMessage: "hello my name is Cristiano Ronaldo",
      keydownMessage: "",
      keydownOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    handleKeydownInput(e) {
      this.keydownMessage = e.target.value;
    },
    handlekeyOutput() {
      this.keydownOutput = this.keydownMessage;
    },
  },
});

app.mount("#assignment");
