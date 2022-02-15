<template>
  <section class="services">
    <div class="mb">
      <h2 class="heading--secondary">كل ما تحتاجه لنمو متجرك فى مكان واحد</h2>
      <p class="paragraph--medium">
        مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول
        <br />
        سوق التطبيقات لنمو متجرك ومضاعفة أرباحك
      </p>

      <ul class="services__list">
        <li
          v-for="service in services"
          :key="service.id"
          class="services--item"
        >
          <i class="services--item--icon">
            <img :src="require(`../../assets/${service.icon}`)" alt="icon" />
          </i>
          <p class="paragraph--small">{{ service.text }}</p>
        </li>
      </ul>
      <base-button bg>تصفح التطبيقات</base-button>
    </div>

    <div class="gif">
      <gif-image gif="gif2.gif" />
    </div>
  </section>
</template>

<script>
import GifImage from '../common/GifImage.vue';

export default {
  name: 'Services',
  components: {
    GifImage,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: 'easy.svg',
          text: 'سهولة  ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك',
        },
        {
          id: 2,
          icon: 'settings.svg',
          text: 'دعم فني و تقني متكامل متوفر على مدار الساعة',
        },
        {
          id: 3,
          icon: 'money.svg',
          text: 'أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  background-color: $light-grey;
  padding: 6.5rem 10.7rem 6.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    padding: 6.5rem 4rem;
  }

  .mb {
    @media (max-width: 1400px) {
      margin-bottom: 8rem;
    }
  }
  &--item {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }

    &:last-of-type {
      margin-bottom: 4rem;
    }

    &--icon {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $white;
      box-shadow: 0rem 0.5rem 1rem 0rem rgb(0 0 0 / 15%);
    }
  }

  .gif {
    width: 70rem;
    height: 44rem;
    max-width: 90%;
    position: relative;
    display: inline-block;
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
