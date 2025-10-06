// Elementos
const btnAbrirModal = document.getElementById('doarBtn');
const modal = document.getElementById('doarModal');
const btnFechar = document.getElementById('closeModal');
const btnEnviar = document.getElementById('confirmarDoacao');
const inputValor = document.getElementById('valor');
const inputNome = document.getElementById('nome');
const notifBtn = document.getElementById('mostrarNotifBtn');
const notificacao = document.getElementById('notificacao');
const totalDoadosSpan = document.getElementById('totalDoados');

let totalDoados = 0;

// Abrir modal
btnAbrirModal.onclick = () => {
  modal.style.display = 'flex';
}

// Fechar modal
btnFechar.onclick = () => {
  modal.style.display = 'none';
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Enviar doação
btnEnviar.onclick = () => {
  const nome = inputNome.value.trim();
  const valorStr = inputValor.value.trim();
  const valor = parseFloat(valorStr);

  if (nome === '' || valorStr === '' || isNaN(valor) || valor <= 0) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  // Atualizar total arrecadado
  totalDoados += valor;
  totalDoadosSpan.innerText = `R$ ${totalDoados.toFixed(2)}`;

  // Mostrar notificação ao clicar no botão
  showNotification(`Obrigado, ${nome}! Sua doação de R$ ${valor.toFixed(2)} foi recebida.`);

  // Fechar modal
  modal.style.display = 'none';

  // Limpar campos
  inputNome.value = '';
  inputValor.value = '';
}

// Função para mostrar notificação
function showNotification(mensagem) {
  notificacao.innerText = mensagem;
  notificacao.classList.add('show');

  setTimeout(() => {
    notificacao.classList.remove('show');
  }, 3000);
}
