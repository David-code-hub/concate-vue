import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import concatenator from '../lib/concate-vue-plugin'

createApp(App).use(concatenator).mount('#app')
