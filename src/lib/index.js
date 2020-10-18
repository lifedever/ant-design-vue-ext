import VueBus from "vue-bus";
import BaseContainer from "@/lib/container/BaseContainer";
import SplitContainer from "@/lib/container/SplitContainer";
import TabContainer from "@/lib/container/TabContainer";
import TableContainer from "@/lib/container/TableContainer";
import TreeContainer from "@/lib/container/TreeContainer";

import STable from "@/lib/partial/table/STable";
import STableColumn from "@/lib/partial/table/STableColumn";

import './less/index.less'
export default {
    install(Vue) {
        Vue.use(VueBus)
        Vue.component('BaseContainer', BaseContainer)
        Vue.component('SplitContainer', SplitContainer)
        Vue.component('TabContainer', TabContainer)
        Vue.component('TableContainer', TableContainer)
        Vue.component('TreeContainer', TreeContainer)

        Vue.component('STable', STable)
        Vue.component('STableColumn', STableColumn)
    }
}