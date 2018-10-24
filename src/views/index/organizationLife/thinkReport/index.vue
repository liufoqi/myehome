<template>
    <div class="main">
      <div class="header">
        <Header :title="header" v-if="title===1"></Header>
        <Header :title="header2" v-else></Header>
      </div>
      <div class="main">
        <div class="content">
          <img src="../../../../img/reviewing.png">
          <p>正在审核中</p>
        </div>
      <div class="btn">
        <button>关闭</button>
      </div>
      </div>
      <div class="footer">

      </div>
    </div>
</template>

<script>
  import Header from '../../../../components/header/tzheader'
    export default {
        components:{
          Header
        },
        data(){
          return{
            header:'思想汇报',
            header2:'心得总结',
             title:0
          }
        },
      methods:{
        getData(){


        }
      },
      created(){
         this.getData()
         this.title=this.$route.query.title
      }

    }
</script>

<style scoped lang="scss">
  .header{}
  .main{
    text-align: center;
     .content{
       margin-top: 50px;
       padding-bottom: 100px;
       img{
         height: 90px;
         width: 90px;
         padding-bottom: 10px;
       }
       p{
         font-size: 16px;
       }
     }
    .btn{
      margin: 0 auto;
      width: 60%;
      button{
        border: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        background: #c50206;
        color: #fff;
      }
    }
  }
  .footer{

  }

</style>
