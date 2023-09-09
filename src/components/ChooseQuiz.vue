<template>

        <div class="main">
            <Nav />
            <div class="choose-quiz-container">
                <h1>choose your quiz</h1>
                <div class="choose">
                    <div class="html option">
                        <h2 class="option-title">HTML</h2>
                        <div class="choose-level-container">
                            <h3>LEVEL</h3>
                            <button class="level-button" @click="navigateToHtmlEasy">Low</button>
                            <button class="level-button" @click="navigateToHtmlMedium">Medium</button>
                            <button class="level-button" @click="navigateToHtmlHigh">High</button>
                        </div>
                    </div>
                    <div class="css option">
                        <h2 class="option-title">CSS</h2>
                        <div class="choose-level-container">
                            <h3>LEVEL</h3>
                            <button class="level-button" @click="navigateToCssEasy">Low</button>
                            <button class="level-button" @click="navigateToCssMedium">Medium</button>
                            <button class="level-button" @click="navigateToCssHigh">High</button>
                        </div>
                    </div>
                    <div class="js option">
                        <h2 class="option-title">JS</h2>
                        <div class="choose-level-container">
                            <h3>LEVEL</h3>
                            <button class="level-button" @click="navigateToJsEasy">Low</button>
                            <button class="level-button" @click="navigateToJsMedium">Medium</button>
                            <button class="level-button" @click="navigateToJsHigh">High</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
import { useRouter } from "vue-router";

export default {
    components: {
        Nav,
        Footer
    },
    
    setup() {
        const router = useRouter();

        const navigateToHtmlEasy = () => {
            router.push("/ChooseQuiz/Html/Easy");
        };

        const navigateToHtmlMedium = () => {
            router.push("/ChooseQuiz/Html/Medium");
        };

        const navigateToHtmlHigh = () => {
            router.push("/ChooseQuiz/Html/High");
        };

        const navigateToCssEasy = () => {
            router.push("/ChooseQuiz/Css/Easy");
        };

        const navigateToCssMedium = () => {
            router.push("/ChooseQuiz/Css/Medium");
        };

        const navigateToCssHigh = () => {
            router.push("/ChooseQuiz/Css/High");
        };

        const navigateToJsEasy = () => {
            router.push("/ChooseQuiz/Js/Easy");
        };

        const navigateToJsMedium = () => {
            router.push("/ChooseQuiz/Js/Medium");
        };

        const navigateToJsHigh = () => {
            router.push("/ChooseQuiz/Js/High");
        };

        return {
            navigateToHtmlEasy,
            navigateToHtmlMedium,
            navigateToHtmlHigh,
            navigateToCssEasy,
            navigateToCssMedium,
            navigateToCssHigh,
            navigateToJsEasy,
            navigateToJsMedium,
            navigateToJsHigh
        };
    }
}
</script>

<style scoped>
    .main {
        width: 100%;
        min-height: 100vh;
        background-color: #161618;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 122px;
    }

    .choose-quiz-container {
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 80px;
    }

    .choose-quiz-container > h1 {
        color: white;
        font-family: "Poppins";
        font-weight: 300;
        font-size: 48px;
        margin: 0;
    }

    .choose {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
    }

    .option {
        width: 250px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .choose-level-container {
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 1px #575757;
        border-radius: 10px;
        gap: 30px;
    }

    .choose-level-container > h3 {
        font-family: "Poppins";
        font-weight: 300;
        font-size: 20px;
        color: white;
        margin: 0;
        padding-top: 20px;
    } 

    .option-title {
        color: white;
        font-family: "Poppins";
        font-weight: 300;
        font-size: 30px;
        margin: 0;
    }

    .level-button {
        background-color: transparent;
        border: solid 1px #6A57CD;
        border-radius: 5px;
        color: white;
        font-family: "Poppins";
        font-weight: 200;
        padding: 10px;
        font-size: 15px;
        width: 70%;
        cursor: pointer;
    }

    .level-button:hover {
        opacity: 0.7;
    }

    @media (max-width: 1135px) {
        .choose {
            flex-direction: column;
        }

        .option {
            width: 80%;
        }
    }
</style>