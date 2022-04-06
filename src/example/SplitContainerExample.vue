<template>
  <split-container hide-header value="200px">
    <div slot="left" class="pad">数据啊 数据啊 数据啊 数据啊 数据啊 数据啊</div>
    <template v-slot:right>
      <table-container-example />
    </template>
  </split-container>
</template>

<script>
  export default {
    name: 'SplitContainerExample',
  };
</script>

<style scoped></style>
