import BaseContainerExample from "@/example/BaseContainerExample";
import SplitContainerExample from "@/example/SplitContainerExample";

export default {
    install(Vue) {
        Vue.component('BaseContainerExample', BaseContainerExample)
        Vue.component('SplitContainerExample', SplitContainerExample)
    }
}