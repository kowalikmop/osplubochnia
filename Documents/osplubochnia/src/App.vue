<template>

<div class="wrapper">

  <Appdeskswiper v-if="!mobileView" />
  <Appmobileswiper v-if="mobileView" />


<div class="container">
  
  <br>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#home">Akcje</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#menu1">Ćwiczenia</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#zarzad">Zarząd</a>
    </li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div id="home" class="container tab-pane active"><br>
     <div class="gallery">
        <img class="item" src="../src/assets/akcje1.jpg" alt="">
        <img class="item" src="../src/assets/akcje2.jpeg" alt="">
        <img class="item" src="../src/assets/akcje3.jpg" alt="">
        <img class="item" src="../src/assets/akcje4.jpg" alt="">
        <img class="item" src="../src/assets/akcje5.jpg" alt="">
        <img class="item" src="../src/assets/akcje6.jpg" alt="">
        <img class="item" src="../src/assets/akcje7.jpg" alt="">
        <img class="item" src="../src/assets/akcje8.jpg" alt="">
        <img class="item" src="../src/assets/akcje9.jpg" alt="">
        <img class="item" src="../src/assets/akcje10.jpg" alt="">
        <img class="item" src="../src/assets/akcje11.jpg" alt="">
        <img class="item" src="../src/assets/akcje12.jpg" alt="">
        <img class="item" src="../src/assets/akcje13.jpg" alt="">
        <img class="item" src="../src/assets/akcje14.jpg" alt="">
        <img class="item" src="../src/assets/akcje15.jpg" alt="">
        <img class="item" src="../src/assets/akcje16.jpg" alt="">
        <img class="item" src="../src/assets/akcje17.jpg" alt="">
        <img class="item" src="../src/assets/akcje18.jpeg" alt="">
        <img class="item" src="../src/assets/akcje19.jpeg" alt="">
        <img class="item" src="../src/assets/akcje20.jpg" alt="">
        <img class="item" src="../src/assets/akcje21.jpg" alt="">
        <img class="item" src="../src/assets/akcje22.jpg" alt="">
        <img class="item" src="../src/assets/akcje23.jpg" alt="">
        <img class="item" src="../src/assets/akcje24.jpg" alt="">
        <img class="item" src="../src/assets/akcje25.jpg" alt="">
        <img class="item" src="../src/assets/akcje26.jpg" alt="">
        <img class="item" src="../src/assets/akcje27.jpg" alt="">
        <img class="item" src="../src/assets/akcje28.jpg" alt="">
        <img class="item" src="../src/assets/akcje29.jpg" alt="">
        <img class="item" src="../src/assets/akcje30.jpg" alt="">
        <img class="item" src="../src/assets/akcje31.jpg" alt="">
        <img class="item" src="../src/assets/akcje32.jpg" alt="">
        <img class="item" src="../src/assets/akcje33.jpg" alt="">
        <img class="item" src="../src/assets/akcje34.jpg" alt="">
        <img class="item" src="../src/assets/akcje35.jpg" alt="">
        <img class="item" src="../src/assets/akcje36.jpg" alt="">
        <img class="item" src="../src/assets/akcje37.jpg" alt="">
        <img class="item" src="../src/assets/akcje38.jpg" alt="">
        <img class="item" src="../src/assets/akcje39.jpg" alt="">
        <img class="item" src="../src/assets/akcje40.jpg" alt="">
        <img class="item" src="../src/assets/akcje41.jpg" alt="">
        <img class="item" src="../src/assets/akcje42.jpg" alt="">
        <img class="item" src="../src/assets/akcje43.jpg" alt="">
        <img class="item" src="../src/assets/akcje44.jpg" alt="">
       </div>
      </div>

    <div id="menu1" class="container tab-pane active"><br>
    <div class="galleryy">
        <img class="item" src="../src/assets/cwiczenia1.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia2.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia3.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia4.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia5.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia6.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia7.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia8.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia9.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia10.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia11.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia12.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia13.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia14.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia15.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia16.jpg" alt=""> 
        <img class="item" src="../src/assets/cwiczenia17.jpg" alt="">
        <img class="item" src="../src/assets/cwiczenia18.jpg" alt="">

      </div>
    </div>

    <div id="zarzad" class="container tab-pane active"><br>

<Appcardbody />

    </div>


  </div>
  </div>
  </div>



</template>

<script>
import Appdeskswiper from './components/Appdeskswiper.vue';
import Appmobileswiper from './components/Appmobileswiper.vue';
import Appcardbody from './components/Appcardbody.vue';

export default {

name: 'App',
components: { Appdeskswiper, Appmobileswiper, Appcardbody },

  data() {
     return {
      mobileView: true
 
    }
  },
  methods: {
    handleView() {
        this.mobileView = window.innerWidth <= 768;

    }
  },

  created() {

    this.handleView();
  }

};

</script>

<style scoped>


h1 {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 99;
  font-weight: bold;
  color: rgba(255,0,0,0.1);;
}

h3 {
  text-align: center;

}

.tab-content {

border-left: 1px solid #dee2e6;
border-right: 1px solid #dee2e6;
border-bottom: 1px solid #dee2e6;
}

.gallery .galleryy {
    width: 98%;
    margin: 50px auto;
}


.item {
    width: 80%;
}
</style>
