<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Portal de Incidencias | CIP Huarte</title>
<!-- Enlace correcto a Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Segoe+UI&display=swap" rel="stylesheet" />
<style>
:root {
  --cip-azul: #1a3a5a;
  --cip-dorado: #c0a060;
  --fondo: #f0f2f5;
  --exito: #27ae60;
}
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  background-color: var(--fondo);
  margin: 0;
}
header {
  background-color: var(--cip-azul);
  color: white;
  padding: 12px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}
.search-container {
  display: flex;
  background: #fff;
  border-radius: 25px;
  padding: 5px 15px;
  width: 40%;
  align-items: center;
}
.search-container input {
  border: none;
  outline: none;
  width: 100%;
  padding: 8px;
}
.search-container i {
  color: #5f6368;
  margin: 0 5px;
}
.main-container {
  display: flex;
  justify-content: center;
  padding: 40px 10px;
}
.tarjeta {
  background: #fff;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: left;
}
.hidden {
  display: none;
}
h2 {
  color: var(--cip-azul);
  border-bottom: 2px solid var(--cip-dorado);
  padding-bottom: 10px;
}
.form-group {
  margin-bottom: 18px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="text"],
input[type="email"],
input[type="file"],
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
.escala-de-prioridad {
  display: flex;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}
button {
  width: 100%;
  padding: 15px;
  background-color: var(--cip-azul);
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}
.success-box {
  text-align: center;
  padding: 40px 20px;
}
.success-icon {
  font-size: 80px;
  color: var(--exito);
  margin-bottom: 20px;
}
.success-text {
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
</head>
<body>

<header>
  <div style="font-weight: bold;">CIP HUARTE</div>
  <div class="search-container">
    <i class="material-icons">search</i>
    <input type="text" placeholder="Buscar..." />
    <i class="material-icons">help</i>
  </div>
</header>

<div class="main-container">

  <!-- 1. INICIAR SESIÓN -->
  <div id="login-box" class="tarjeta">
    <h2>Portal de acceso 2026</h2>
    <div class="form-group">
      <label>Correo electrónico institucional</label>
      <input type="email" id="emailInicio" placeholder="usuario@educacion.navarra.es" />
    </div>
    <button onclick="guardarEmail()">Entrar</button>
  </div>

  <!-- 2. FORMULARIO -->
  <div id="form-box" class="tarjeta hidden">
    <h2>Nueva Incidencia</h2>
    <!-- URL de Formspree actualizada -->
    <form id="formIncidencia" action="https://formspree.io/f/xzddrkwb" method="POST" enctype="multipart/form-data">
     
      <!-- Campo de email oculto, se rellena automáticamente -->
      <input type="hidden" id="emailFormulario" name="_replyto" />
     
      <div class="form-group">
        <label>Clase *</label>
        <input type="text" name="Clase" required />
      </div>
     
      <div class="form-group">
        <label>Foto de la incidencia</label>
        <input type="file" name="Adjuntos" multiple accept="image/*" />
        <p style="font-size: 12px; color: #666;">Máximo 5 archivos (100MB c/u)</p>
      </div>
     
      <div class="form-group">
        <label>Nombre *</label>
        <input type="text" name="Nombre" required />
      </div>
     
      <!-- El campo de email visible ya no es necesario -->
      <!-- <div class="form-group">
        <label>Correo electrónico de contacto*</label>
        <input type="email" name="_replyto" required />
      </div> -->
     
      <div class="form-group">
        <label>Tipo *</label>
        <select name="Tipo" required>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Golpe">Golpe</option>
          <option value="Liquidos">Accidente con líquidos</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
     
      <div class="form-group">
        <label>Descripción del problema</label>
        <textarea name="Descripcion" rows="3"></textarea>
      </div>
     
      <div class="form-group">
        <label>Dónde ha ocurrido *</label>
        <input type="text" name="Lugar" required />
      </div>
     
      <div class="form-group">
        <label>Prioridad *</label>
        <div class="escala-de-prioridad">
          <label>Alta <input type="radio" name="Prioridad" value="1" /></label>
          <label>Media <input type="radio" name="Prioridad" value="2" /></label>
          <label>Normal <input type="radio" name="Prioridad" value="3" checked /></label>
          <label>Baja <input type="radio" name="Prioridad" value="4" /></label>
          <label>Muy Baja <input type="radio" name="Prioridad" value="5" /></label>
        </div>
      </div>
     
      <div class="form-group">
        <label>Más detalles</label>
        <textarea name="Detalles" rows="2"></textarea>
      </div>
     
      <!-- Redirección tras envío -->
      <input type="hidden" name="_next" value="javascript:mostrarExito()" />
     
      <button type="submit">Enviar Incidencia</button>
    </form>
  </div>
 
  <!-- 3. PÁGINA DE ÉXITO -->
  <div id="success-box" class="tarjeta success-box hidden">
    <div class="success-icon">✔️</div>
    <div class="success-text">Tu incidencia ha sido registrada, y será revisada.</div>
    <p>El equipo técnico de CIP Huarte revisará tu caso a la brevedad.</p>
    <!-- Cambio aquí: botón que llama a mostrarSeccion('login-box') -->
    <button onclick="mostrarSeccion('login-box')" style="background: var(--cip-dorado);">Volver al Inicio</button>
  </div>

</div>

<script>
let emailGuardado = '';

function guardarEmail() {
  const emailInput = document.getElementById('emailInicio');
  emailGuardado = emailInput.value;
  // Rellenar el campo oculto del formulario
  document.getElementById('emailFormulario').value = emailGuardado;
  // Mostrar el formulario
  mostrarSeccion('form-box');
  // Opcional: puedes limpiar el input del inicio si quieres
  // emailInput.value = '';
}

function mostrarSeccion(id) {
  document.getElementById('login-box').classList.toggle('hidden', id !== 'login-box');
  document.getElementById('form-box').classList.toggle('hidden', id !== 'form-box');
  document.getElementById('success-box').classList.toggle('hidden', id !== 'success-box');

  // Cuando vuelves al login, limpiar el email
  if (id === 'login-box') {
    document.getElementById('emailInicio').value = '';
  }

  // Cuando muestras el formulario, rellenar el campo oculto con el email guardado
  if (id === 'form-box') {
    document.getElementById('emailFormulario').value = emailGuardado;
  }
}

// Función para mostrar página de éxito
function mostrarExito() {
  mostrarSeccion('success-box');
}

// Manejo del envío del formulario
const formulario = document.getElementById("formIncidencia");
formulario.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(formulario);
  const btn = formulario.querySelector("button");
  btn.innerText = "Enviando...";
  btn.disabled = true;
 
  const respuesta = await fetch(formulario.action, {
    method: formulario.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });
 
  if (respuesta.ok) {
    mostrarSeccion('success-box');
  } else {
    alert("Hubo un error al enviar. Por favor, inténtalo de nuevo.");
    btn.innerText = "Enviar Incidencia";
    btn.disabled = false;
  }
};
</script>

</body>
</html>
