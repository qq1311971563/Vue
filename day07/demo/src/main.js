// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'


Vue.use(MintUi)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App)
})
