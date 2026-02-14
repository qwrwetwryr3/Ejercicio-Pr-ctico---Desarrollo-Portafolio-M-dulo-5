import { ApiClient } from './apiClient.js';
import { WeatherApp } from './weatherApp.js';

const apiClient = new ApiClient("./data.json");
const app = new WeatherApp(apiClient);

app.cargarLugares();

window.app=app;