fetch('http://localhost:3000/api/proyectos')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('proyectos');
    data.forEach(proyecto => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${proyecto.titulo}</h2>
        <p>${proyecto.descripcion}</p>
        <a href="${proyecto.enlace}" target="_blank">Ver proyecto</a>
      `;
      contenedor.appendChild(div);
    });
  });
