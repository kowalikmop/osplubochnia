<template>


 <!-- Swiper -->
  <div class="swiper-container">
      <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="item in items" :key="item.id"><img :src="item.img" />
 
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
name: 'Appdeskswiper',

  data() {
     return {
      items: [
{img: '/img/stronaosp1.6d4a7c32.jpg', id: '1'},
{img: '/img/stronaosp2.5e4f2644.jpg', id: '2'},
{img: '/img/stronaosp3.fbe1a8d2.jpg', id: '3'},
{img: '/img/stronaosp4.0c34eca4.jpg', id: '4'},
{img: '/img/stronaosp5.843dd82c.jpg', id: '5'},
{img: '/img/stronaosp6.730a51ab.jpg', id: '6'},
{img: '/img/stronaosp7.82a7c3d5.jpg', id: '7'},
{img: '/img/stronaosp8.94b5dfa3.jpg', id: '8'},
{img: '/img/stronaosp9.70847dac.jpg', id: '9'},
{img: '/img/stronaosp10.7fe7b9ac.jpg', id: '10'},
{img: '/img/stronaosp11.325de60d.jpg', id: '11'},
{img: '/img/stronaosp12.6e5fd70a.jpg', id: '12'}
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
