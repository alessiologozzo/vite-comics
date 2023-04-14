<template>
  <div @click="removeMenusHandler($event)">
  
    <AppHeader />
    <AppContent />
    <AppCategories />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppCategories from './components/AppCategories.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {removeMenusHandler} from "./assets/menu.js";
  export default {

    name: "App",

    components: {
      AppHeader,
      AppContent,
      AppCategories,
      AppMain,
      AppFooter
    },

    methods: {
      removeMenusHandler: removeMenusHandler
    },

  }
</script>

<style lang="scss" scoped>

</style>