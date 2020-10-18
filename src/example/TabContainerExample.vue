<template>
    <tab-container hide-header>
        <a-tab-pane key="1" tab="Tab 1">
            Tab 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" disabled>
            Tab 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">
            Tab 3
        </a-tab-pane>
    </tab-container>
</template>

<script>
    export default {
        name: "TabContainerExample"
    }
</script>

<style scoped>

</style>