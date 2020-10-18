<template>
    <base-container
        v-bind="$props"
        class="menu-container">
        <template slot="headerLeft">
            <slot name="headerLeft"></slot>
        </template>
        <div slot="sider">
            <a-menu mode="inline" v-bind="menuConfig">
                <template v-for="menu in menus">
                    <a-sub-menu v-if="menu.children" :key="menu.key">
                        <span slot="title">
                            {{ menu.name || menu.title }}
                        </span>
                        <a-menu-item :key="subMenu.key"
                                     v-for="subMenu in menu.children">
                            {{ subMenu.name || subMenu.title}}
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else
                                 :key="menu.key">
                        {{ menu.name || menu.title }}
                    </a-menu-item>
                </template>

            </a-menu>
        </div>
        <slot></slot>
    </base-container>
</template>

<script>
    import BaseProps from './base-props'

    export default {
        name: "MenuContainer",
        props: Object.assign({}, BaseProps, {
            menus: Array,
            menuConfig: Object
        })
    }
</script>

<style scoped>

</style>