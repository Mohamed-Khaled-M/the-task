<template>
  <div>
    <hero />
    <services />
    <featured-apps />
  </div>
</template>

<script>
import FeaturedApps from '../components/sections/FeaturedApps.vue';
import Hero from '../components/sections/Hero.vue';
import Services from '../components/sections/Services.vue';
export default {
  name: 'Home',
  components: { Hero, Services, FeaturedApps },
};
</script>
