<template>
  <component :is="'header'" class="vui-header" :class="{'vui-header-isFixed':fixed}">
    <div class="vui-header-left">
      <slot name="left"></slot>
    </div>
    <h1 class="vui-title">
      <slot name="title"></slot>
    </h1>
    <div class="vui-header-right">
      <slot name="right"></slot>
    </div>
  </component>
</template>
<script>
export default {
  name: 'vui-header',
  props: {
    fixed: Boolean,
  },
};
</script>
<style lang="stylus" scoped>
$bgColor = #fff;
$fontColor = #000;

.vui-header {
  padding: 0 10px;
  height: 46px;
  line-height: 46px;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  position: relative;
  white-space: nowrap;
  color: $fontColor;
  background-color: $bgColor;
  box-sizing: border-box;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0px solid #e5e5e5;
    border-bottom-width: 1px;
  }

  &.vui-header-isFixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }

  .vui-header-left, .vui-header-right {
    flex: 0.5;
    line-height: 46px;
  }

  .vui-header-left {
    text-align: left;
  }

  .vui-header-right {
    text-align: right;
  }

  .vui-title {
    text-align: center;
    font-weight: 400;
    font-size: inherit;
    line-height: 46px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>


