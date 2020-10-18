<template>
    <div id="app">
        <base-container title="组件示例"
                        transparent
                        hide-header>
            <a-menu mode="inline"
                    :default-open-keys="['layout']"
                    :default-selected-keys="[currentMenu.key]"
                    slot="sider"
                    @select="handleChange">
                <a-sub-menu v-for="menu in menus" :key="menu.key">
                    <span slot="title">
                        <a-icon :type="menu.icon"/>
                        {{ menu.name }}
                    </span>
                    <a-menu-item :key="subMenu.key"
                                 v-for="subMenu in menu.children">
                        {{ subMenu.name }}
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
            <base-container class="base-container-example"
                            :no-pad="currentMenu.noPad"
                            :title="currentMenu.name">
                <component :is="currentMenu.key + 'Example'"></component>
            </base-container>
        </base-container>
    </div>
</template>

<script>
    import BaseContainer from "@/lib/container/BaseContainer";

    let menus = [
        {
            name: '布局',
            key: 'layout',
            icon: 'layout',
            children: [
                {
                    name: '基础布局',
                    key: 'BaseContainer'
                },
                {
                    name: '分割布局',
                    noPad: true,
                    key: 'SplitContainer'
                },
                {
                    name: '表格布局',
                    noPad: true,
                    key: 'TableContainer'
                },
                {
                    name: '树布局',
                    noPad: true,
                    key: 'TreeContainer'
                },
                {
                    name: '菜单布局',
                    noPad: true,
                    key: 'MenuContainer'
                },
                {
                    name: '标签布局',
                    noPad: true,
                    key: 'TabContainer'
                }
            ]
        }
    ]
    export default {
        name: 'App',
        components: {BaseContainer},
        data() {
            return {
                currentMenu: menus[0].children[0],
                menus
            }
        },
        methods: {
            handleChange(item) {
                this.menus.forEach(menu => {
                    menu.children.forEach(subMenu => {
                        if (subMenu.key === item.key) {
                            this.currentMenu = subMenu
                        }
                    })
                })
            }
        }
    }
</script>
<style lang="less">
    html, body {
        padding: 0;
        margin: 0;
        height: 100%;
        background: rgba(0, 0, 0, .05);
        display: flex;
        flex-direction: column;

        #app {
            flex: 1;
            height: 100%;

            pre {
                background: rgba(0, 0, 0, .05);
                line-height: 0;
                padding: 25px 15px;
                border-radius: 4px;
            }
            .base-container-example {

            }
        }
    }
</style>
