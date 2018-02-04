<template>
  <div class="app-wrapper">
    <article class="main-container">
      <Header :title="title" @goBack="goBack"/>
    </article>
    <MyTab :isShowTargetInfo='isShowTargetInfo'/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import MyTab from '@/components/MyTab'
  import Footer from '@/components/Footer'

  export default {
    name: 'index',
    data() {
      return {
        title: '我的目标',
        isShowTargetInfo: true
      }
    },
    created () {
    },
    methods: {
      goBack: function() {
        if (this.title === '我的目标') {
          this.$router.push('/home')
        }
      }
    },
    components: {
      Header,
      MyTab,
      Footer
    }
  }
</script>

<style lang="scss">
</style>
