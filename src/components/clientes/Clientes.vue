<template>
  <div id="clientes">
    <SectionTitulo @update="send" />
    <ModalAdicionarCliente :class="open"
    @update="send" />
    
    <SectionClientes/>
  </div>
</template>

<script setup>
  import SectionTitulo from './partials/SectionTitulo.vue';
  import ModalAdicionarCliente from './modals/ModalAdicionarCliente.vue'
  import SectionClientes from './partials/SectionClientes.vue';
  import {ref} from 'vue '
   
  let open = ref('')
  const send = (data) => {  
      open.value = data 
       console.log(data)
  }

</script>

<style scoped>
#clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: var(--cor-fundo-tela);
}
</style>
