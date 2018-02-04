<template>
  <div class="footer">
    <div class="footerWrap">
      <div class="myT">
      </div>
      <div class="plus" @click="personTargetInfo">
        <img src="../assets/img/home_btn_new.png"/>
      </div>
      <div class="myAttention"></div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    personTargetInfo: function() {
      this.$emit('getPersoninfo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footerWrap{
  z-index:500;
  width:100%;
  height:rem(50);
  background-color:#4FA2FE;
  position:absolute;
  bottom:0;
  border:1px solid #ccc;
  .plus{
    text-align:center;
    margin-top:-15px;
    img{
      width:rem(56);
      height:rem(56);
    }
  }
  .myT{
    float:left;
  }
}
</style>
