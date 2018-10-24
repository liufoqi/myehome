<template>
<div class="main">
 <div class="title">
   <Header :title="title1" v-if="this.type===1"></Header>
 <Header :title="title4" v-else-if="this.type===4"></Header>
 <Header :title="title6" v-else-if="this.type===6"></Header>
   <Header :title="title" v-else></Header>
 </div>
  <div class="list" v-for="(item,index) in list" :key="index" >
    <router-link :to="{path:'/anytime',query:{newsId:item.newsId}}" >
      <img :src="item.pic" class="fll">
      <div class="flr list-detail">
        <p>{{item.title}}</p>
        <span>{{item.currentTime}}</span>
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
          type:0,
          title:"信工新闻眼",
          title1:'特色活动',
          title4:"制度建设",
          title6:'随时随地学',
          list:[],
        }
      },
      methods:{
        getData(){
          this.$axios.get(`/hhdj/news/newsList.do?page=1&rows=10&type=${this.type}`).then(res=>{
            console.log(res.data.rows);
            this.list=res.data.rows
          })
        }
      },
      created(){
        this.type=this.$route.query.type;
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
     }
   }
}
</style>
