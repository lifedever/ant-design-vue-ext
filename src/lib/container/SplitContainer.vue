<template>
    <base-container class="split-container"
                    v-bind="$props">
        <template slot="headerLeft">
            <slot name="headerLeft"></slot>
        </template>
        <template v-slot:headerRight>
            <slot name="headerRight"></slot>
        </template>
        <split v-model="split" mode="horizontal" @on-moving="handleMoving">
            <div slot="left" class="height100">
                <slot name="left" />
            </div>
            <div slot="right" class="height100">
                <slot name="right" />
            </div>
        </split>

        <div slot="footer" v-if="$slots['footer']">
            <slot name="footer"></slot>
        </div>
    </base-container>
</template>

<script>
    import Split from "@/lib/partial/split-pane/split.vue";
    import BaseProps from './base-props'

    export default {
        name: "SplitContainer",
        components: {
            Split,
        },
        data(){
            return {
                split: null
            }
        },
        mounted() {
            this.split = this.value
        },
        watch: {
            value(){
                this.split = this.value
            }
        },
        props: Object.assign({}, BaseProps, {
            value: {
                type: [String, Number],
                default: 0.5
            }
        }),
        methods: {
            handleMoving(e){
                this.$emit('input', this.split);
                this.$emit('on-moving', e);
            }
        }
    }
</script>

<style scoped>

</style>