<template>
    <div class="main">
      <div class="header">
        <Header :title="title" ></Header>
      </div>
      <div class="tilte">
        <p>{{$store.state.userInfo.totalScore}}</p>
      </div>
      <div class="detail" @click="handleDetail">
        <img src="../../../img/积分明细icon.png" class="fll">
        <div class=" flr detail-r">
          <h2 class="fll">积分明细</h2>
          <h3 class="flr"> ></h3>
        </div>
      </div>
      <div class="rule-title">
        <span>积分规则</span>
        <img src="../../../img/问号icon.png" class="flr">
      </div>
      <div class="rule" v-for="(item,index) in detail" :key="index">
        <div class="rule-left fll">{{item.title}}</div>
        <div class="rule-num flr">{{item.num}}</div>
      </div>
    </div>
</template>

<script>
import Header from '../../../components/header/tzheader'
    export default {
        components:{
         Header},
        data(){
          return{
            title:'个人量化积分',
            detail:[
              {
                title:'登录app',
                num:'5'
              },
              {
                title:'完善个人信息',
                num:'2'
              },
              {
                title:'查看积分',
                num:'1'
              },
              {
                title:'按时缴纳党费',
                num:'10'
              },
              {
                title:'查看通知',
                num:'2'
              },
              {
                title:'了解学院工作动态',
                num:'5'
              },
              {
                title:'上交思想汇报经审核通过',
                num:'5'
              },
              {
                title:'主动学习相关文件',
                num:'10'
              },
              {
                title:'认真撰写心得总结并上交经审核通过',
                num:'5'
              },
              {
                title:'提交个人总结，并参与评议',
                num:'2'
              },
              {
                title:'积极参与活动',
                num:'5'
              },
              {
                title:'学习党建知识',
                num:'5'
              },
              {
                title:'学习党史',
                num:'10'
              },
              {
                title:'创先争优事迹',
                num:'10'
              },
              {
                title:'学习党章，学习近平总书记系列讲话',
                num:'10'
              },
              {
                title:'用镜头记录两学一做过程中令人感动的人和事',
                num:'3'
              },
              {
                title:'关注并积极参与特色活动',
                num:'5'
              },
              {
                title:'制度化、常态化建设',
                num:'5'
              },
            ]
          }
        },
      methods:{
          handleDetail(){
            this.$router.push('/jfdetail')
          }
      }

    }
</script>

<style scoped lang="scss">
.tilte{
  width: 100%;
  height: 145px;
  background: url("../../../img/jifen.png");
  background-size: 100% 145px;
   p{
     font-size: 18px;
     line-height: 25px;
     font-weight: 400;
     color: #fff;
     text-align: center;
     padding-top: 60px;
   }
   }
  .detail{
    margin-top: 5px;
    height: 40px;
    padding: 0.4em 1em 0.4em 0.6em;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    img{
      margin-top: 5px;
      height: 30px;
      width: 30px;
    }
    .detail-r{
      h2{
        font-size: 16px;
        margin: 8px 220px 0 0;
        color: #c5c;
      }
      h3{
        font-size: 25px;
        position: relative;
        right: 0;
      }
    }

  }
 .rule-title{
    height: 14px;
    background: #c1c1c1;
    padding: 8px 15px 10px 10px;
   font-size: 16px;
 }
  .rule{
    padding: 0.5em 1.3em  0 0.8em;
    height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    .rule-num{
      color: red;
    }
  }
</style>
