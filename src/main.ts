import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import components from '@/components/UI'

const app = createApp(App)

app.use(router)
app.mount('#app')

components.forEach(component => {
    app.component(component.name, component);
});