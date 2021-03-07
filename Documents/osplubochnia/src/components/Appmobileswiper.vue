<template>


 <!-- Swiper -->
  <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="item in items" v-bind:key="item.id"><img :src="item.img" />
         
         </div>

      </div>
       <!-- Add Pagination -->
    <div class="swiper-pagination"></div> 
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>



  </div>


</template>

<script>

export default {
name: 'Appmobileswiper',

  data() {
     return {
      items: [
{img: '/img/stronaospm1.73714443.jpg', id: '1'},
{img: '/img/stronaospm2.97533cbc.jpg', id: '2'},
{img: '/img/stronaospm3.8a4e8624.jpg', id: '3'},
{img: '/img/stronaospm4.960d4213.jpg', id: '4'},
{img: '/img/stronaospm5.eb62e4fb.jpg', id: '5'},
{img: '/img/stronaospm6.96230986.jpg', id: '6'},
{img: '/img/stronaospm7.77a3fd54.jpg', id: '7'},
{img: '/img/stronaospm8.ba3f00c5.jpg', id: '8'},
{img: '/img/stronaospm9.08832fe4.jpg', id: '9'},
{img: '/img/stronaospm10.d7273c8f.jpg', id: '10'},
{img: '/img/stronaospm11.340f186f.jpg', id: '11'},
{img: '/img/stronaospm12.2d963ea9.jpg', id: '12'},

      ]
 
    }
  }


};


</script>

<style scoped>

  /* swiper style */
  
  .swiper-container {
    width: 100%;
    height: 100vh;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
</style>
