<template>
  <div class="main">
    <div class="header">
      <Header :title="title" ></Header>
    </div>
    <div class="content">
      <div class="item">
        <p>旧密码:</p>
        <input type="number" v-model="this.password.old">
      </div>
      <div class="item">
        <p>新密码:</p>
        <input type="number" v-model="this.password.new">
      </div>
      <div class="item">
        <p>再次输入密码:</p>
        <input type="number" v-model="this.rePassword">
      </div>
    </div>
    <div class="btn">
      <button @click="handleSubmit">确定</button>
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

            title:"修改密码",
            rePassword:'',
            password:{
              old:'',
              new:''
            },
          }
      },
      methods:{
        handleSubmit(){
          this.$axios.post('').then(res=>{
            if(res.code=1){
              alert( '修改成功')
            }
          })
        }

      }
    }
</script>

<style scoped lang="scss">
.content{
  margin: 40px 30px 0 40px;
  .item{
    width:295px;
    margin: 15px 0;
    font-size: 18px;
    p{
      margin-bottom: 5px;
      color:#c1c1c1 ;
    }
    input{
      width:295px;
      height: 40px;
      border-radius: 6px;
      outline: none;
      border: 1px solid #ccc;
    }

  }
}
.btn{
   margin:0 30px 0 40px ;
   width: 295px;
   button{
     width: 295px;
     height: 40px;
     border-radius: 5px;
     border: 1px solid #ccc;
     background: #ef473a;
     color: #fff;
   }
 }
</style>
