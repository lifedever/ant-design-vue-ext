import BaseContainerExample from "@/example/BaseContainerExample.vue";
import SplitContainerExample from "@/example/SplitContainerExample.vue";
import TableContainerExample from "@/example/TableContainerExample.vue";
import TreeContainerExample from "@/example/TreeContainerExample.vue";
import MenuContainerExample from "@/example/MenuContainerExample.vue";
import TabContainerExample from "@/example/TabContainerExample.vue";
import ModalContainerExample from "@/example/ModalContainerExample.vue";

export default {
    install(Vue) {
        Vue.component('BaseContainerExample', BaseContainerExample)
        Vue.component('SplitContainerExample', SplitContainerExample)
        Vue.component('TableContainerExample', TableContainerExample)
        Vue.component('TreeContainerExample', TreeContainerExample)
        Vue.component('MenuContainerExample', MenuContainerExample)
        Vue.component('TabContainerExample', TabContainerExample)
        Vue.component('ModalContainerExample', ModalContainerExample)
    }
}