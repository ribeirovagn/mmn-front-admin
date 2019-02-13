<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Config</h6>
        <div class="element-box">
          <h5 class="form-header">Business</h5>
          <form v-on:submit.prevent="sendForm">
            <legend>
              <span>Binary</span>
            </legend>
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="business.binary" :checked="business.binary === 0 ? false : true">Active</label>
              </div>
            </div>
            <div class="row" v-if="business.binary">
              <div class="col-sm-3">
                <div class="form-group">
                  <div class="form-check" v-for="binaryType in binaryTypes" >
                    <label class="form-check-label"><input checked="" class="form-check-input" name="optionsRadios" type="radio" :value="binaryType.id">{{ binaryType.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <legend>
              <span>Unilevel</span>
            </legend>
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="business.unilevel" :checked="business.unilevel === 0 ? false : true">Active</label>
              </div>
            </div>
            <legend>
              <span>Financial</span>
            </legend>
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="business.leadership_balance" :checked="business.leadership_balance === 0 ? false : true">Leadership Balance</label>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label"><input class="form-check-input" type="checkbox" v-model="business.withdraw_is_active" :checked="business.withdraw_is_active === 0 ? false : true">Withdraw active</label>
              </div>
            </div>
            <div class="row" v-if="business.withdraw_is_active">
              <div class="col-sm-3">
                <div class="form-group">
                  <label for=""> Withdraw Tax</label>
                  <input class="form-control" type="text" placeholder="Withdraw Tax" v-model="business.withdraw_tax">
                </div>
              </div>
            </div>
            <div class="row" v-if="business.withdraw_is_active">
              <div class="col-sm-3">
                <label for=""> Withdraw Type</label>
                <div class="form-check" v-for="withdrawType in business.sys_withdraw_type_id">
                  <label class="form-check-label">
                    <input class="form-check-input" :value="withdrawType.id" type="checkbox" v-model="sys_withdraw_type_id">{{ withdrawType.name }}
                  </label>
                </div>
              </div>
            </div>

            <div class="form-buttons-w">
              <button class="btn btn-success">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      sys_withdraw_type_id: [],
      business: {},
      binaryTypes: [],
      withdrawTypes: [],
      schedule: {},
      interval: {}
    }
  },
  mounted () {
    this.getBusiness();
    this.getScheduly();
  },
  methods: {
    getBusiness: function () {
      this.$http.get('sys/business').then(response => {
        this.business = response.data.sysBusiness;
        this.binaryTypes = response.data.binaryTypes,
        this.business.sys_withdraw_type_id = response.data.withdrawTypes
      })
    },

    ischecked: function () {
      console.log("ISCHECK", this.business);
    },

    getScheduly: function () {
      this.$http.get('sys/business/schedule').then(response => {
        this.schedule = response.data;
        console.log(response.data);
      })
    },

    normalizeInterval: function () {
      console.log(this.interval);
    },

    sendForm: function () {
      this.business.sys_withdraw_type_id = this.sys_withdraw_type_id
      this.$http.put('sys/business', this.business).then(response => {
        this.business = response.data.sysBusiness;
        this.binaryTypes = response.data.binaryTypes,
        this.business.sys_withdraw_type_id = response.data.withdrawTypes
        this.$swal({
          title: 'Success',
          type: 'success',
          text: "Config Updated"
        })
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
