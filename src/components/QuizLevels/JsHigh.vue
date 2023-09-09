<template>
    <div class="main-container">
      <Nav />
      <div class="questions-container">
        <div class="start" v-if="this.Start === false">
          <h1>Are you ready?</h1>
          <button @click="start">start</button>
        </div>
        <div class="questions" v-else>
          <h1>{{question}}</h1>
          <div class="answers-container">
            <div class="answer answer1" @click="checkbox1">
              <input type="checkbox" class="checkbox" name="checkbox1" id="checkbox-ans1" @click="checkbox1">
              <h6 id="answer1">{{ answer1 }}</h6>
            </div>
            <div class="answer answer2" @click="checkbox2">
              <input type="checkbox" class="checkbox" id="checkbox-ans2" @click="checkbox2">
              <h6 id="answer2">{{ answer2 }}</h6>
            </div>
            <div class="answer answer3" @click="checkbox3">
              <input type="checkbox" class="checkbox" id="checkbox-ans3" @click="checkbox3">
              <h6 id="answer3">{{ answer3 }}</h6>
            </div>
          </div>
          <div class="next-container">
            <div></div>
            <div class="question-number">
              <h4>{{ questionNumber }} / 20</h4>
            </div>
            <div class="next-button-container">
              <button @click="next">{{ buttonName }}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import JsQuestions from "../QuizLevels/JsQuestions.json";
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
        EasyQuestions: JsQuestions,
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correctAnswer: "",
        Start: false,
        questionNumber: 1,
        buttonName: "Next",
        points: localStorage.getItem("points") || 0,
      };
    },
    setup() {
      const router = useRouter();
  
      return {
        router
      };
    },
    watch: {
      questionNumber(newNumber) {
        if (newNumber === 20) {
          this.buttonName = "Finish";
        }
      },
      points(newPoints) {
        localStorage.setItem("points", newPoints);
      }
    },
    methods: {
      start() {
        this.points = 0
        const randomNumber = Math.floor(Math.random() * 100);
        for (const item of this.EasyQuestions.JavascriptQuestions) {
          if (item.id === randomNumber) {
            this.question = item.question;
            this.answer1 = item.answer1;
            this.answer2 = item.answer2;
            this.answer3 = item.answer3;
            this.correctAnswer = item.correctAnswer;
            this.Start = true
            break;
          }
        }
      },
      next() {
        if (document.getElementById("checkbox-ans1").checked || document.getElementById("checkbox-ans2").checked || document.getElementById("checkbox-ans3").checked) {
          if (this.questionNumber < 20) {
          const randomNumber = Math.floor(Math.random() * 100);
          for (const item of this.EasyQuestions.JavascriptQuestions) {
            if (item.id === randomNumber) {
              this.question = item.question;
              this.answer1 = item.answer1;
              this.answer2 = item.answer2;
              this.answer3 = item.answer3;
              this.correctAnswer = item.correctAnswer;
              this.questionNumber++;
              document.getElementById("checkbox-ans1").checked = false;
              document.getElementById("checkbox-ans2").checked = false;
              document.getElementById("checkbox-ans3").checked = false;
              document.getElementsByClassName("answer1")[0].style.borderColor = "#575757";
              document.getElementsByClassName("answer2")[0].style.borderColor = "#575757";
              document.getElementsByClassName("answer3")[0].style.borderColor = "#575757";
              break;
            }
          }
        } else if (this.questionNumber === 20) {
          this.router.push("/ChooseQuiz/Easy/Results");
        }
        } else {
          alert("You have to answer the question");
        }
      },
      checkbox1() {
        document.getElementById("checkbox-ans2").checked = false;
        document.getElementById("checkbox-ans1").checked = true;
        document.getElementById("checkbox-ans3").checked = false;
        document.getElementsByClassName("answer1")[0].style.borderColor = "#6A57CD";
        document.getElementsByClassName("answer2")[0].style.borderColor = "#575757";
        document.getElementsByClassName("answer3")[0].style.borderColor = "#575757";
        if (this.answer1 === this.correctAnswer) {
          if (document.getElementById("checkbox-ans1").checked) {
            this.points++;
          } else {
            this.points--;
          }
        }
      },
      checkbox2() {
        document.getElementById("checkbox-ans1").checked = false;
        document.getElementById("checkbox-ans2").checked = true;
        document.getElementById("checkbox-ans3").checked = false;
        document.getElementsByClassName("answer1")[0].style.borderColor = "#575757";
        document.getElementsByClassName("answer2")[0].style.borderColor = "#6A57CD";
        document.getElementsByClassName("answer3")[0].style.borderColor = "#575757";
        if (this.answer2 === this.correctAnswer) {
          if (document.getElementById("checkbox-ans2").checked) {
            this.points++;
          } else {
            this.points--;
          }
        }
      },
      checkbox3() {
        document.getElementById("checkbox-ans2").checked = false;
        document.getElementById("checkbox-ans3").checked = true;
        document.getElementById("checkbox-ans1").checked = false;
        document.getElementsByClassName("answer1")[0].style.borderColor = "#575757";
        document.getElementsByClassName("answer2")[0].style.borderColor = "#575757";
        document.getElementsByClassName("answer3")[0].style.borderColor = "#6A57CD";
        if (this.answer3 === this.correctAnswer) {
          if (document.getElementById("checkbox-ans3").checked) {
            this.points++;
          } else {
            this.points--;
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
    .main-container {
      background-color: #161618;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .start {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 80px;
    }

    .start > h1 {
      color: white;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 50px;
    }

    .start > button {
      background-color: #6A57CD;
      font-size: 25px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      border: none;
    }
    .questions {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .questions > h1 {
      color: white;
      font-family: "Poppins";
      font-weight: 300;
      font-size: 25px;
      text-align: center;
      padding: 0px 20px;
      padding-bottom: 50px;
    }
    .answers-container {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .answer {
      display: flex;
      padding: 0px 40px;
      border: solid 2px #575757;
      border-radius: 5px;
      align-items: center;
      height: 100px;
      cursor: pointer;
    }

    .answer > h6 {
      color: white;
      font-family: "Poppins";
      font-size: 20px;
      font-weight: 500;
    }
    .checkbox {
      display: none;
    }

    .checkbox {
      width: 20px;
      height: 20px;
    }

    .next-container {
      width: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .question-number {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .question-number > h4 {
      color: white;
      font-weight: 200;
      font-size: 17px;
      font-family: "Poppins";
    }

    .next-button-container {
      display: flex;
      align-items: center;
      justify-content: right;
      padding-right: 10px;
    }

    .next-button-container > button {
      background-color: #6A57CD;
      font-size: 17px;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      border: none;
    }

    @media (max-width: 630px) {
      .answer > h6 {
        font-size: 13px;
      }
      
      .answer {
        gap: 30px;
      }

      .answer > input {
        width: 10px;
        height: 10px;
      }

      .answers-container {
        width: 90%;
      }

      .next-container {
        width: 90%;
      }
    }
  </style>
  