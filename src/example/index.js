import BaseContainerExample from "@/example/BaseContainerExample";
import SplitContainerExample from "@/example/SplitContainerExample";
import TableContainerExample from "@/example/TableContainerExample";
import TreeContainerExample from "@/example/TreeContainerExample";
import MenuContainerExample from "@/example/MenuContainerExample";
import TabContainerExample from "@/example/TabContainerExample";
import ModalContainerExample from "@/example/ModalContainerExample";

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