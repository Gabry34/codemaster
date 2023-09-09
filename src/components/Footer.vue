<template>

        <div class="footer-container">
            <h1>©️2023 All rights reserved to CodeMaster</h1>
            <div class="image-container">
                <img src="../assets/instagram.svg" class="img">
                <img src="../assets/facebook.svg" class="img">
                <img src="../assets/twitter.svg" class="img">
                <img src="../assets/yt.svg" class="img">
                <img src="../assets/logo.svg" class="code-master">
            </div>
        </div>
    
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 100px;
        padding-bottom: 10px;
    }

    .footer-container > h1 {
        margin: 0;
        font-size: 15px;
        color: white;
        font-weight: 100;
        font-family: "Poppins";
        cursor: default;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .img {
        cursor: pointer;
        height: 18px;
    }

    .code-master {
        width: 130px;
        cursor: none;
        cursor: default;
    }

    @media (max-width: 810px){
        .footer-container {
            padding: 0px 20px;
        }
    }
</style>