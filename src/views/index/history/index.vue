<template>
  <div class="main">
    <div class="header">
      <Header :title="title"></Header>
    </div>
    <div class="content" v-for="(item,index) in article" :key="index">
      <h2>{{item.header}}</h2>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</p>
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
            title:'党史上的今天',
            data:'',
            articles:'',
            article:[
              {
                header:'1945年10月23日  中央指出：对内蒙的基本方针是实行区域自治',
                content:'1945年10月23日 中共中央就内蒙古工作的基本方针问题向晋察冀中央局和晋绥分局发出指示，指出：“对内蒙的基本方针，在目前是实行区域自治。首先从各旗开始，争取时间，放手发动与组织蒙人的地方自治运动，建立自治政府。”党的民族区域自治政策，是运用马克思列宁主义关于民族问题的学说解决中国民族问题的基本政策。这个政策，符合中国各民族关系的情况，对于实现各民族一律平等、促进民族团结，产生了深远的影响。'
              },
              {
                header:'1951年10月23日  毛泽东：增加生产，厉行节约，以支持中国人民志愿军',
                content:'1951年10月23日 毛泽东在全国政协一届三次会议上提出，为了继续坚持抗美援朝这个必要的正义的斗争，我们需要继续加强抗美援朝的工作，需要增加生产，厉行节约，以支持中国人民志愿军，这是中国人民今天的中心任务。会议向全国各民族、各阶层人民发出开展增产节约运动的号召。增加生产，厉行节约，既是保证抗美援朝前线物资供应的需要，又是准备开展大规模经济建设，为国家工业化积累资金的需要，同时也是整肃党纪、政纪，提高工作效率和转变社会风气的需要，是国家建设的一项带根本性的方针。'
              },
              {
                header:'1953年10月23日  第一届中华全国工商业联合会会员代表大会开幕',
                content:'1953年10月23日 第一届中华全国工商业联合会会员代表大会开幕。根据毛泽东同民主党派和工商界部分代表谈话的精神，大会主席陈叔通在开幕词中号召全国工商界人士要为实行国家在过渡时期的总路线，正确地发挥私营工商业的积极作用而奋斗。李维汉到会发表讲话，阐述了党对私营工商业的有关政策，尤其对各种形式的国家资本主义作了具体说明。大会于11月12日通过决议，郑重宣告接受和拥护国家在过渡时期的总路线和对私营工商业所采取的利用、限制、改造的政策。会后，中华全国工商业联合会在工商界开展了学习宣传过渡时期总路线的活动。'
              },
            ],

          }
      },
      methods:{
          getData(){
            this.$axios.get('/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70509%2Findex.html')
              .then(res=>{
               console.log(res.data)
                this.articles=res.data
              })
          },

      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped>
  .content{
   margin: 10px 10%;
  }
  h2{
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  p{
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
