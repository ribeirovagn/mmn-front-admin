<template>
  <div class="top-bar color-scheme-bright">
    <div class="top-menu-controls">
      <search-user/>
      <div class="top-icon top-settings os-dropdown-trigger os-dropdown-position-left">
        <router-link  :to="{ name: 'SysBusiness'}">
          <i class="os-icon os-icon-ui-46"></i>
        </router-link>
      </div>
      <div class="logged-user-w">
        <div class="logged-user-i">
          <div class="avatar-w">
            <log-out></log-out>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LogOut from '../auth/Logout'
import SearchUser from '@/components/users/search.vue'

export default {
  components: {
    LogOut,
    SearchUser
  }
}

</script>
