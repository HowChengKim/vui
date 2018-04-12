<template>
  <div id="messageExample">
    <vui-button type="primary" tag="button" size="large" @click="showIt1">自动消失（默认500毫秒）</vui-button>
    <vui-message :text="text" :show="status1" @messageCb='messageCb1' />
    <vui-button type="primary" tag="button" size="large" @click="showIt2">2秒后消失</vui-button>
    <vui-message :text="text" :time="2000" :show="status2" @messageCb='messageCb2' />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框这是消息框',
      status1: false,
      status2: false,
    };
  },
  methods: {
    showIt1() {
      this.status1 = true;
    },
    messageCb1(data) {
      this.status1 = false;
    },
    showIt2() {
      this.status2 = true;
    },
    messageCb2(data) {
      this.status2 = false;
    }
  },
};
</script>
<style lang="stylus" scoped>
#messageExample {
  margin: 10px;

  .vui-button {
    margin-bottom: 10px;
  }
}
</style>


