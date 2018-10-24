<template>
  <div class="main">
    <div class="header">
      <Header :title="header"></Header>
    </div>
    <div class="content clearfix" >
      <div class="detail fll " v-for="(item,index) in list" :key="index">
        <router-link :to="{path:'/anytime',query:{newsId:item.newsId}}">
          <img :src="item.pic">
          <p>{{item.title}}</p>
        </router-link>

       </div>
    </div>
    <div class="bottom">
      <h3>没有更多数据了</h3>
    </div>
  </div>
</template>

<script>
  import Header from '../../../components/header/tzheader'
    export default {
        components:{
          Header,
        },
       data(){
          return{
            nodata:'nodata',
            header:'随时随地拍',
            list:[]
          }
       },
      methods:{
          getData(){
            this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=7').then(res=>{
              console.log(res.data)
              this.list=res.data.rows
              }
            )
          }
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
 .content{
   width: 100%;
   margin: 0 auto;
   overflow:auto;
   .detail{
     display: block;
     width:44%;
     height: 185px;
     margin: 10px 3%;
     a{
       text-decoration: none;
       color: #000000;
     }

     img{
       width: 100%;
       height: 150px;
     }
     p{
       text-align: center;

     }
   }

 }
  .bottom{
    h3{
      text-align: center;
      height: 30px;
    }
  }
</style>
