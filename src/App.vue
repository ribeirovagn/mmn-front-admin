<template>
  <div v-bind:class="{'all-wrapper solid-bg-all': $store.state.authentication.isAuthenticated}">
    <div v-bind:class="{'layout-w': $store.state.authentication.isAuthenticated}">
      <menu-app v-if="$store.state.authentication.isAuthenticated"/>
      <div v-bind:class="{'content-w': ($store.state.authentication.isAuthenticated)}">
        <top-bar v-if="$store.state.authentication.isAuthenticated"/>
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>

import store from 'store'
import Menu from './components/layout/Menu.vue'
import TopBar from './components/layout/TopBar.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    'menu-app': Menu,
    'top-bar': TopBar,
  },

  created() {
  }
}
</script>

<style scoped>
.layout-w {
  min-height: 100vh
}
</style>
