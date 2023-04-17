<template>
    <div class="al-card">
        <div class="al-img-container">
            <img :src="getUrl()" alt="err">
            <h4 class="al-info text-center">{{ type }} <br> {{ price }}</h4>
        </div>
        <span class="text-uppercase">{{serie}}</span>
    </div>
</template>

<script>
    export default {
        name: "AppCard",
        props: {thumb: String,
                serie: String,
                type: String,
                price: String},
        methods: {
            getUrl(){
                return new URL("../assets/img/" + this.thumb, import.meta.url).href;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .al-card{
        margin-bottom: 7rem;
        width: 70%;
    }

    .al-img-container{
        width: 100%;
        height: 100%;
        margin-bottom: 0.5rem;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
            opacity: 0;
            transition: opacity 300ms;
            cursor: pointer;
        }

        &:hover::after{
            opacity: 0.7;
        }

        &:hover .al-info{
            opacity: 1;
        }
    }

    img{
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: center;     
    }

    .al-info{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: capitalize;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 300ms;
        z-index: 10;
        cursor: pointer;
    }

    @media screen and (min-width: 576px){
        .al-card{
            width: 100%;
        }
    }
</style>