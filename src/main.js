import { createApp } from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#main-app')

createApp(Header)
  .mount('#header-app')
