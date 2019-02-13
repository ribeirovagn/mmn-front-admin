<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Withdraw</h6>
        <div class="element-box" v-for="(withdraw, search) in withdraws">
          {{ search }}
          <table class="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Created At</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="transaction in withdraw">
                <td><router-link :to="{ path: '/financial/withdraw/' + transaction.id}">{{ transaction.user.name }} <small>({{ transaction.user.username }})</small></router-link></td>
                <td>{{ transaction.bank_draft.type_account.name }}</td>
                <td>{{ transaction.created_at | dateFormat }}</td>
                <td class="text-right">{{ transaction.value }}</td>
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
      withdraws: []
    }
  },

  created () {
    this.$http.get('financial/withdraw').then(response => {
      this.withdraws = response.data
    })
  },

  methods: {

  }
}

</script>
