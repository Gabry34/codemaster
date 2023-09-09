<template>

       <div class="main">
            <Nav />
            <div class="home-container">
              <div class="container">
              <h2>Welcome to <span>CodeMaster</span>!</h2>
              <p>Are you ready to put your coding skills to the test? Whether you're a beginner or a seasoned developer, our interactive quiz will challenge your knowledge of HTML, CSS, and JavaScript. Step up to the plate and see how well you fare in this exciting coding adventure!</p>
              <button class="get-started-button" @click="navigateToChooseQuiz">Get Started</button>
              </div>
              <div class="image-container">
                <img src="../assets/coding.svg">
              </div>
            </div>
            <Footer />
       </div> 
    
</template>

<script>
import Nav from "./Nav.vue"
import Footer from "./Footer.vue"
import { useRouter } from "vue-router";

export default {
  components: {
    Nav,
    Footer
  },
  setup() {
    const router = useRouter();

    const navigateToChooseQuiz = () => {
      router.push("/ChooseQuiz");
    };

    return {
      navigateToChooseQuiz
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
.main {
  min-width: 100%;
  min-height: 100vh;
  background: radial-gradient(100% 57.69% at 50% 15%, rgba(106, 87, 205, 0.2) 0%, rgba(134, 11, 179, 0) 100%);
  background-color: #161618;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.container {
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  gap: 10px;
}

.container > p {
  margin: 0;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.4;
  padding-bottom: 30px;
  padding-right: 130px;
}

.container > h2 {
  background: linear-gradient(180deg, #6A57CD 14.32%, #9481f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: "Poppins";
  font-weight: 300;
  margin: 0;
  font-size: 90px;
  line-height: 90px;
}

h2 > span {
  font-weight: 400;
}

.get-started-button {
  background-color: #6A57CD;
  border: none;
  width: 150px;
  color: white;
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 300;
  padding: 10px 0px;
  border-radius: 5px;
  cursor: pointer;
}

.get-started-button:hover {
  border: solid 2px #6A57CD;
  background-color: transparent;
  height: 50.26px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container > img {
  width: 500px;
}

@media (max-width: 1200px) {
  .home-container {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-top: 50px;
    padding-bottom: 50px;
    gap: 50px;
  }

  .container {
    padding: 0px 5px;
    align-items: center;
  }

  .container > h2 {
    font-size: 60px;
    text-align: center;
  }

  .container > p {
    padding: 0;
    text-align: center;
    padding-bottom: 10px;
  }

  .image-container > img {
    width: 400px;
  }
}
</style>