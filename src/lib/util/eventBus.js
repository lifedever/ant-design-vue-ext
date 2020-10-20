export default {
    install(Vue) {
        const bus = new Vue()
        Object.defineProperty(bus, 'on', {
            get() {
                return this.$on.bind(this)
            }
        })
        Object.defineProperty(bus, 'off', {
            get() {
                return this.$off.bind(this)
            }
        })
        Object.defineProperty(bus, 'once', {
            get() {
                return this.$once.bind(this)
            }
        })
        Object.defineProperty(bus, 'emit', {
            get() {
                return this.$emit.bind(this)
            }
        })

        Object.defineProperty(Vue, 'bus', {
            get() {
                return bus
            }
        })

        Object.defineProperty(Vue.prototype, '$bus', {
            get() {
                return bus
            }
        })
    }
}