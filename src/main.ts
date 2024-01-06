import { createApp } from 'vue'
import App from './App.vue'
import 'es6-promise/auto'

import router from './router'
import store from './store/index'

import './index.css'
import components from '@/components/UI'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

components.forEach(component => {
  app.component(component.name, component);
});