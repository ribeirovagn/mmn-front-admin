<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Users</h6>
        <div class="element-box">
          <table class="table table-ligthbox">
            <thead>
              <tr>
                <th class="text-center">Is Admin</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th class="text-right">Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users">
                <td class="text-center">
                  <div class="status-pill green" v-if="(user.is_admin === 1)"></div>
                  <div class="status-pill red" v-if="(user.is_admin === 0)"></div>
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td class="text-right">{{ user.created_at | dateFormat}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.$http.get('users').then(response => {
      this.users = response.data;
    })
  }
}

</script>
