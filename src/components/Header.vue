<template>
  <div class="header">
    <div class="back_icon" @click="comBack">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    {{title}}
    <div class="more">
      <!--<img src="../assets/img/see_head_more.png"/>-->
    </div>
  </div>

</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    comBack: function() {
      this.$emit('goBack')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header{
    font-size:rem(18);
    color:#fff;
    line-height:rem(44);
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    font-weight:500;
    text-align:center;
    width:100%;
    position: relative;
    height:rem(44);
    background: #1C1C20;
    .el-icon-arrow-left{
      font-size:rem(20);
    }
    .back_icon{
      position:absolute;
      color:#fff;
      font-size:rem(16);
      left:10px;
      line-height:rem(44);
    }
    .more{
     img {
       position:absolute;
       width: rem(30);
       height: rem(30);
       right:rem(10);
     }
    }
  }
</style>
