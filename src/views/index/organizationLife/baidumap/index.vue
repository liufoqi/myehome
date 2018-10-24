<template>
    <div class="main">
        <div class="header">
            <Header :title="header"></Header>
        </div>
        <div class="main">
          <Bmap></Bmap>
        </div>
    </div>
</template>

<script>
  import Header from '../../../../components/header/tzheader'
  import Bmap from '../../../../components/bmap/index'
  export default {
        components: {
          Header,
          Bmap
        },
        data() {
            return {
              header:"流动党员找组织"
            }
        },
        methods: {
            getData() {

            }
        },
        created() {
            this.getData()
        }

    }
</script>

<style scoped lang="scss">
  .main {
  }

</style>
