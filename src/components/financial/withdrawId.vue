<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Withdraw Details</h6>
        <div class="element-box">
          <div class="element-actions">
            <h6>{{withdraw.transaction.created_at | dateFormat}}</h6>
          </div>
          <h5 class="element-box-header">{{ withdraw.transaction.bank_draft.type_account.name }}</h5>
          <div class="element-actions">
            <h1 class="display-4 ">$ {{withdraw.transaction.value}}</h1>
          </div>
          <h5 class="form-header">{{ withdraw.transaction.user.name }} <small>{{ withdraw.transaction.user.username }}</small></h5>
          <div class="form-desc">{{ withdraw.transaction.user.email }}</div>
          <div class="row">
            <div class="col-6">
              <BankDraft :withdraw="withdraw.transaction" v-if="withdraw.transaction.bank_draft.bank !== null"/>
              <Plataform :withdraw="withdraw.transaction" v-if="withdraw.transaction.bank_draft.bank === null"/>
            </div>
            <div class="col-6">
              <div class="element-wrapper">
                <h6>Status</h6>
                <table class="table">
                  <tbody>
                    <tr v-for="status in withdraw.transaction.statuses">
                      <td>
                      <div class="status-pill green" :title="status.name" v-if="status.name === 'COMPLETED'"></div>
                      <div class="status-pill red" :title="status.name" v-if="status.name === 'CANCELED'"></div>
                      <div class="status-pill green" :title="status.name" v-if="status.name === 'SUCCESS'"></div>
                      <div class="status-pill yellow" :title="status.name" v-if="status.name === 'PENDING'"></div>
                    </td>
                      <td>{{status.note}}</td>
                      <td class="text-right">{{status.created_at | dateFormat}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <form v-if="withdraw.transaction.status != 2" v-on:submit.prevent="sendForm">
            <div class="form-group">
              <label>Status</label>
              <select class="form-control" v-model="transaction.status">
                <option v-for="(status, id) in withdraw.statuses" :value="id" v-if="(id != withdraw.transaction.status)">{{ status }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>Note</label>
              <textarea class="form-control" v-model="transaction.note" rows="3"></textarea>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-primary" type="submit"> Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import BankDraft from './withdraw/bank.vue'
import Plataform from './withdraw/plataform.vue'

export default {
  props: ['id'],
  data () {
    return {
      withdraw: {},
      transaction: {}
    }
  },
  created () {
    this.getTransaction()
  },

  components: {
    BankDraft, Plataform
  },

  methods: {
    getTransaction: function () {
      this.$http.get('financial/withdraw/show/' + this.id).then(response => {
        this.withdraw = response.data
      })
    },
    sendForm: function () {
      this.$http.put('financial/withdraw/update/' + this.withdraw.transaction.id, this.transaction).then(response => {
        this.getTransaction()
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        })
      })
    }
  }
}

</script>
