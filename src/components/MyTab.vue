<template>
  <div class="my-tab-wrap" id="myTab">
    <div class="mytab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`个人目标(${PersonNum})`" name="first">
          <div class="personBg" v-if="this.PersonNum==0">
            <img src="../assets/img/home_img.png" class="homeImage"/>
          </div>
          <div class="targetInfo" v-if="this.PersonNum > 0">
            <div class="cell">
              <div class="cell-title"><span class="draf">[草稿中]</span>关于员工如何提升自我技能的相关</div>
              <div class="weight">权重</div>
            </div>
            <div class="cell">
              <div class="cell-title"><span class="draf">[草稿中]</span>关于员工如何提升自我技能的相关</div>
              <div class="weight">权重</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`团队目标(${teamNum})`" name="second">
          <div class="personBg" v-if="this.teamNum==0">
            <img src="../assets/img/home_img.png" class="homeImage"/>
          </div>
          <div class="teamInner" v-if="this.teamNum > 0">
            <MyTeamTab/>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="setting">
      <img src="../assets/img/titlebar_set.png"/>
    </div>
  </div>
</template>

<script>
import MyTeamTab from '@/components/MyTeamTab'

export default {
  props: [''],
  data() {
    return {
      activeName: 'first',
      PersonNum: 0,
      teamNum: 1
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log('@@@@', tab)
      this.$emit('handleClick', tab)
    },
    innerhandleClick (tab, event) {}
  },
  components: {
    MyTeamTab
  }
}
</script>
<style lang="scss">
  #myTab{
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
      width: 96%;
      height: rem(44);
    }
    .el-tabs__item{
      width:42%;
      color:#ACACAC;
      font-size: rem(16);
      text-align:center;
    }
    .el-tabs__item.is-active{
      color:#333;
    }
    .el-tabs__content{
      background: #F6F6F6;
      height:rem(579);
    }
  }
</style>
<style lang="scss" scoped>
  .my-tab-wrap{
    position:relative;
  }
 .mytab{
   background: #F6F6F6;
   .personBg{
     img{
       width:100%;
       height:rem(579);
     }
   }
 }
  .setting{
    position:absolute;
    right:rem(2);
    top:0px;
    img{
      width: rem(54);
      height: rem(43);
    }
  }
  .targetInfo{
    padding:rem(18);
    width:100%;
    overflow-y: scroll;
    .cell{
      .cell-title{
        font-size:rem(14);
        line-height:rem(22);
        padding: rem(20) rem(10);
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
