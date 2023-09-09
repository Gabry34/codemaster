<template>

        <div class="container-main">
            <Nav />
            <div class="main-container-about-us">
                <h1>About Us</h1>
                <div class="image-container img" >
                    <img src="../assets/persone-al-pc.jpeg">
                    <p>Welcome to our coding haven! At CodeMaster, we are passionate about empowering individuals to master the art of web development. Our platform is dedicated to providing an interactive and enriching experience for coding enthusiasts, students, and aspiring web developers alike.</p>
                </div>
                <h2>Who We Are?</h2>
                <div class="image-container-2 img">
                    <p>We are a team of tech enthusiasts, educators, and developers who believe that knowledge should be accessible and enjoyable for everyone. Our collective goal is to make learning HTML, CSS, and JavaScript an engaging and rewarding journey. By creating a dynamic quiz platform, we aim to foster a community of like-minded individuals who share a love for coding and continuous improvement.</p>
                    <img src="../assets/pexels-photo-3182835.webp">
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

    .container-main {
        width: 100%;
        min-height: 100vh;
        background: radial-gradient(100% 57.69% at 50% 15%, rgba(106, 87, 205, 0.2) 0%, rgba(134, 11, 179, 0) 100%);
        background-color: #161618;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .main-container-about-us {
        width: 88%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 50px 100px;
    }

    .main-container-about-us > h1 {
        color: white;
        font-family: "Poppins";
        font-weight: 200;
        font-size: 50px;
        margin: 0;
        padding-bottom: 20px;
    }

    .main-container-about-us > h2 {
        padding-top: 30px;
        color: white;
        font-family: "Poppins";
        font-weight: 200;
        font-size: 50px;
    }

    .image-container {
        display: flex;
        gap: 30px;
    }

    .image-container > img {
        max-width: 800px;
        border-radius: 10px;
    }

    .image-container > p {
        margin: 0;
        color: white;
        font-family: "Poppins";
        font-weight: 200;
        font-size: 26px;
    }

    .image-container-2 {
        display: flex;
        gap: 30px;
    }

    .image-container-2 > img {
        width: 800px;
        border-radius: 10px;
    }

    .image-container-2 > p {
        margin: 0;
        color: white;
        font-family: "Poppins";
        font-weight: 200;
        font-size: 26px;
    }

    @media (max-width: 1450px) {
        .img {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .img > img {
            width: 100%;
        }

        .main-container-about-us {
            padding: 40px 10px;
        }
    }
</style>