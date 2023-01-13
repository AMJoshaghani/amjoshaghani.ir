import { createApp } from 'vue'
// v2: import Vue from 'vue'
import App from './App.vue'

// v2: Vue.config.productionTip = true

/*v2: new Vue({
  render: h => h(App),
}).$mount('#app')
*/

const app = createApp(App)
app.config.productionTip = true
app.mount('#app')
