<template>
    <div>
        <a-button type="primary" @click="openModal">
            打开Modal框
        </a-button>
    </div>
</template>

<script>
    export default {
        name: "ModalContainerExample",
        methods: {
            openModal() {
                this.$openModal({
                    component: () => import('./ExampleModal')
                })
            }
        }
    }
</script>

<style scoped>

</style>