import abrirContato from "./modules.js";

const botao_contato = document.getElementById("bt_contato");
const botao_sair = document.getElementById("bt_sair");

botao_contato.addEventListener("click", abrirContato);
botao_sair.addEventListener("click", () => {
  window.location.href = "index.html";
});
