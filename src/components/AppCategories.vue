<template>
    <div class="al-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 al-col-lg py-3" v-for="category in categories">
                    <div class="d-flex justify-content-center align-items-center gap-2">
                        <img :src="getSource(category.source)" alt="err">
                        <a href="#" class="text-uppercase">{{ category.name }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {categories} from "../assets/data.js";
    export default {
        name: "AppCategories",
        data() {
            return {
                categories: categories
            }
        },

        methods: {
            getSource(source){
                return new URL("../assets/img/" + source, import.meta.url).href;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors.scss";

    .al-wrapper{
        background-color: $app_blue;
        color: white;
    }

    img{
        width: 50px;
    }

    a{
        color: white;
        text-decoration: none;
        font-weight: bold;

        &:hover{
            color: lightgreen;
        }
    }

    @media screen and (min-width: 992px){
        .al-col-lg{
        width: calc(100% / 5);
        }
    }
</style>