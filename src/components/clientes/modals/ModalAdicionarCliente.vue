<!-- HTML -->
<template>
  <section class="modal">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button @click="closeModal" type="button">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" 
        autocomplete="false" 
        spellcheck="false"
        placeholder="Digite aqui..."
        v-model="name"/> 
        
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input type="tel"
         autocomplete="false" 
         spellcheck="false" 
         placeholder="(99) 99999-9999"
         v-model="whats" /> 
        
      </div>
      <button 
      type="button"
       class="principal"
       @click="addClient"> Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
 import {ref} from "vue "; 
 import {userStore} from '../../../store/user'

 let name = ref("") 
 let whats = ref("")

  const store = userStore()
  const emit = defineEmits()
  
   
 const addClient = async () => {
   store.addUser({ name: name.value , whats: whats.value})
     await emit('update', 'close')   
     name.value =""
     whats.value =""
  }
 
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
</style>
