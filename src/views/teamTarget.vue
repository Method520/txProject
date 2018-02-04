<template>
  <div class="app-wrapper">
    <article class="main-container">
      <Header :title="title"/>
      <h1>team</h1>
    </article>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'index',
    data() {
      return {
        title: '我的目标'
      }
    },
    created () {
    },
    methods: {
    },
    components: {
      Header
    }
  }
</script>

<style lang="scss">
</style>
