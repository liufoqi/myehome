<template>
    <div class="main">
      <div class="header">
        <Header :title="title" v-if="this.type===0"></Header>
        <Header :title="title2" v-if="this.type===2"></Header>
        <Header :title="title3" v-if="this.type===3"></Header>
        <Header :title="title5" v-if="this.type===5"></Header>
        <Header :title="title6" v-if="this.type===6"></Header>
        <Header :title="title7" v-if="this.type===7"></Header>
      </div>
      <div class="content" >
        <div class="title">{{this.article.title}}</div>
        <div class="main" v-html="this.article.content">

        </div>
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
          type:0,
          title:'信工新闻眼',
          title2:'通知早知道',
          title3:'党建一点通',
          title5:'党员身份亮相',
          title6:'随时随地学',
          title7:'随时随地拍',
          newsId:'',
          article:[],
        }
      },
      methods:{
          getData(){
          this.$axios.get('/hhdj/news/newsContent.do',{newsId:this.newsId}).then(
            res=>{
              console.log(res.data.data.type);
              this.article=res.data.data
              this.type=res.data.data.type
            }
          )
          }
      },
      created(){
        let query=this.$route.query;
        this.newsId= query.newsId;
        this.getData();
      }
    }
</script>

<style lang="scss">
.content{
  width: 92%;
  margin: 0 4%;
  .title{
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
  }
    .main{
    /deep/img{
      display: block;
      width:100%;
    }
  }

}
</style>
