import Vue from 'vue';
import App from './App.vue';
import Swiper from 'swiper';
import Macy from 'macy';
import Macyy from 'macy';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app');



new Macy({
  container: '.gallery',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    700: 3,
    1100: 4,
  },
  margin: {
    x: 20,
    y: 20,
  }
});


new Macyy({
  container: '.galleryy',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    700: 3,
    1100: 4,
  },
  margin: {
    x: 20,
    y: 20,
  }
});



new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


