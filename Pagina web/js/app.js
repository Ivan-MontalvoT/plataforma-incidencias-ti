const btnMostrarForm = document.getElementById("btnMostrarForm");
const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaIncidencias");

let incidencias = [];
let contador = 1;

btnMostrarForm.onclick = () => formulario.classList.remove("oculto");

cancelar.onclick = () => formulario.classList.add("oculto");

guardar.onclick = () => {
  const incidencia = {
    id: contador++,
    titulo: titulo.value,
    asignado: asignado.value,
    fecha: fecha.value,
    categoria: categoria.value,
    prioridad: prioridad.value,
    estado: estado.value
  };

  incidencias.push(incidencia);
  mostrarIncidencias();
  formulario.classList.add("oculto");
};

function mostrarIncidencias() {
  tabla.innerHTML = "";

  const fp = filtroPrioridad.value;
  const fe = filtroEstado.value;

  incidencias
    .filter(i => fp === "" || i.prioridad === fp)
    .filter(i => fe === "" || i.estado === fe)
    .forEach(i => {
      tabla.innerHTML += `
      <tr>
        <td>${i.id}</td>
        <td>${i.titulo}</td>
        <td>${i.asignado}</td>
        <td>${i.fecha}</td>
        <td>${i.categoria}</td>
        <td>${i.prioridad}</td>
        <td>${i.estado}</td>
        <td>👁️</td>
      </tr>`;
    });
}

filtroPrioridad.onchange = mostrarIncidencias;
filtroEstado.onchange = mostrarIncidencias;
