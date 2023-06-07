const app = Vue.createApp({
  data() {
    return {
      alertMessage: "hello my name is Cristiano Ronaldo",
      keydownMessage: "",
      keydownOutput: "",
      name: "",
      fathersName: "",
      // fullName: "",
    };
  },
  computed: {
    fullName() {
      if (this.name === "" && this.fathersName === "") {
        return "";
      }
      return this.name + " " + this.fathersName;
    },
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.fathersName;
    //   }
    // },
    // fathersName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
    //
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Elias";
    },
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
