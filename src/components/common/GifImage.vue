<template>
  <div class="gif-container">
    <div
      class="gif"
      :style="{
        backgroundImage: 'url(' + require(`../../assets/${gif}`) + ')',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'GifImage',
  props: ['gif'],
};
</script>

<style lang="scss" scoped>
.gif {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4rem;
  position: relative;
  display: block;
  z-index: 2;
}

.gif-container {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;

  &::before {
    content: '';
    background-image: url(../../assets/Dot-Pattern.svg);
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-25%, -20%);
    height: 19rem;
    width: 17.5rem;

    @media (max-width: 530px) {
      height: 14rem;
      width: 13.5rem;
    }
  }

  &::after {
    content: '';
    background-image: url(../../assets/Ellipse.svg);
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(22%, 25%);
    height: 36.8rem;
    width: 36.8rem;

    @media (max-width: 530px) {
      height: 25rem;
      width: 25rem;
    }
  }
}
</style>
