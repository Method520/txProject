<template>
  <div class="app-wrapper">
    <article class="main-container">
      <Header :title="title"/>
      <MyTab @handleClick="handleClick"/>
      <Footer @getPersoninfo="getPersonInfo()"/>
    </article>
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
        active: 0
      }
    },
    created () {
    },
    methods: {
      handleClick(target) {
        console.log('dddddddddddddddddd', target)
        this.title = target.label.substring(0, 4)
        this.active = target.index
      },
      getPersonInfo () {
        if (this.title === '我的目标') {
          alert(111111)
        }
        alert('新增' + this.title)
      }
    },
    components: {
      Header,
      MyTab,
      Footer
    }
  }
</script>

<style lang="scss" scope>
  .app-wrapper{
    background: #F6F6F6;
  }
</style>
