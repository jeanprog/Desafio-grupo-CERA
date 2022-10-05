<!-- HTML -->
<template>
  <section class="titulo">
    <button type="button"  class="adicionar" @click="sendData"><p>Adicionar novo cliente</p></button>
  </section>
</template>

<!-- JS -->
<script setup>

const emit = defineEmits()
const sendData = () => { 
 
  emit('update' , 'mostrar')
  }  
   
</script>

<!-- CSS -->
<style scoped>
.tela {
  margin: 0 50px 0 0;
}
.input {
  max-width: 400px;
}
button.adicionar {
  margin-left: auto;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  .input {
    margin: 20px 0;
  }
  button.adicionar {
    margin-left: 0;
  }
}
</style>
