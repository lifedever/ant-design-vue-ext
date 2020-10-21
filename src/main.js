import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/lib/style'
import example from './example'
import Lib from './lib'

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(example)
Vue.use(Lib)
new Vue({
    render: h => h(App),
}).$mount('#app')

