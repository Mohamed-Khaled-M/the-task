<template>
  <nav class="navigation">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/logo.svg" alt="zid-logo" class="navigation__logo" />
    </router-link>

    <div class="navigation__links" :style="{ top: TopValue }">
      <router-link
        v-for="link in navLinks"
        :key="link.text"
        :to="{ name: link.routeName }"
        >{{ link.text }}</router-link
      >
    </div>

    <i class="fas fa-bars navigation--bars" @click="showNav"></i>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      showNavigation: false,
      navLinks: [
        {
          routeName: 'Home',
          text: 'الرئيسية',
        },
        {
          routeName: 'Home',
          text: 'التصنيفات',
        },
        {
          routeName: 'Home',
          text: 'التطبيقات',
        },
        {
          routeName: 'Home',
          text: 'طور تطبيق',
        },
      ],
    };
  },

  methods: {
    showNav() {
      this.showNavigation = !this.showNavigation;
    },
  },

  computed: {
    TopValue() {
      return this.showNavigation ? '2rem' : '-100%';
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;
  z-index: 5;

  @media (max-width: 840px) {
    justify-content: space-between;
    padding: 0 3rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: $white;
  }

  &--bars {
    font-size: 3rem;

    @media (min-width: 840px) {
      display: none;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10rem;
    transition: all 0.4s;

    @media (max-width: 840px) {
      flex-direction: column;
      row-gap: 2rem;
      padding: 3rem 8rem;
      position: fixed;
      background-color: $main-color;
      border-radius: 1rem;
      row-gap: 3rem;
      transform: translateX(-50%);
      left: 50%;
      top: -100%;
    }

    a {
      &,
      &:link,
      &:active {
        color: $black;
        @media (max-width: 840px) {
          color: $white;
        }
      }
    }
  }
}
</style>
