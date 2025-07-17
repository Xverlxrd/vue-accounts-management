import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'
import './styles/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(Antd)
app.use(pinia)
app.mount('#app')