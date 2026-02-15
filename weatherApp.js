

export class WeatherApp {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.lugares = [];
  }

  async cargarLugares() {
    try {
      this.lugares = await this.apiClient.obtenerClimaActual();
      this.renderHome();
    } catch (error) {
      this.mostrarError("Error al cargar lugares");
    }
  }

  async cargarDetalleLugar(id) {
    try {
      const detalle = await this.apiClient.obtenerPronostico(id);
      this.renderDetalle(detalle);
    } catch (error) {
      this.mostrarError("Error al cargar detalle");
    }
  }

  calcularEstadisticas(pronosticoSemanal) {
    const temperaturas = pronosticoSemanal.map(d => d.temp);
    const min = Math.min(...temperaturas);
    const max = Math.max(...temperaturas);
    const promedio = temperaturas.reduce((a,b)=>a+b,0) / temperaturas.length;

    const diasLluvia = pronosticoSemanal.filter(d => d.estado === "lluvia").length;

    return {
      min,
      max,
      promedio,
      alerta: promedio > 30 
        ? "Alerta de calor" 
        : diasLluvia >= 3 
          ? "Semana lluviosa" 
          : "Sin alertas"
    };
  }

  renderHome() {
    const contenedor = document.getElementById("home");
    contenedor.innerHTML = this.lugares.map(l => `
      <div class="card">
        <h3>${l.nombre}</h3>
        <p>Temp: ${l.temp}°C - ${l.estado}</p>
        <button onclick="app.cargarDetalleLugar('${l.id}')">Ver detalle</button>
      </div>
    `).join("");
  }

  renderDetalle(detalle) {
    const contenedor = document.getElementById("detalle");
    const stats = this.calcularEstadisticas(detalle.pronostico);

    contenedor.innerHTML = `
      <h2>${detalle.nombre}</h2>
      <div>
        ${detalle.pronostico.map(d => `
          <p>${d.dia}: ${d.temp}°C - ${d.estado}</p>
        `).join("")}
      </div>
      <h3>Estadísticas</h3>
      <p>Mín: ${stats.min}°C, Máx: ${stats.max}°C, Promedio: ${stats.promedio.toFixed(1)}°C</p>
      <h3>Alerta</h3>
      <p>${stats.alerta}</p>
    `;
  }

  mostrarError(msg) {
    document.getElementById("error").textContent = msg;
  }
}