<template>

<div class="container">
  <div class="row">
  <div class="col" v-for="person in persons" :key="person.id">
    <div class="card" style="width:300px">
    <img class="card-img-top" src="https://picsum.photos/400/400" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">{{person.person}}</h4>
      <p class="card-text">{{person.position}}</p>
      <p class="card-text">Telefon kontaktowy: {{person.phone}}</p>
    </div>
  </div>
</div> 
</div>

<div class="row"><br>
</div> 



</div> 

</template>

<script>

export default {
name: 'Appcardbody',

  data() {
     return {
      persons: [
      {person: "Tomasz Grad", position: "Naczelnik", phone: "555 555 555", id: 1},
      {person: "Andrzej Józwik", position: "Prezes", phone: "333 333 555", id: 2},
      {person: "Michał Kopeć", position: "V-ce Prezes", phone: "777 777 777", id: 3},
       {person: "Jan Nowak", position: "Prezes", phone: "444 444 444", id: 4}
      ]
};
},
};


</script>

<style scoped>
.col {
  padding: 15px;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>
