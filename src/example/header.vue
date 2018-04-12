<template>
  <div id="headerExample">
    <div class="page-header-main">
      <vui-header fixed>
        <span slot="title">固定在顶部</span>
      </vui-header>
    </div>

    <vui-header>
      <span slot="title">标题过长会隐藏后面的内容啊哈哈哈哈</span>
    </vui-header>

    <vui-header>
      <div slot="left">恩</div>
      <span slot="title">左边有文案</span>
    </vui-header>

    <vui-header>
      <router-link to="/" slot="left">返回</router-link>
      <span slot="title">左边可点击</span>
    </vui-header>

    <vui-header>
      <span slot="title">右边文案</span>
      <div slot="right">哈</div>
    </vui-header>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="stylus" scoped>
#headerExample {
  .vui-header {
    background-color: #26a2ff;
    color: #fff;
    margin-bottom: 40px;
  }

  .page-header-main {
    margin-top: 90px;
  }
}
</style>


