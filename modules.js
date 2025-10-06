const email = "lucas.schuck@alunos.colegiodonaduzzi.com.br";

function abrirContato() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=" + email,
    "_blank"
  );
}

export default abrirContato;
