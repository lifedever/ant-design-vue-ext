<template>
    <base-container
        class="table-container"
        v-bind="$props"
        :title="title"
        ref="baseRef"
        :hide-index="hideIndex"
        @headerDbClick="loadData"
    >
        <template slot="headerLeft">
            <slot name="headerLeft"></slot>
        </template>
        <template v-slot:headerRight>
            <slot name="headerRight"></slot>
        </template>
        <s-table
            :config="bindTableConfig"
            @change="tableChange"
            class="table-container-s-table"
        >
            <s-table-column
                title="#"
                prop="nickname"
                :width="60"
                align="center"
                :fixed="fixedIndex ? 'left' : null"
                v-if="!hideIndex"
            >
                <template slot-scope="{ index }">
                    <div v-if="pageable">
                        {{
                            pagination.pageSize * (pagination.current - 1) +
                            index +
                            1
                        }}
                    </div>
                    <div v-else>
                        {{ index + 1 }}
                    </div>
                </template>
            </s-table-column>
            <slot></slot>
            <s-table-column
                title="操作"
                :width="operationWidth"
                v-if="operation"
                align="center"
                :fixed="fixedOperation ? 'right' : null"
            >
                <template slot-scope="{ text, record }">
                    <a-button
                        size="small"
                        :disabled="record.disableEdit"
                        type="primary"
                        @click="
                            () => {
                                $emit('editItem', record);
                            }
                        "
                        >编辑
                    </a-button>
                    &nbsp;
                    <a-button
                        size="small"
                        type="danger"
                        :disabled="record.disableDelete"
                        @click="removeItem(record)"
                        >删除
                    </a-button>
                    &nbsp;
                    <slot name="otherOperation" v-bind:record="record"></slot>
                </template>
            </s-table-column>
        </s-table>
        <div slot="footer">
            <div v-if="pageable">
                <a-pagination
                    v-model="pagination.current"
                    :showTotal="
                        (total, range) =>
                            `第 ${range[0]}-${range[1]} 条 / 共 ${total} 条记录`
                    "
                    :page-size="pagination.pageSize"
                    :total="pagination.total"
                    @change="paginationChange"
                ></a-pagination>
            </div>
            <div v-else class="pull-right">
                共 {{ dataSource.length }} 条记录
            </div>
        </div>
    </base-container>
</template>

<script>
    import { clearObj } from "../util/tools";
    import BaseProps from './base-props'

    export default {
        name: "TableContainer",
        components: {
        },
        props: Object.assign({}, BaseProps, {
            tableConfig: Object,
            url: String,
            dataLoading: Boolean,
            title: String,
            tableData: Array,
            pageable: Boolean,
            hideIndex: {
                type: Boolean,
                default: false
            },
            operation: {
                type: Boolean,
                default: true
            },
            operationWidth: {
                type: [Number],
                default: 150
            },
            // 数据主键
            itemKey: {
                type: String,
                default: 'id'
            },
            fixedIndex: {
                type: Boolean,
                default: true
            },
            fixedOperation: {
                type: Boolean,
                default: true
            },
            httpInstance: {
                type: [Object, Function],
                default () {
                    return this.$http
                }
            }
        }),
        data () {
            return {
                data: null,
                dataSource: [],
                loading: false,
                tableHeight: null,
                pagination: {
                    current: 1,
                    pageSize: 10,
                    total: 0
                },
            }
        },
        computed: {
            bindTableConfig () {
                return Object.assign({}, {
                    size: 'middle',
                    dataSource: this.dataSource,
                    loading: this.tableData ? this.dataLoading : this.loading,
                    rowKey: this.itemKey,
                    pagination: false,
                    indentSize: 20
                }, this.tableConfig)
            }
        },
        mounted () {
            if (this.tableData) {
                this.initData();
            } else {
                this.loadData();
            }
            window.addEventListener('resize', this.computedTableHeight)
        },
        watch: {
            url () {
                if (this.url) {
                    this.loadData()
                }
            },
            tableData () {
                this.initData()
            }
        },
        methods: {
            initData () {
                this.dataSource = this.tableData
            },
            tableChange (pagination, filters, sorter) {
                console.log('pagination', pagination)
                console.log('filters', filters)
                console.log('sorter', sorter)
                // this.loadData({page: pagination.current})
                this.$emit('change', { pagination, filters, sorter })
            },
            paginationChange (page) {
                this.loadData({ page })
                // this.$router.replace({
                //     query: {
                //         page: page
                //     }
                // })
            },
            loadData (params) {
                if (!this.httpInstance) {
                    console.warn('[TableContainer] warning: 请设置 "httpInstance" 属性！')
                    return false
                }
                this.loading = true;
                this.httpInstance.get(this.url, {
                    params: clearObj({
                        page: params && params.page ? params.page - 1 : (this.pageable && this.$route.query.page ? Number(this.$route.query.page) - 1 : null)
                    })
                }).then(res => {
                    this.data = res.data
                    if (this.pageable) {
                        this.dataSource = this.data.content
                        this.pagination.current = this.data.number + 1;
                        this.pagination.pageSize = this.data.size
                    } else {
                        this.dataSource = this.data
                    }
                    this.computedPagination()
                    this.loading = false
                    this.computedTableHeight()
                    this.$emit('load', this.dataSource)
                })
            },
            computedPagination () {
                if (this.pageable) {
                    this.pagination.pageSize = this.data.size
                    this.pagination.total = this.data.totalElements
                }
            },
            computedTableHeight () {
                this.$nextTick(() => {
                    if (this.$refs['baseRef'] && this.$refs['baseRef'].$refs['contentRef'] && this.$refs['baseRef'].$refs['contentRef'].$el) {
                        this.tableHeight = this.$refs['baseRef'].$refs['contentRef'].$el.clientHeight - 75
                        if (this.bindTableConfig.pagination) {
                            this.tableHeight = this.tableHeight - 32
                        }
                    }
                })
            },
            removeItem (item) {
                this.$Modal.confirm({
                    message: '确认',
                    content: '确认要删除当前记录吗？',
                    okText: '确定删除',
                    cancelText: '再想想？',
                    onOk: () => {
                        if (this.url) {
                            let url = this.url.split(/[?#]/)[0]
                            this.loading = true
                            this.httpInstance.delete(`${url}/${item[this.itemKey]}`).then(() => {
                                this.$message.success('删除成功')
                                this.loadData()
                            }).catch(err => {
                                this.$emit('deleteFail', err)
                            })
                        } else {
                            this.$emit('deleteItem', item)
                        }
                    }
                })
            }
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.computedTableHeight)
        }
    }
</script>