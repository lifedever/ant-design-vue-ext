import EventBus from "../../util/eventBus";
import SModal from "../s-modal/SModal";

export default {
    install: (Vue) => {
        Vue.use(EventBus)
        Vue.component('SModal', SModal)

        let bus = Vue.bus
        Vue.prototype.$openModal = (view) => {
            console.log('open modal', view)
            bus.emit('bus_openModal', view)
        }
        Vue.prototype.$closeModal = () => {
            bus.emit('bus_closeModal')
        }
        Vue.prototype.$okLoadingModal = (loading) => {
            bus.emit('bus_okLoadingModal', loading)
        }

        Vue.prototype.$openFormModal = view => {
            view.modal = Object.assign({}, view.modal, {footer: null})
            bus.emit('bus_openModal', view)
        }
    }
}