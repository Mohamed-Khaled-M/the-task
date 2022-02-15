<template>
  <footer class="footer">
    <div class="text-center flex">
      <router-link :to="{ name: 'Home' }" class="logo">
        <img src="../../assets/logo.svg" alt="logo" />
      </router-link>
      <div class="footer__social">
        <router-link :to="{ name: 'Home' }">
          <i class="fab fa-youtube"></i>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <i class="fab fa-linkedin-in"></i>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <i class="fab fa-facebook-f"></i>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <i class="fab fa-twitter"></i>
        </router-link>
      </div>
    </div>

    <button @click="scrollToTop" class="up-btn">
      <i class="fas fa-arrow-up"></i>
    </button>
    <button class="chat-btn"><i class="far fa-comments"></i></button>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $main-color;
  margin-top: 12rem;
  padding: 4rem 3rem 8rem;
  position: relative;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }

  &__social {
    width: 222px;
    display: flex;
    justify-content: space-between;

    a {
      color: $white;
    }
  }

  .up-btn,
  .chat-btn {
    background-color: $secondary-color;
    width: 5rem;
    height: 5rem;
    border: 0;
    outline: none;
    border-radius: 50%;
    color: #835d9d;
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 8px 15px 0px rgb(0 0 0 / 50%);
    }
  }

  .chat-btn {
    bottom: 1rem;
    right: 3rem;
  }
}
</style>
