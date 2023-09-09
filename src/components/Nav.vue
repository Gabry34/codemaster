<template>

        <div class="Nav">
            <div class="logo">
                <img src="../assets/logo.svg" alt="" @click="navigateToHome">
            </div>
            <div class="features">
                <p @click="navigateToAboutUs">About Us</p>
                <p @click="navigateToFeatures">Features</p>
            </div>
            <div>

            </div>
        </div>
    
</template>

<script>
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();

        const navigateToHome = () => {
            router.push("/");
        };

        const navigateToAboutUs = () => {
            router.push("/AboutUs");
        };

        const navigateToFeatures = () => {
            router.push("/Features");
        };

        return {
            navigateToHome,
            navigateToAboutUs,
            navigateToFeatures
        };
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    .Nav {
        height: 40px;
        display: flex;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0px 100px;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo > img {
        height: 25px;
        cursor: pointer;
    }

    .features {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        font-family: "Poppins";
        color: white;
    }

    .features > p {
        margin: 0;
        cursor: pointer;
        font-size: 15px;
    }

    @media (max-width: 810px) {
        .Nav {
            display: grid;
            grid-template-columns: none;
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 30px;
            padding: 10px 20px;
        }
    }
</style>