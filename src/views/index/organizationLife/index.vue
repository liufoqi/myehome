<template>
    <div class="main">
      <div class="title">
        <Header :title="title"></Header>
      </div>
      <div class="main-wrap">
        <img src="../../../img/timg.jpg">
        <div class="selecion" v-for="(item,index) in selections" :key="index">
          <div class="icon fll">
            <img :src="item.src" >
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../../components/header/tzheader'
    export default {
       data(){
         return{
           title:'掌上组织生活',
           selections:[
             {
               title:'政治学习',
               src:require('../../../img/icon1.png')
             },
             {
               title:'思想汇报',
               src:require('../../../img/icon2.png')
             },
             {
               title:'心得总结',
               src:require('../../../img/icon3.png')
             },
             {
               title:'民主评议',
               src:require('../../../img/icon4.png')
             },
             {
               title:'流动党员找组织',
               src:require('../../../img/icon5.png')
             }
           ],

         }
       },
      components:{
         Header
      }

    }
</script>

<style scoped lang="scss">
.main-wrap{
  img{
    height: 186px;
    width: 100%;
    margin-bottom: 10px;
  }
}
.selecion{
  margin:0 7.5px;
  .icon{
    height: 145px;
    width: 120px;
    img{
      margin: 17.5px 17.5px 5px 17.5px;
      height: 85px;
      width: 85px;
    }
    p{
      text-align: center;

  }
  }
}
</style>
