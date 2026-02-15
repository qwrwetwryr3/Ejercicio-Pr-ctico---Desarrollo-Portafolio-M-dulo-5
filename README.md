# Ejercicio-Pr-ctico---Desarrollo-Portafolio-M-dulo-5
App del clima con consumo de API.

# 🌤️ App de Clima

## Descripción
La **App de Clima** es una aplicación web desarrollada como parte del módulo de portafolio. Su temática consiste en mostrar información meteorológica de distintos lugares, incluyendo el clima actual, pronóstico semanal, estadísticas y alertas.  
En esta versión se utiliza un archivo local `data.json` con datos ficticios para simular la respuesta de una API real.

---

## Estructura de Clases

- **ApiClient**  
  Encargada de obtener los datos de clima desde la fuente (en este caso, `data.json`).  
  Métodos principales:  
  - `obtenerClimaActual()` → retorna el listado de lugares con su clima actual.  
  - `obtenerPronostico(id)` → retorna el detalle y pronóstico semanal de un lugar específico.

- **WeatherApp**  
  Gestiona la lógica de la aplicación y la interacción con el DOM.  
  Funciones principales:  
  - `cargarLugares()` → carga y renderiza la vista Home con los lugares disponibles.  
  - `cargarDetalleLugar(id)` → muestra el detalle de un lugar con su pronóstico semanal.  
  - `calcularEstadisticas(pronosticoSemanal)` → calcula estadísticas (mínimo, máximo, promedio) y genera alertas.  
  - `renderHome()` y `renderDetalle()` → renderizan la información en pantalla.  
  - `mostrarError(msg)` → muestra mensajes de error en caso de fallos.

---

## API de Clima utilizada
En esta versión se utiliza un archivo local `data.json` como fuente de datos.  
- **Nombre:** API ficticia de clima (simulada).  
- **URL base:** `./data.json`  
- **Documentación:** No aplica, ya que es un archivo JSON creado para pruebas.  

En una versión real, se podría conectar a una API pública como [OpenWeatherMap](https://openweathermap.org/api).

---

## Cálculo de Estadísticas
La aplicación calcula estadísticas a partir del pronóstico semanal de cada lugar:
- **Temperatura mínima:** valor más bajo de la semana.  
- **Temperatura máxima:** valor más alto de la semana.  
- **Promedio semanal:** promedio de todas las temperaturas.  
- **Alertas:**  
  - *Alerta de calor* si el promedio supera los 30°C.  
  - *Semana lluviosa* si hay 3 o más días con lluvia.  
  - *Sin alertas* en caso contrario.

---

## Enlace al repositorio
[Repositorio público en GitHub](https://github.com/qwrwetwryr3/Ejercicio-Pr-ctico---Desarrollo-Portafolio-M-dulo-5)

---
