/*class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async obtenerClimaActual() {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Error en la API");
    return res.json();
  }

  async obtenerPronostico(id) {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Error en la API");
    return res.json();
  }
}*/

export class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async obtenerClimaActual() {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Error al cargar datos");
    const data = await res.json();
    return data.lugares;
  }

  async obtenerPronostico(id) {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error("Error al cargar datos");
    const data = await res.json();
    return data.lugares.find(l => l.id === id);
  }
}