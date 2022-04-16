import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import example from './example'
import { SModal } from './lib';

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(example)
Vue.use(SModal)
new Vue({
    render: h => h(App),
}).$mount('#app')

