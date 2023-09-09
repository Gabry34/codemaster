<template>
  <div class="main-result-container">
      <Nav />
      <div class="result-container">
          <h1>{{ result }}</h1>
          <div class="points-container">
            <h2>{{ points }} / 15</h2>
            <h3>Right answers</h3>
          </div>
          <button @click="navigateToChooseQuiz">{{ button }}</button>
      </div>
      <Footer />
  </div>
</template>

<script>
import Nav from "../Nav.vue";
import Footer from "../Footer.vue";
import { useRouter } from "vue-router";

export default {
components: {
  Nav,
  Footer
},
data() {
  return {
    points: 0,
    result: "",
    button: ""
  };
},
setup() {
    const router = useRouter();

    const navigateToChooseQuiz = () => {
      router.push("/ChooseQuiz");
    };

    return {
      navigateToChooseQuiz
    }
  },
mounted() {
  this.points = parseInt(localStorage.getItem("points")) || 0;
  this.updateResult();
},
methods: {
  updateResult() {
    if (this.points > 10) {
      this.result = "Quiz passed";
      this.button = "Do another quiz"
    } else {
      this.result = "Quiz not passed";
      this.button = "Retry"
    }
  }
}
}
</script>

<style scoped>
  .main-result-container {
      width: 100%;
      min-height: 100vh;
      background-color: #202123;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .result-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 790px;
    gap: 50px;
  }

  .result-container > h1 {
    font-size: 70px;
    color: white;
    font-family: "Poppins";
    font-weight: 200;
    margin: 0;
    padding: 50px;
    text-align: center;
  }

  .result-container > button {
    background-color: #6A57CD;
    padding: 10px;
    border-radius: 7px;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .points-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }

  .points-container > h2 {
    color: white;
    font-size: 70px;
    margin: 0;
    font-family: "Poppins";
    font-weight: 300;
  }

  .points-container > h3 {
    color: white;
    font-family: "Poppins";
    font-weight: 200;
  }
</style>
