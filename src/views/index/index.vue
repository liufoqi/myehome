<template>
<div class="main">
  <div class="main-header">
    <Header></Header>
  </div>
  <div class="main-wrap">
    <div class="main">
      <div class="carousel">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <router-link :to="{ path: '/anytime', query:{newsId: slide.url } }">
              <img :src="slide.imgUrl">
              <div class="swiper-title">{{slide.title}}</div>
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <div class="menu-wrap">
        <div class="menu-top" >
          <div class="item fll" v-for="(item,index) in menuas"  :key="index">
            <div @click="handle(item.path)" >
              <div class="imgs">
                <img :src="item.src"  >
              </div>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
        <div class="menu-bottom" >
          <div class="item fll" v-for="(item,index) in menubs"  :key="index">
            <div @click="handle(item.path)" >
              <div class="imgs">
                <img :src="item.src" >
              </div>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="img">
        <img src="../../img/mainNav/banner01@2x.png" >
      </div>
      <div class="main-bottom">
        <div class="left"></div>
        <div class="mid">
          <div class="top">
            <router-link :to="{path:'/xgnews',query:{type:6}}">
              <div class="router"></div>
            </router-link>
          </div>
          <div class="bottom">
          <router-link  :to="{path:'/xgnews',query:{type:4}}">
            <div class="router"></div>
          </router-link>
          </div>
        </div>
        <div class="right">
          <div class="tops">
              <router-link :to="{path:'/shootanywhere'}">
                <div class="router"></div>
              </router-link>
            </div>

            <div class="bottoms">
              <router-link :to="{path:'/xgnews',query:{type:1}}">
                <div class="router"></div>
              </router-link>
            </div>

        </div>
      </div>
    </div>
  </div>
  <div class="main-footer">
    <Footer></Footer>
</div>
</div>
</template>
<script>
  import Header from '@/components/header/header.vue'
  import Footer from '@/components/footer/footer.vue'
  export default {
        components:{
          Header,
           Footer,
       },
    data() {
      return{
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [],
        menuas:[
          {
            'src':require('../../img/mainNav/icon_01@2x.png'),
            title:'信工新闻眼',
            path:'/xgnews'
         },
          {
            path:'/zslife',
            'src':require('../../img/mainNav/icon_03@2x.png'),
            title:'掌上组织生活',

          },
          {
            path:'/dyhd',
            'src':require('../../img/mainNav/icon_05@2x.png'),
            title:'党员云互动'
          }
        ],
        menubs:[
          {
           path:('/djone'),
            'src':require('../../img/mainNav/icon_04@2x.png'),
            title:'党建一点通'
          },
          {
            path:'/dylsf',
            'src':require('../../img/mainNav/icon_06@2x.png'),
            title:'党员身份亮相'
          },
          {
             path:'/history',
            'src':require('../../img/mainNav/icon_02@2x.png'),
            title:'党史上的今天'
          }
        ]

      }
    },
    mounted() {
      setInterval(() => {
        // console.log('simulate async data')
        let swiperSlides = this.swiperSlides
        if (this.swiperSlides.length < this.swiperSlides.length) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 1000);
    },

    methods:{
      getData(){
        this.$axios.get('/hhdj/carousel/carouselList.do?type=0').then(res=>{
          // console.log(res)
          this.swiperSlides = res.data.rows
        })
      },
      handle(path){
        this.$router.push ({path:path,query:{type:"0"}})
      }

    },
    created(){
      this.getData()
    }
    }
</script>
<style scoped  lang="scss">
  .carousel{
    width: 100%;
    img{
      height: 150px;
      width: 100%;
      margin: 0;
    }
    .swiper-title{
      color: #fff;
      font-size:14px;
      background: #000;
      position: absolute;
      bottom: 0.1em;
      width: 100%;
      opacity:0.5
    }
  }
  .main{
    .menu-wrap{
      overflow: hidden;
      background: url("../../img/mainNav/bt_bg@2x.png") no-repeat;
      background-size: 100% 100%;
      padding-bottom: 15px;
    }
    .img{
      height:114px;
      width: 100%;
      img{
        height:114px;
        width: 100%;
      }
    }
    .main-bottom{
      width: 100%;
      height: 158px;
      background: url("../../img/mainNav/专栏.png") no-repeat;
      background-size: 100% 158px;
      display: flex;
      .left, .mid, .right{
        flex: 1;
      }
      .mid{
        display: flex;
        flex-direction: column;
        .top,.bottom{
          flex: 1;
          .router{
            height: 100%;
            width: 100%;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        .tops,.bottoms{
          flex: 1;
          .router{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  .menu-top{
    margin: 0 auto;
    width: 96%;
    .item{
      width: 32%;
      .imgs{
        margin: 20px 0 5px;
        text-align: center;
      }

      img{
        height: 50px;
        width: 50px;
      }
      p{
        font-size: 10px;
        text-align: center;
      }
    }
  }
  .menu-bottom{
    margin: 0 auto;
    width: 96%;
    .item{
      width: 32%;
      .imgs{
        margin: 20px 0 5px;
        text-align: center;
      }

      img{
          height: 50px;
          width: 50px;
      }
      p{
        font-size:10px;
        text-align: center;
      }
    }
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .main{
    .main-header{
      position: absolute;
      top:0;
      width: 100%;
      height: 44px;
    }
    .main-footer{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 46px;
    }
    .main-wrap{
      height: 577px;
      overflow: auto;
      margin: 44px 0 50px 0;
      width: 100%;
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
