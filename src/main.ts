import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);

// Add global error handler to catch runtime errors
app.config.errorHandler = (err, _instance, info) => {
  console.error('Global error handler:', err, info);
};

app.mount('#app');
