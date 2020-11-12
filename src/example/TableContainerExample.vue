<template>
    <table-container hide-header :table-data="data" :table-config="tableConfig">
        <s-table-column title="姓名" prop="name"></s-table-column>
        <s-table-column title="性别" prop="sex"></s-table-column>
        <s-table-column title="年龄" prop="age"></s-table-column>
        <s-table-column title="邮箱" prop="email"></s-table-column>
    </table-container>
</template>

<script>

    export default {
        name: "TableContainerExample",
        data() {
            return {
                data: [
                    {
                        id: '1',
                        name: '张三',
                        age: 23,
                        sex: '男',
                        email: 'zhangsan@163.com'
                    },
                    {
                        id: '2',
                        name: '李四',
                        age: 23,
                        sex: '男',
                        email: 'lisi@163.com'
                    },
                    {
                        id: '3',
                        name: '王五',
                        age: 23,
                        sex: '男',
                        email: 'wangwu@163.com'
                    },
                ],
                tableConfig: {
                    rowSelection: {}
                }
            }
        }
    }
</script>

<style scoped>

</style>