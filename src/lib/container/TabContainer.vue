<template>
    <base-container
        v-bind="$props">
        <template slot="headerLeft">
            <slot name="headerLeft"></slot>
        </template>
        <a-tabs v-model="current" :animated="false" @change="tabChange" :tabPosition="tabPosition">
            <template>
                <slot></slot>
            </template>

            <template slot="tabBarExtraContent">
                <slot name="tabBarExtraContent"></slot>
            </template>
        </a-tabs>
    </base-container>
</template>

<script>
    import BaseProps from './base-props'

    export default {
        name: "TabContainer",
        components: {
        },
        data() {
            return {
                current: null,
                routeName: null
            }
        },
        mounted() {
            this.routeName = this.$route.name
            this.current = this.$route.query._t || this.defaultTab
            this.routeTab()
        },
        props: Object.assign({}, BaseProps, {
            defaultTab: [String, Number],
            tabPosition: {
                type: String,
                default: 'top'
            }
        }),
        watch: {
            '$route'(value) {
                if (value.name === this.routeName && this.$route.query._t) {
                    this.current = this.$route.query._t
                }
            }
        },
        methods: {
            routeTab() {
                if (!this.$router) {
                    return false
                }
                let query = Object.assign({}, this.$route.query);
                query._t = this.current
                this.$router.push({
                    query
                })
            },
            tabChange() {
                console.log('tab container, tab change', this.routeName)
                this.routeTab()
            }
        }
    }
</script>

<style>
</style>