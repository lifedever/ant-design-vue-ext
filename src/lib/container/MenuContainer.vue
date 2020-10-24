<template>
    <base-container
        v-bind="$props"
        class="menu-container">
        <template slot="headerLeft">
            <slot name="headerLeft"></slot>
        </template>
        <div slot="sider">
            <a-menu mode="inline"
                    @openChange="openChangeHandle"
                    @select="selectHandle"
                    v-bind="menuConfig">
                <template v-for="menu in menus">
                    <a-sub-menu v-if="menu.children"
                                :key="menu.key">
                        <span slot="title">
                            {{ menu.name || menu.title }}
                        </span>
                        <a-menu-item :key="subMenu.key"
                                     @click="handlerClick(menu)"
                                     v-for="subMenu in menu.children">
                            {{ subMenu.name || subMenu.title}}
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else
                                 @click="handlerClick(menu)"
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
        }),
        methods: {
            handlerClick(o) {
                this.$emit('click', o)
            },
            openChangeHandle(o) {
                this.$emit('openChange', o)
            },
            selectHandle(o) {
                this.$emit('select', o)
            }
        }
    }
</script>

<style scoped>

</style>