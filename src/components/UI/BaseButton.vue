<template>
  <router-link :to="{ name: 'Home' }" class="btn" :class="{ bg: bg }">
    <slot></slot>
    <i class="fa-solid fa-angle-left"></i>
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    bg: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &,
  &:active,
  &:visited {
    padding: 1.3rem 6.5rem;
    font-size: $def-font-size + 0.2rem;
    font-weight: $font-bolder;
    color: $secondary-color;
    border-radius: 1rem;
    display: inline-block;
  }

  i {
    margin-right: 1rem;
    animation: btnIcon 0.5s infinite;
  }
}

.bg {
  background-color: $main-color;
}
</style>
