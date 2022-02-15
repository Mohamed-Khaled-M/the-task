<template>
  <section class="featured-apps">
    <div class="text-center">
      <h3 class="heading--secondary heading--black">التطبيقات المميزة</h3>
      <p class="paragraph--small">
        تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها
      </p>
    </div>

    <div class="featured-apps__container">
      <div v-for="app in apps" :key="app.id" class="featured-apps__app">
        <img :src="require(`../../assets/${app.image}`)" alt="logo" />

        <div class="featured-apps__app--info">
          <div class="featured-apps__app--heading">
            <h3 class="heading--tertiary">{{ app.name }}</h3>
            <div class="rating">
              <img src="../../assets/star.svg" alt="star" /> 5
            </div>
          </div>

          <p class="paragraph--small">تطوير {{ app.developer }}</p>
          <p class="featured-apps__app--description">{{ app.description }}</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <base-button>جميع التطبيقات</base-button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ apps: 'apps/getApps' }),
  },
};
</script>

<style lang="scss" scoped>
.featured-apps {
  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: center;
    padding: 4rem 9rem;

    @media (max-width: 1057px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }

  &__app {
    background-color: $grey;
    padding: 3rem 2.2rem;
    border-radius: 1rem;
    display: flex;
    align-items: flex-start;
    column-gap: 1.1rem;

    &--heading {
      display: flex;
      column-gap: 2rem;
      .rating {
        color: green;
        font-weight: $font-bold;
      }
    }

    &--description {
      font-size: 1.1rem;
      padding-top: 2rem;
    }
  }
}
</style>
