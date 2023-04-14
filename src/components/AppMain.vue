<template>
    <div class="al-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-10 col-lg-8 col-xl-6 py-5">
                    <div class="row">
                        <div class="col-12 col-md-4 py-4">
                        <h4 class="text-uppercase text-center">dc comics</h4>
                        <a href="#" v-for="dcComic in dcComics" class="d-flex justify-content-center text-capitalize al-grey">{{ dcComic }}</a>

                        <h4 class="text-uppercase text-center pt-4">shop</h4>
                        <a href="#" v-for="shop in shops" class="d-flex justify-content-center al-grey">{{ shop }}</a>
                    </div>

                    <div class="col-12 col-md-4 py-4">
                        <h4 class="text-uppercase text-center">dc</h4>
                        <a href="#" v-for="dc in dcs" class="d-flex justify-content-center al-grey">{{ dc }}</a>
                    </div>

                    <div class="col-12 col-md-4 py-4">
                        <h4 class="text-uppercase text-center">sites</h4>
                        <a href="#" v-for="site in sites" class="d-flex justify-content-center al-grey">{{ site }}</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {dcComics, sites, shops, dcs} from "../assets/data.js"
    export default {
        name: "AppMain",
        data() {
            return {
                dcComics: dcComics,
                sites: sites,
                shops: shops,
                dcs: dcs
            }
        },
    }
</script>

<style lang="scss" scoped>
    .al-wrapper{
        background-image: url("../assets/img/dc-logo-bg.png"), url("../assets/img/footer-bg.jpg");
        background-repeat: no-repeat, repeat;
        background-position: right, center;
        color: white;

        a{
            text-decoration: none;
            color: white;

            &:hover{
                color: lightgreen;
            }
        }

        .al-grey{
            color: lightgrey;
        }
    }
</style>