export default {
  namespaced: true,
  state: {
    apps: [
      {
        id: 1,
        name: 'قمرة',
        developer: 'عمر برهوم',
        image: 'app-icon.svg',
        description:
          'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك',
      },
      {
        id: 2,
        name: 'قمرة',
        developer: 'عمر برهوم',
        image: 'app-icon.svg',
        description:
          'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك',
      },
      {
        id: 3,
        name: 'قمرة',
        developer: 'عمر برهوم',
        image: 'app-icon.svg',
        description:
          'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك',
      },
      {
        id: 4,
        name: 'قمرة',
        developer: 'عمر برهوم',
        image: 'app-icon.svg',
        description:
          'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك',
      },
    ],
  },

  mutations: {},

  actions: {},

  getters: {
    getApps(state) {
      return state.apps;
    },
  },
};
