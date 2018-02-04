<template>
  <div class="my-tab-wrap" id="myTeamTab">
    <div class="mytab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="小组" name="group">
          <div class="targetInfo">
            <div class="cell">
              <div class="cell-title"><span class="draf">[草稿中]</span>关于员工如何提升自我技能的相关</div>
              <div class="weight">绩效管理组</div>
            </div>
            <div class="cell">
              <div class="cell-title"><span class="draf">[草稿中]</span>关于员工如何提升自我技能的相关</div>
              <div class="weight">绩效管理组</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="中心" name="center">222</el-tab-pane>
        <el-tab-pane label="部门" name="department">33</el-tab-pane>
        <el-tab-pane label="BG" name="bg">43</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

export default {
  props: [''],
  data() {
    return {
      activeName: 'group'
    }
  },
  methods: {
    handleClick (tab, event) {}
  },
  components: {
  }
}
</script>
<style lang="scss">
  #myTeamTab{
    margin:10px 10px;
    .el-tabs__nav-wrap{
      background-color:#fff;
    }
    .el-tabs__nav-wrap:after{
      background:#fff;
    }
    .el-tabs__header{
      margin-bottom:0;
    }
    .el-tabs__nav {
      width: 100%;
      height: 36px;
      line-height:36px;
      background: #FFFFFF;
      box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.10);
      border-radius: 4px;
    }
    .el-tabs__item{
      width:25%;
      color:#ACACAC;
      font-size: 16px;
      height:36px;
      line-height:36px;
      text-align:center;
    }
    .el-tabs__item.is-active{
      color:#333;
    }
  }
</style>
<style lang="scss" scoped>
  .my-tab-wrap{
    position:relative;
  }
 .mytab{
   .personBg{
     img{
       width:100%;
       height:579px;
     }
   }
 }
  .setting{
    position:absolute;
    right:2px;
    top:0px;
    img{
      width: 54px;
      height: 43px;
    }
  }
  .targetInfo{
    padding:10px;
    width:100%;
    overflow-y: scroll;
    .cell{
      .cell-title{
        font-size:14px;
        line-height:22px;
        padding: 20px 10px;
      }
      .weight{
        text-align:center;
        font-size: 11px;
        color: #4D9EF7;
        margin-top:-10px;
        letter-spacing: 0;
      }
      .draf{
        color:#F02525;
        width:126px;
      }
      width:166px;
      height:186px;
      border-radius:6px;
      float:left;
      background: #FFFFFF;
      box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.10);
      border-radius: 6px;
      margin-bottom: 10px;
      margin-right:10px;
    }
  }
</style>
