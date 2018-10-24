<template>
    <div class="main">
      <div class="header">
        <Header :title="title"></Header>
      </div>
      <div class="content" v-for="(item,index) in detail" :key="detail">
        <div class="content-top ">
          <p class="fll">{{item.typeName}}</p>
          <span class="flr">+{{item.singleDesc}}</span>

        </div>
        <div class="content-bottom">
          {{item.timeFormat}}
        </div>
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
            title:'积分明细',
            detail:[],
          }
      },
      methods:{
          getData(){
            this.$axios.get('/hhdj/integral/integralList.do?page=1&rows=10').then(res=>{
               console.log(res)
              this.detail=res.data.rows
              console.log(this.detail)
            })
          }
      }, created(){
          this.getData()
      }
    }
</script>
<style scoped lang="scss">
  .content{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .content-top{
      margin: 10px 15px 5px 15px;
      height: 20px;

      p{
        text-align: left;
        font-size: 18px;
        font-weight: 200;
      }
      span{
        text-align: right;
        font-size: 16px;
        color: red;
      }
    }
    .content-bottom{
      margin: 10px 15px 0 15px;
      font-size: 14px;
  }}
</style>
