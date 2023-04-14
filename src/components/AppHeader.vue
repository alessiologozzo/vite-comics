<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">

                <img src="../assets/img/dc-logo.png" alt="dc-logo" class="py-3 py-lg-none">

                <div class="d-none d-lg-flex gap-4 text-uppercase">
                    <a href="#" v-for="link in headerLinks">{{ link }}</a>
                </div>

                <div @click="showMenu($event)" class="d-flex d-lg-none al-menu-data position-relative">
                    <i class="fa-solid fa-bars"></i>
                    <div class="al-menu">
                        <div v-for="link in headerLinks" class="al-menu-item">{{ link }}</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import {links} from "../assets/data.js";
    import {showMenu} from "../assets/menu.js";
    export default {
        name: "AppHeader",
        data() {
            return {
                headerLinks: links
            }
        },

        methods: {
            showMenu: showMenu,
        },
    }
</script>

<style lang="scss" scoped>
    @import "../assets/colors.scss";
    header{
        background-color: white;
        color: black;
    }

    img{
        width: 70px;
    }

    i{
        font-size: 1.5rem;
        color: grey;
        cursor: pointer;
        transition: color 250ms;
    }

    i:hover{
        color: #98ff49;
    }

    a{
        padding: 2rem 0;
        border-bottom: 4px solid white;
        cursor: pointer;
        color: black;
        text-decoration: none;

        &:hover{
            color: $app_blue;
            border-bottom: 4px solid $app_blue;
        }
    }
</style>