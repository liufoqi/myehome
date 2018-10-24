<template>
<div class="main">
 <div class="title">
 <Header :title="title"></Header>
 </div>
  <div class="list" v-for="(item,index) in list" :key="index" >
    <router-link :to="{path:'/anytime',query:{newsId:item.newsId}}">
      <img :src="item.pic" class="fll">
      <div class="flr list-detail">
        <p>{{item.title}}</p>
        <span>{{item.currentTime}}</span>
        <span class="flr">
        <img src="../../../img/12-eye.png" >
        {{item.count}}</span>
      </div>
    </router-link>


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
          title:"党建一点通",
          list:[]
        }
      },
      methods:{
        getData(){
          this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=3').then(res=>{
            console.log(res)
            this.list=res.data.rows
          })
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
 .list{
   height: 80px;
   margin: 10px;
   img{
     height: 80px;
     width: 80px;
   }
   .list-detail{
     height: 80px;
     overflow: auto;
     width: 265px;
     p{
       height: 48px;
       margin-bottom:5px;
       font-size: 16px;
       line-height: 1.5;
       font-weight: 600;
       color: #000;
     }
     span{
       position: relative;
       bottom: 1px;
       img{
         height:10px;
         width: 14px;
       }
     }
   }
}
</style>
