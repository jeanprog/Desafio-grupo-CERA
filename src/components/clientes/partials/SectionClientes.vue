<!-- HTML -->
<template>
  <section class="clientes"
  v-for="user in users" key="user">
    <div class="cliente">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" class="icone"><path data-name="Caminho 1040" d="M74.26 72.41a27.32 27.32 0 0 0 20.38-8.79 29.69 29.69 0 0 0 8.43-21.22 29.7 29.7 0 0 0-8.43-21.23A28 28 0 0 0 55 20c-.4.37-.78.76-1.16 1.15a29.7 29.7 0 0 0-8.39 21.25 29.69 29.69 0 0 0 8.43 21.22 27.36 27.36 0 0 0 20.38 8.79z"></path><path data-name="Caminho 1041" d="M124.68 108.21a74.49 74.49 0 0 0-1-7.87 63.64 63.64 0 0 0-1.86-7.92 39.56 39.56 0 0 0-3.09-7.42 27.91 27.91 0 0 0-4.71-6.4 20.78 20.78 0 0 0-6.78-4.43 22.6 22.6 0 0 0-8.64-1.63 8.6 8.6 0 0 0-4.68 2.07L89 77.93a27.81 27.81 0 0 1-6.32 2.9 23.67 23.67 0 0 1-15.46 0 27.94 27.94 0 0 1-6.22-2.9c-1.81-1.21-3.46-2.31-4.88-3.28a8.55 8.55 0 0 0-4.68-2.06 22.5 22.5 0 0 0-8.65 1.63A20.68 20.68 0 0 0 36 78.65 28.05 28.05 0 0 0 31.27 85a40.63 40.63 0 0 0-3.12 7.39 63.23 63.23 0 0 0-1.86 7.92 76.86 76.86 0 0 0-1 7.87c-.16 2.38-.24 4.86-.24 7.36A21.15 21.15 0 0 0 31 131.22 20.78 20.78 0 0 0 46.19 137h57.62a20.78 20.78 0 0 0 15.19-5.78 21.16 21.16 0 0 0 5.9-15.66c0-2.51-.08-5-.24-7.36z"></path></svg>
      
      <h2>{{user.name}}<span>{{user.whats}}</span></h2>
    </div>
  </section>
</template>

<!-- JS -->
<script setup>
import { userStore } from '../../../store/user'

const store = userStore()
const users = store.listUsers 
console.log(users)
 
</script>

<!-- CSS -->
<style scoped>
section.clientes {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 40px 40px 40px;
}
/* Cliente */
.cliente {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid var(--cor-lista-borda);
  border-radius: 10px;
  padding: 15px;
  margin: 0 0 10px 0;
  cursor: pointer;
  transition: all 0.3s;
}
.cliente:hover {
  border: 2px solid var(--cor-lista-borda-2);
  background: var(--cor-lista-degrade);
}
.cliente svg.icone {
  width: 100%;
  max-width: 30px;
  min-width: 30px;
  fill: var(--cor-lista-branco);
  transition: all 0.3s;
}
.cliente h2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--regular);
  font-size: clamp(0.8rem, 3vw, 1rem);
  color: var(--cor-lista-branco);
  width: 100%;
  max-width: 600px;
  margin-right: auto;
  padding: 0 20px 0 10px;
  pointer-events: none;
}
.cliente h2 span {
  font-family: var(--bold);
  font-size: clamp(0.5rem, 3vw, 0.7rem);
  color: var(--cor-lista-cinza);
  padding: 5px 0 0 0;
}
/* Veiculos */
.cliente .veiculos {
  display: flex;
  align-items: center;
}
.cliente .veiculos p {
  font-family: var(--bold);
  font-size: clamp(0.6rem, 3vw, 0.8rem);
  color: var(--cor-lista-branco);
}
.cliente .veiculos svg {
  width: 100%;
  max-width: 20px;
  min-width: 20px;
  fill: var(--cor-cera);
  margin: 0 5px 0 0;
}
/* estofados */
.cliente .estofados {
  display: flex;
  align-items: center;
}
.cliente .estofados p {
  font-family: var(--bold);
  font-size: clamp(0.6rem, 3vw, 0.8rem);
  color: var(--cor-lista-branco);
}
.cliente .estofados svg {
  width: 100%;
  max-width: 20px;
  min-width: 20px;
  fill: var(--cor-cera);
  margin: 0 5px 0 15px;
}
/* Vazio */
.vazio {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--cor-lista-borda);
  border-radius: 10px;
  padding: 40px;
  width: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);
  transition: all 0.3s;
}
.vazio.mostrar {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
.vazio p {
  font-family: var(--bold);
  font-size: clamp(0.7rem, 3vw, 0.9rem);
  color: var(--cor-lista-cinza-2);
  text-align: center;
  line-height: 1.5;
}
/* Carregar */
button.carregar {
  font-family: var(--bold);
  font-size: clamp(0.7rem, 3vw, 0.9rem);
  color: var(--cor-branco-fixo);
  background-color: var(--cor-lista-botao);
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px 0 0 0;
  transition: all 0.3s;
}
button.carregar:hover {
  background-color: var(--cor-lista-botao-2);
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  section.clientes {
    padding: 20px 20px 40px 20px;
  }
  .cliente {
    position: relative;
    align-items: flex-start;
    padding: 15px 15px 45px 15px;
  }
  /* Veiculos */
  .cliente .veiculos {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
  .cliente .veiculos svg {
    max-width: 15px;
    min-width: 15px;
  }
  /* Estofados */
  .cliente .estofados {
    position: absolute;
    bottom: 15px;
    left: 95px;
  }
  .cliente .estofados svg {
    max-width: 15px;
    min-width: 15px;
  }
  .vazio p {
    width: 100%;
    max-width: 200px;
  }
}
</style>
