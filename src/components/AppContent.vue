<template>
    <div class="al-jumbotron"></div>
    <div class="al-wrapper">
        <div class="container position-relative">
            <div class="row">
                <div v-for="cardData in cardsData" class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"><AppCard :serie=cardData.serie :thumb=cardData.thumb :type=cardData.type :price=cardData.price /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppCard from "./AppCard.vue";
    import {cardsData} from "../assets/data.js"

    export default {
        name: "AppContent",
        data() {
            return {
                cardsData: cardsData
            }
        },
        components: {
            AppCard
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors.scss";

    .al-jumbotron{
        height: 350px;
        background-image: url("../assets/img/jumbotron.jpg");
        background-size: cover;
        background-position: top;
    }

    .al-wrapper{
        background-color: #1c1c1c;
        color: white;
        padding: 3rem 0 1rem;
    }

    .container::after{
        position: absolute;
        content: "Current Series";
        font-size: 1.7rem;
        font-weight: 500;
        padding: 0.2rem 0.8rem;
        top: -85px;
        left: 30px;
        background-color: $app_blue;
        border-style: groove;
        border-color: $app_blue;
    }

    @media screen and (min-width: 576px){
        .container::after{
            left: 0;
        }
    }
</style>