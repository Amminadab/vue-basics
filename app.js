const app = Vue.createApp({
  data() {
    return {
      name: "Amminadab",
      age: 22,
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/Mercedes-Benz-G-Class/6607/front-left-side-47.jpg?imwidth=210&impolicy=resize",
      inputValue: "",
    };
  },
  methods: {
    ageInFiveYears() {
      return 5 + this.age;
    },
    favoriteNumber() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 1;
      } else {
        return 0;
      }
    },
  },
});

app.mount("#assignment");
