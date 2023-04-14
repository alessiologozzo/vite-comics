<template>
    <div class="al-wrapper py-4">
        <div class="container d-flex justify-content-between flex-wrap">

            <a href="#" class="al-button text-uppercase my-3 my-sm-0">sign up now!</a>

            <div class="d-flex align-items-center gap-3 text-uppercase">
                <h4 class="al-blue m-0">follow us</h4>
                <img src="../assets/img/footer-facebook.png" alt="facebook">
                <img src="../assets/img/footer-twitter.png" alt="twitter">
                <img src="../assets/img/footer-youtube.png" alt="youtube">
                <img src="../assets/img/footer-pinterest.png" alt="pinterest">
                <img src="../assets/img/footer-periscope.png" alt="periscope">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors.scss";
    .al-wrapper{
        background-color: #303030;
        color: white;
    }

    .al-button{
        padding: 0.6rem;
        border: 2px solid $app_blue;
        text-decoration: none;
        transition: transform 300ms;
        color: white;

        &:hover{
            color: lightgreen;
            transform: scale(1.1);
        }
    }

    img{
        width: 35px;
        height: 35px;
        cursor: pointer;
        transition: transform 300ms;

        &:hover{
            transform: scale(1.15);
        }
    }

    .al-blue{
        color: $app_blue;
    }
</style>