<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script>
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss"></style>
