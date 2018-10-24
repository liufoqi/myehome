<template>
    <div class="footer">
      <div>
        <!--:class="{active: $route.path = '/'}-->
         <div class=" fll width fl" @click="handleMain" >
           <div class="bt"></div>
           <p >首页</p>
         </div>
           <div class=" padding width footer-both fm fll" @click="handletz" >
             <div class="bt"></div>
              <p >通知早知道</p>
            </div>
           <div class="fll width footer-both fr" @click="handleAdmin">
             <div class="bt"></div>
           <p>我的党建</p>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
       props:{
          num:Number
       },
      methods: {
         handleMain(){
           this.$router.push('/')
         },
        handletz(){
          this.$router.push('/tz')
        },
        handleAdmin() {
          this.$router.push('/man')
        }
      }
    }
</script>

<style scoped lang="scss">
.footer {
  font-size: 10px;
  width: 100%;
  .padding{
  }
  .footer-both {
    text-align: center;
    p{
    margin-top: 28px;
  }
  }
}
.footer-both:hover{
}
.fl{
  width: 33%;
  height: 28px;
  /*background: url("../img/mainNav/党_grey.png") no-repeat;*/
  background: url("../../img/mainNav/党_red.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  p{
    margin-top: 28px;
    text-align: center;
  }
  .bt{
    border-top: 2px solid red;
  }

}
.fm{
  width: 34%;
  height: 28px;
  background: url("../../img/mainNav/消息_grey.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  .bt{
    border-top: 2px solid #ffffff;
  }
}
.fr{
  width: 33%;
  height: 28px;
  background: url("../../img/mainNav/会员_grey.png") no-repeat;
  background-size:26px 28px;
  background-position: center center;
  padding-right: 0;
  .bt{
    border-top: 2px solid #fff;
  }
}
</style>
