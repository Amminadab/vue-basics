const app = Vue.createApp({
  data() {
    return {
      alertMessage: "hello my name is Cristiano Ronaldo",
      keydownMessage: "",
      keydownOutput: "",
      name: "",
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
    setName(e) {
      this.name = e.target.value;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#assignment");
