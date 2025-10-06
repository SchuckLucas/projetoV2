import abrirContato from "./modules.js";

const elementos_perguntas = document.getElementsByClassName("perguntas");
const botao_retornar = document.getElementById("bt_retornar");
const botao_contato = document.getElementById("bt_contato");
const botao_info = document.getElementById("bt_info");
const botao_doar = document.getElementById("bt_doar");

const respostas = [
  "Alimentos não pericíveis não prejudiciais a saude humana.",
  "Quando refugiados chegam ao país eles não tem condições de sobreviver muito menos de ter uma boa qualidade de vida, pois muitos deixaram tudo para tráz.",
  "Vá até uma de nossas agencias, qualquer dúvida entre um contato.",
  "O nome da nossa agencia é ____ e ficamos responssaveis por receber, verificar e distribuir os alimentos doados aos Emigrantes.",
  "Distribuiremos os alimentos doados aos Emigrantes de acordo com sua maior ou menor necessidade.",
];

for (let i = 0; i < elementos_perguntas.length; i++) {
  const pergunta = elementos_perguntas[i];

  pergunta.addEventListener("click", () => {
    const resposta = document.createElement("p");
    resposta.innerHTML = respostas[i];
    resposta.className = "respostas";

    if (pergunta.lastElementChild.className == "respostas") {
      pergunta.removeChild(pergunta.lastElementChild);
    } else {
      pergunta.appendChild(resposta);
    }
  });
}

botao_retornar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

botao_contato.addEventListener("click", abrirContato);
botao_info.addEventListener("click", () => {
  window.location.href = "info.html";
});
botao_doar.addEventListener("click", () => {
  window.location.href = "doar.html";
});
