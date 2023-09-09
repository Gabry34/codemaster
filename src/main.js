import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from "./components/Home.vue";
import ChooseQuiz from "./components/ChooseQuiz.vue";
import HtmlEasy from "./components/QuizLevels/HtmlEasy.vue";
import HtmlMedium from "./components/QuizLevels/HtmlMedium.vue";
import HtmlHigh from "./components/QuizLevels/HtmlHigh.vue";
import CssEasy from "./components/QuizLevels/CssEasy.vue";
import CssMedium from "./components/QuizLevels/CssMedium.vue";
import CssHigh from "./components/QuizLevels/CssHigh.vue";
import JsEasy from "./components/QuizLevels/JsEasy.vue";
import JsMedium from "./components/QuizLevels/JsMedium.vue";
import JsHigh from "./components/QuizLevels/JsHigh.vue";
import ResultsEasy from "./components/results/resultsEasy.vue";
import ResultsMedium from "./components/results/resultsMedium.vue";
import ResultsHigh from "./components/results/resultsHigh.vue";
import AboutUs from "./components/AboutUs.vue";
import Features from "./components/Features.vue"

const routes = [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: "/AboutUs",
      component: AboutUs,
      name: "AboutUs"
    },
    {
      path: "/Features",
      component: Features,
      name: "Features"
    },
    {
      path: "/ChooseQuiz",
      component: ChooseQuiz,
      name: "ChooseQuiz"
    },
    {
      path: "/ChooseQuiz/Html/High",
      component: HtmlHigh,
      name: "HtmlHigh"
    },
    {
      path: "/ChooseQuiz/Html/Easy",
      component: HtmlEasy,
      name: "HtmlEasy"
    },    
    {
      path: "/ChooseQuiz/Html/Medium",
      component: HtmlMedium,
      name: "HtmlMedium"
    },    
    {
      path: "/ChooseQuiz/Css/Easy",
      component: CssEasy,
      name: "CssEasy"
    },    
    {
      path: "/ChooseQuiz/Css/Medium",
      component: CssMedium,
      name: "CssMedium"
    },    
    {
      path: "/ChooseQuiz/Css/High",
      component: CssHigh,
      name: "CssHigh"
    },    
    {
      path: "/ChooseQuiz/Js/Easy",
      component: JsEasy,
      name: "JsEasy"
    },    
    {
      path: "/ChooseQuiz/Js/Medium",
      component: JsMedium,
      name: "JsMedium"
    },    
    {
      path: "/ChooseQuiz/Js/High",
      component: JsHigh,
      name: "JsHigh"
    },
    {
      path: "/ChooseQuiz/Easy/Results",
      component: ResultsEasy,
      name: "ResultsEasy"
    },
    {
      path: "/ChooseQuiz/Medium/Results",
      component: ResultsMedium,
      name: "ResultsMedium"
    },
    {
      path: "/ChooseQuiz/High/Results",
      component: ResultsHigh,
      name: "ResultsHigh"
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

const app = createApp(App);
app.use(router);
app.mount('#app');

export default app;