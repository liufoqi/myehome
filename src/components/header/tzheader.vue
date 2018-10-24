<template>
  <div>
    <div class="header-wrap clearfix">

      <div v-if="num">
        <h2>{{title}}</h2>
      </div>
      <div class="header-left clearfix">
        <div v-if="btn" class="btn">
          <span class="fll spanL" @click="handleReturn"><</span>
          <p class="fll">{{title}}</p>
          <span v-if="isEdit" class="flr spanB" @click="handleSave">保存</span>
          <span v-if="btn&&!this.isEdit" class="flr spanB" @click="handleEdit">编辑</span>
        </div>
        <div v-if="!btn&&!num" class="left">
          <span class="spanM fll" @click="handleReturn"><</span>
          <h3>{{title}}</h3>
        </div>
      </div>
    </div>

  </div>


</template>
<script>
  export default {
     props:{
       nodata:String,
       title:String,
       num:String,
       btn:String,
     },
    data(){
       return{
         isEdit:false
       }
    },
    methods: {
      handleReturn() {
        this.$router.back(-1)
      },
      handleEdit() {
        this.isEdit = 'edit' ,
        this.$emit('handleEdit');
      },
      handleSave() {
        this.isEdit = ''
        this.$emit('handleSave');
      },
    }
  }
</script>

<style scoped lang="scss">
  .nodata{
    background: #fff;
    .nodata-detail{
      text-align: center;
    }
  }

  .header-wrap{
    background:#c50206;
    height: 44px;
    width: 100%;
    h2{
      font-size: 20px;
      padding-top: 10px;
      color:#ffffff;
      text-align: center;
    }

    .header-left{
      .left{
        width: 100%;
        h3{
          font-size: 20px;
          color:#ffffff;
          text-align: center;
          padding-top: 10px;
        }
        .spanM{
          font-size:30px;
          font-weight: 200;
          color:#ffffff;
          margin-top: 1px;
          margin-left: 10px;
        }
      }
      width: 100%;
      .spanL{
        font-size:30px;
        font-weight: 200;
        color:#ffffff;
        margin-top: 1px;
      }
      p{
        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color:#ffffff;
      }
    }
    .btn{
    width: 100%;
      p{

        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color:#ffffff;
        width: 84%;
      }
      .spanL{
        width:8%;
        font-size:30px;
        font-weight: 200;
        color:#ffffff;
        margin-top: 1px;
      }
      .spanB{
        width:8%;
        font-size:14px;
        font-weight: 200;
        color:#ffffff;
        margin-top: 20px;
        position: absolute;
        right:15px;

      }
    }

  }
</style>
