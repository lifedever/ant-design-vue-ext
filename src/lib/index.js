import BaseContainer from "@/lib/container/BaseContainer.vue";
import SplitContainer from "@/lib/container/SplitContainer.vue";
import TabContainer from "@/lib/container/TabContainer.vue";
import TableContainer from "@/lib/container/TableContainer.vue";
import TreeContainer from "@/lib/container/TreeContainer.vue";
import MenuContainer from "@/lib/container/MenuContainer.vue";

import STable from "@/lib/partial/table/STable.vue";
import STableColumn from "@/lib/partial/table/STableColumn.vue";
import SModal from "@/lib/partial/s-modal";

import '@/lib/less/index.less'

export default {
    install(Vue) {
        Vue.use(SModal)

        Vue.component('BaseContainer', BaseContainer)
        Vue.component('SplitContainer', SplitContainer)
        Vue.component('TabContainer', TabContainer)
        Vue.component('TableContainer', TableContainer)
        Vue.component('TreeContainer', TreeContainer)
        Vue.component('MenuContainer', MenuContainer)

        Vue.component('STable', STable)
        Vue.component('STableColumn', STableColumn)
    }
}