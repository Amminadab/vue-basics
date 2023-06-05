const App = Vue.createApp({
  data() {
    return {
      vueLink: "www.amminadab.com",
      courseGoal: "Finish these course",
      courseGoalA: "don't learn angular use react",
      courseGoalB: "learn Vue",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

App.mount("#user-goal");
