<template>
  <section>
    <h1 class="heading--primary">
      طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد
    </h1>

    <p class="paragraph--large">
      طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التـي تساعدك <br />
      في نمو أرباحك عبر إدارة عمليات متجرك بشكل فعال و احترافـي
    </p>

    <base-button bg>تصفح التطبيقات</base-button>

    <div class="gif">
      <gif-image gif="gif1.gif" />
    </div>
  </section>
</template>

<script>
import GifImage from '../common/GifImage.vue';
export default {
  name: 'Hero',
  components: {
    GifImage,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 6.2rem;
  padding-bottom: 20.3rem;
  text-align: center;

  @media (max-width: 450px) {
    padding: 6.5rem 3rem;
  }

  .paragraph--large {
    margin-top: 2.1rem;
    margin-bottom: 4rem;
  }

  .gif {
    height: 55rem;
    width: 85rem;
    max-width: 90%;
    margin: auto;
    margin-top: 8.5rem;

    @media (max-width: 885px) {
      height: 44rem;
      max-width: 75%;
    }
    @media (max-width: 630px) {
      height: 40rem;
    }
    @media (max-width: 530px) {
      height: 30rem;
      max-width: 70%;
    }
    @media (max-width: 400px) {
      height: 25rem;
    }
  }
}
</style>
