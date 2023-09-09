<template>

        <div class="main-container-features">
            <Nav />
            <div class="offers-container">
                <h1>What We Offer</h1>
                <div class="offers">
                    <div class="offer">
                        <img src="../assets/user-expert-svgrepo-com.svg">
                        <p>Expertly Curated Content: Our team of experienced web developers carefully curates the quiz questions to ensure they are relevant, challenging, and up-to-date with the latest industry standards.</p>
                    </div>
                    <div class="offer">
                        <img src="../assets/user-hand-up-svgrepo-com.svg">
                        <p>User-Friendly Interface: Navigating our site is a breeze. Our intuitive design makes taking quizzes and reviewing results a seamless experience.</p>
                    </div>
                    <div class="offer">
                        <img src="../assets/sensor-on-svgrepo-com.svg">
                        <p>Interactive Learning: We believe that learning is most effective when it's fun and interactive. Our quizzes are designed to keep you engaged, with real-time feedback and explanations for each question.</p>
                    </div>
                    <div class="offer">
                        <img src="../assets/lock-open-svgrepo-com.svg">
                        <p>Free and Accessible: Learning should be accessible to all. That's why our quiz site is completely free to use, giving everyone an equal opportunity to explore and expand their coding knowledge.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    
</template>

<script>
import Nav from "./Nav.vue"
import Footer from "./Footer.vue"

export default {
  components: {
    Nav,
    Footer
  },
}
</script>

<style scoped>
    .main-container-features {
        min-width: 100%;
        min-height: 100vh;
        background: radial-gradient(100% 57.69% at 50% 15%, rgba(106, 87, 205, 0.2) 0%, rgba(134, 11, 179, 0) 100%);
        background-color: #161618;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .main-container-features > h1 {
        margin: 0;
        
    }

    .offers-container {
        width: 88%;
        min-height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 100px;
        gap: 40px;
    }

    .offers-container > h1 {
        color: white;
        font-family: "Poppins";
        font-weight: 300;
        font-size: 50px;
    }

    .offers {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        padding-bottom: 40px;
    }

    .offer {
        display: flex;
        align-items: center;
        gap: 30px;
        background-color: rgb(226, 215, 215);
        padding: 30px;
        border-radius: 5px;
    }

    .offer > img {
        width: 40px;
    }

    .offer > p {
        font-family: "Poppins";
        font-weight: 300;
        font-size: 20px;
    }

    @media (max-width: 1300px) {
        .offers {
            grid-template-columns: 1fr;
            width: 90%;
        }

        .offers-container {
            padding: 0px;
            width: 100%;
        }
    }
</style>