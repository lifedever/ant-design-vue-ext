<template>
    <a-layout class="base-container">
        <a-layout-header v-if="!hideHeader">
            <div class="base-container-header-left"
                 v-if="$slots['headerLeft']">
                <slot name="headerLeft"></slot>
            </div>
            <div class="base-container-header-left" v-else-if="title">
                {{ title }}
            </div>
            <div class="base-container-header-right">
                <slot name="headerRight"></slot>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider v-if="$slots['sider']"
                            v-bind="siderConfig">
                <slot name="sider"></slot>
            </a-layout-sider>
            <a-layout-content ref="contentRef"
                              :class="[transparent? 'bg-transparent': '', noPad? 'no-pad': '']">
                <slot></slot>
            </a-layout-content>
        </a-layout>
        <a-layout-footer v-if="$slots['footer']">
            <slot name="footer"></slot>
        </a-layout-footer>
    </a-layout>
</template>

<script>
    export default {
        name: "BaseContainer",
        components: {

        },
        props: {
            hideHeader: Boolean,
            title: String,
            transparent: Boolean,
            siderConfig:{
                type: Object,
                default(){
                    return {
                        style: {
                            background: '#fff'
                        }
                    }
                }
            },
            noPad: Boolean
        },
        mounted() {
        },
        computed: {},
        methods: {}
    }
</script>
<style>
</style>