<template>
<div class="main">
 <div class="header">
 <Header :title="title" :btn="btn"
         @handleEdit="handleEdit"
         @handleSave="handleSave"
 ></Header>
 </div >
  <div v-if="!isEdit">
    <div class="list">
      <div class="title fll">头像</div>
      <img :src="this.lists.header" class="flr" v-if="!isUpdate">
      <img :src="this.header" class="flr" v-else >
    </div>
    <div class="list clearfix">
      <div class="fll title">身份证号</div>
      <div class="flr detail">{{lists.idCard}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">家庭住址</div>
      <div class="flr detail">{{list.hometown}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">工作地址</div>
      <div class="flr detail">{{this.list.address}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">民族</div>
      <div class="flr detail">{{this.list.nation}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">微信</div>
      <div class="flr detail">{{this.list.wxNum}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">qq</div>
      <div class="flr detail">{{this.list.qqNum}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">性别</div>
      <div class="flr detail" v-if="this.$store.state.userInfo.sex=1">男</div>
      <div class="flr detail" v-else>女</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">最高学历</div>
      <div class="flr detail">{{this.list.education}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">职称</div>
      <div class="flr detail">{{this.list.jobRank}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">薪资水平</div>
      <div class="flr detail">{{this.list.salary}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">入党时间</div>
      <div class="flr detail">{{this.list.joinPartyTime}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">党费最后缴纳时间</div>
      <div class="flr detail">{{this.list.lastPayTime}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">当前身份</div>
      <div class="flr detail" v-if="this.list.partyStatus=0">入党积极分子</div>
      <div class="flr detail" v-else-if="this.list.partyStatus=1">预备党员</div>
      <div class="flr detail" v-else="this.list.partyStatus=2">党员</div>
    </div>
  </div>
  <div v-else >
    <div class="list clearfix" >
      <div class="title fll">头像</div>
      <div class="img">
        <input type="file" id="inputImg"  @change="handleUpdateImg($event)">
      </div>
        <label for="inputImg">
          <img :src="this.lists.header" class="flr"  v-if="!isUpdate">
          <img :src="this.header" class="flr" v-else>
        </label>
    </div>
    <div class="list clearfix">
      <div class="fll title">身份证号</div>
      <!--<input type="text">-->
      <!--<input class="flr detail" type="number" v-model="this.list.idCard">-->
      <div class="flr detail" >{{lists.idCard}}</div>
    </div>
    <div class="list clearfix">
      <div class="fll title">家庭住址</div>
      <input  class="flr " type="text" v-model="this.list.hometown">
    </div>
    <div class="list clearfix">
      <div class="fll title">工作地址</div>
      <input  class="flr " type="text" v-model="this.list.address">
      <!--<div class="flr detail">{{this.list.address}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">民族</div>
      <input  class="flr" type="text" v-model="list.nation">
      <!--<div class="flr detail">{{// this.list.nation}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">微信</div>
      <input  class="flr " type="text" v-model="list.wxNum">
      <!--<div class="flr detail">{{this.list.wxNum}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">qq</div>
      <input  class="flr" type="text" v-model="list.qqNum">
      <!--<div class="flr detail">{{this.list.qqNum}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">性别</div>
      <!--<input  class="flr detail" type="text" v-model="list.sex">-->
      <select v-model="list.sex" class="flr detail" >
        <option v-for="(item,index) in arr" :key="index" :value="item.id">{{ item.name }}</option>
      </select>
      <!--<div class="flr detail" v-if="this.$store.state.userInfo.sex=1">男</div>-->
      <!--<div class="flr detail" v-else>女</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">最高学历</div>
      <input  class="flr " type="text" v-model="list.education">
      <!--<div class="flr detail">{{this.list.education}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">职称</div>
      <input  class="flr " type="text" v-model="list.jobRank">
      <!--<div class="flr detail">{{this.list.jobRank}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">薪资水平</div>
      <input  class="flr detail" type="text" v-model="list.salary">
      <!--<div class="flr detail">{{// this.list.salary}}</div>-->
    </div>
    <div class="list clearfix">
      <div class="fll title">入党时间</div>
      <input  class="flr" type="text" v-model="list.joinPartyTime">
      <!--<div class="flr detail">{{this.list.joinPartyTime}}</div>-->
    </div>

    <div class="list clearfix">
      <div class="fll title">党费最后缴纳时间</div>
      <input  class="flr " type="text" v-model="list.lastPayTime">
    </div>
    <div class="list clearfix">
      <div class="fll title">当前身份</div>
      <select v-model="list.partyStatus" class="flr detail" >
        <option v-for="(item,index) in partyStatusArr" :key="index" :value="item.id">{{ item.name }}</option>
      </select>
      <!--<div class="flr detail">{{this.list.partyIdentity}}</div>-->
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
          header:'',
          imgCode:'',
          isUpdate:false,
          title:"个人信息",
           btn:'btn',
          isEdit:false,
          arr:[
            {id:'1',name:'男'},
            {id:'0',name:'女'},
            ],
          partyStatusArr:[
            {id:'0',name:'积极分子'},
            {id:'1',name:'预备党员'},
            {id:'2',name:'党员'},
          ],
           lists:{},
            list:{
            username: "",
            hometown: "",
            address: "",
            nation: "",
            wxNum: "",
            qqNum: "",
            sex: 0,
            education: "",
            jobRank: '',
            salary: '',
            joinPartyTime: "",
            lastPayTime: "",
            partyStatus: '',
            header:''
            }
        }
      },
      methods: {
        getData() {
          this.$axios.get('/hhdj/user/userInfo.do').then(res => {
            if (res.code = 1) {
              this.list.username= res.data.data.username;
              this.list.hometown= res.data.data.hometown;
              this.list.address= res.data.data.address;
              this.list.nation= res.data.data.nation;
              this.list.wxNum= res.data.data.wxNum;
              this.list.qqNum= res.data.data.qqNum;
              this.list.sex= res.data.data.sex;
              this.list.education= res.data.data.education;
              this.list.jobRank= res.data.data.jobRank;
              this.list.salary= res.data.data.salary;
              this.list.joinPartyTime= res.data.data.joinPartyTime;
              this.list.lastPayTime= res.data.data.lastPayTime;
              this.list.partyStatus= res.data.data.partyStatus;
              this.lists=res.data.data;
              console.log(this.list)
            }
            else {
              alert('您的登录状态已过期，跳转登录页！')
              this.$router.push('/login')
            }
          })
        },
        handleEdit() {
          // alert(this.title);
          this.isEdit = true
        },
        handleSave() {
          // alert('调用父组件方法成功')
          this.isEdit = false
          if (this.$store.state.token) {
            this.$axios.post('/hhdj/user/modifyInfo.do',this.list).then(res=>{
            })
          }else{
            this.$router.push('/login')
          }
        },
        handleUpdateImg(event){
          var file = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload =  (e) => {
            // 读取到的图片base64 数据编码
            let imgCodes = e.target.result;
            this.header=imgCodes;
            let imgCode=imgCodes.replace('data:image/jpeg;base64,', '')
            this.$axios.post('/hhdj/image/uploadBase64.do',{myFile:imgCode}).then(
              res=>{
                this.list.header=res.url
                this.isUpdate=true
                console.log(res.url)
              })


           }
        },
      },
    created(){
       this.getData()
      }
    }
</script>

<style scoped lang="scss">
    .title{
      font-size: 18px;
      margin: 15px;
    }

    .list{
      width: 100%;
      height: 50px;
     border-bottom: 1px solid #ccc;
      .detail{
        font-size: 13px;
        margin:8px 15px 0 18px;
        width: 80px;
        height: 30px;
        text-align: right;
        padding-top: 10px;
        option {
          text-align: center;
        }
      }
      input{
        margin:8px 15px 0 18px;
        text-align: right;
        font-size: 14px;
        border: none;
        outline: none;
        width: 100px;
        height: 40px;
        padding-top: 0;
      }
      img{
      margin:  5px 15px;
      height:40px;
      width: 40px;
    }
      .img{
          position: absolute;
          left:-9999px;
      }

    }


</style>
