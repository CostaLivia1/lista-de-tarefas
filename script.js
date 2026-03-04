document.addEventListener("DOMContentLoaded", function() {

  const btnAdicionar = document.getElementById("btnAdicionar");
  const input = document.getElementById("inputTarefa");
  const lista = document.getElementById("lista");

  btnAdicionar.addEventListener("click", function() {
    const texto = input.value.trim();

    if (texto === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = texto;
    novaTarefa.classList.add("quadroTarefa");

    lista.appendChild(novaTarefa);

    input.value = "";
  });

});