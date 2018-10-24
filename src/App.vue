<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body {
    font-size: 12px;
  }
  *{
    margin: 0;
    padding: 0;
  }
 .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .clearfix{
    display: block;
    content: '';
    clear: both;
  }
  .width{
    width:33%;
    height: 48px;
  }
  .bt{
    border-top: 2px solid #fff;
    width: 100%;
    height: 2px;
  }

</style>
