<template>
  <div id="example">
    <div class="header">
      <img class="logo" src="../assets/logo.png" />
      <br/>
      <p class="words">{{ msg }}</p>
    </div>
    <div v-for="item in routers.base" :key="item.text">
      <vui-button type="default" tag="button" size="large">
        <router-link :to="{ path: item.path}">{{item.text}}</router-link>
      </vui-button>
    </div>
    <div v-for="item in routers.form" :key="item.text">
      <vui-button type="default" tag="button" size="large">
        <router-link :to="{ path: item.path}">{{item.text}}</router-link>
      </vui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UIExample',
  data() {
    return {
      routers: {
        // 基础组件
        base: [
          {
            text: 'Dialog - 对话框',
            path: 'dialog'
          },
          {
            text: 'Message - 消息框',
            path: 'message'
          }
        ],
        form: [
          {
            text: 'Button - 按钮',
            path: 'button'
          },
          {
            text: 'Header - 头部',
            path: 'Header'
          }
        ]
      },
      msg: 'vui 组件库'
    };
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#example {
  .vui-button {
    margin-bottom: 10px;
  }

  a {
    display: block;
  }
}

.header {
  text-align: center;
  margin: 20px 0;

  .logo {
    width: 50%;
    margin: 0 auto;
  }

  .words {
    margin: 8px 0;
    font-size: 14px;
    color: #456a64;
  }
}
</style>
