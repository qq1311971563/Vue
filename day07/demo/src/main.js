// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*组件导入区*/
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/*CSS样式导入区*/
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

/*加载组件*/
Vue.use(MintUi)
Vue.use(VueRouter)
Vue.use(VueResource)
/*综合区*/
Vue.config.productionTip = false
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router
})
