<template>
<div class="main">
 <div class="title">
 <Header :title="title"></Header>
 </div>
  <div>
  <div class="list">
    <div  v-for="(item,index) in list" :key="index" >
      <div class="list-detail"   >
        <div class="list-top">
          <img :src="item.header" class="fll"  v-if="item.header">
          <img src="../../../img/头像.png" class="fll" v-else>
          <div class="detail fll">
            <p>{{item.username}}</p>
            <span> <img src="../../../img/时间.png">{{item.currentTime}}</span>
            <span><img src="../../../img/声音.png"> 公开</span>
          </div>
          <div class="list-right  flr">
            <img src="../../../img/党员互动icon.png">
          </div>
        </div>
        <div class="list-bottom">
          <div class="content">
            <p>{{item.content}}</p>
          </div>
          <div class="list-btn flr">
            <button @click=" hanldeDetail(item.formId)">回复</button>
          </div>
        </div>
      </div>
      <div class="bg"></div>
    </div>
  </div>
  <div class="add">
      <img src="../../../img/发布btn.png">
    </div>
  </div>
  <div>
  </div>
</div>
</template>
<script>
  import Header from '../../../components/header/tzheader'
    export default {
    components:{
      Header
    },
      data(){
        return{
          title:"党员云互动",
          list:[]
        }
      },
      methods:{
        getData(){
          this.$axios.get('/hhdj/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res=>{
            console.log(res)
            this.list=res.data.rows
          })
        },
        handleDetail(id){
          this.router.push('/hddetail',id={id})
        },
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .list{
     height:620px;
    overflow: auto;
  }
   .list-detail {
     margin: 10px auto;
     height: 112px;
     width: 345px;
     .list-top{
       margin-top: 10px;
       height: 46px;
       img {
         height: 35px;
         width: 35px;
         margin-top: 5px;
       }
       .detail{
         margin-left: 15px;
         p {
           font-size: 16px;
           line-height: 1.5;
           font-weight: 600;
           color: #000;
         }
         img{
           height: 12px;
           width: 12px;
         }
       }
     }
     .list-right{
        img{
          width: 66px;
          height: 26px;
        }
     }
  .list-bottom{
    height: 40px;
    margin-bottom: 10px;
    .content{
      height: 40px;
      width: 100%;
      overflow: hidden;
      font-size: 16px;
      margin-top: 5px;
    }
    .list-btn{
      button{
        background: #fff;
        border: none;
        outline: none;
      }
    }
  }
   }
   .bg{
       height: 15px;
       background: #ccc;
     border-bottom: 1px solid #f1f1f1;
     border-top: 1px solid #f1f1f1;
     }
  .add{
    img{
      height: 63px;
      width: 57px;
      position: absolute;
      right: 0;
      bottom: 40px;
    }
  }
</style>
