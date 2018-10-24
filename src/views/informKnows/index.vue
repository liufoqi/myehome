<template>
<div class="main">
  <div class="main-header">
    <Header :title="title"
            :num="num">
    </Header>
  </div>
  <div class="main-wrap">
    <div class="main">
      <div class="new" v-for="(item,index) in newList" :key="index">
        <router-link :to="{path:'/anytime',query:{newsId:item.newsId}}">
          <div class="new-left fll" >
            <img src="../../img/mainNav/iconfont_gonggaotongzhi.png" alt="">
          </div>
          <div class="new-right flr">
            <p class="detail">{{item.title}}</p>
            <p class="time">{{item.currentTime}}</p>
          </div>
        </router-link>

      </div>
      <div class="bottom">没有数据了</div>
    </div>
  </div>
  <div class="main-footer">
    <Footer></Footer>
  </div>
</div>
</template>
<script>
  import Header from '@/components/header/tzheader.vue'
  import Footer from '@/components/footer/tzFooter.vue'
  export default {
    data() {
      return {
        title:'通知早知道',
        num:'0',
        newList:[]
      }
    },
    components: {
      Header,
      Footer,
    },
    methods: {
      getData() {
        this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res => {
            // console.log(res.data)
           this.newList =res.data.rows
        })
      },
    },
    created() {
      this.getData()
    }
  }
</script>
<style scoped  lang="scss">
  .main{
    .main-header{
      position: absolute;
      top:0;
      width: 100%;
    }
    .main-footer{
      position: absolute;
      bottom: 0;
      width: 100%;

    }
    .main-wrap{
     margin: 44px 0 46px 0 ;
      height: 577px;
      overflow: auto;
      width: 100%;

    }
  }

  .bottom{
    padding-top: 10px;
    font-size: 18px;
    text-align: center;
  }
  .new{
    height: 100px;
    border-bottom: 1px solid #ccc;

    .new-left{
      img{
        height: 36px;
        width: 36px;
        padding: 22px;
      }
    }
    .new-right{
      margin-top: 15px;
      .detail{
        line-height: 1.5;
        font-size: 18px;
        width:275px;
        padding-right: 20px;
        word-wrap: break-word;
        height: 54px;
      }
      .time{
        font-size: 10px;
        line-height: 1;
        position: relative;
        bottom:0 ;
      }
    }
  }

</style>
<!--/*.clearfix{*/-->
<!--/*content:'';*/-->
<!--/*display: block;*/-->
<!--/*clear: both;*/-->
<!--/*height: 0;*/-->
<!--/*width: 0;*/-->
<!--/*}*/-->
