<template>
    <menu-container hide-header
                    :menu-config="menuConfig"
                    :menus="menus">
        <pre>
import BaseContainer from "@/lib/container/BaseContainer";
        </pre>
    </menu-container>
</template>

<script>
    import MenuContainer from "@/lib/container/MenuContainer.vue";
    export default {
        name: "MenuContainerExample.vue",
        components: {MenuContainer},
        data() {
            return {
                menus: [
                    {
                        key: 'menu1',
                        name: '菜单1',
                        icon: 'fold',
                        children: [
                            {
                                key: 'menu1-s1',
                                title: '菜单1 的子菜单1'
                            }
                        ]
                    },
                    {
                        key: 'menu2',
                        title: '菜单2'
                    },
                    {
                        key: 'menu3',
                        title: '菜单3'
                    },
                    {
                        key: 'menu4',
                        title: '菜单4'
                    },
                    {
                        key: 'menu5',
                        title: '菜单5'
                    },
                    {
                        key: 'menu6',
                        title: '菜单6'
                    },
                    {
                        key: 'menu7',
                        title: '菜单7'
                    },
                    {
                        key: 'menu8',
                        title: '菜单8'
                    },
                    {
                        key: 'menu9',
                        title: '菜单9'
                    },
                    {
                        key: 'menu10',
                        title: '菜单10'
                    }
                ],
                menuConfig: {
                    defaultOpenKeys: ['menu1'],
                    defaultSelectedKeys: ['menu1-s1']
                }
            }
        },

    }
</script>

<style scoped>

</style>