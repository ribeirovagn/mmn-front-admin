<template>
  <div class="element-wrapper">
    <div class="invoice-w">
      <div class="infos">
        <div class="info-1">
          <div class="invoice-logo-w">
            <img alt="" src="img/logo2.png">
          </div>
          <div class="company-name">
            Paper Inc
          </div>
          <div class="company-address">
            47 Countrylane Ave, <br>Los Angeles, CA 97446 <br>United States
          </div>
          <div class="company-extra">
            tel. 858.745.5577
          </div>
        </div>
        <div class="info-2">
          <div class="company-name">
            Client Inc
          </div>
          <div class="company-address">
            210 Benson Lane, Suite 430<br>Queens, NY 11243<br>United States
          </div>
        </div>
      </div>
      <div class="invoice-heading">
        <h3>
          Invoice
        </h3>
        <div class="invoice-date">
          {{ this.order.created_at | dateFormat }}
        </div>
      </div>
      <div class="invoice-body">
        <div class="invoice-desc">
          <div class="desc-label">
            Invoice #
          </div>
          <div class="desc-value">
            {{ this.order.id }}
          </div>
        </div>
        <div class="invoice-table">
          <table class="table">
            <thead>
              <tr>
                <th>
                  Description
                </th>
                <th>
                  Qty
                </th>
                <th class="text-right">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  User Interface
                </td>
                <td>
                  2
                </td>
                <td class="text-right">
                  $4,500
                </td>
              </tr>
              <tr>
                <td>
                  Framework Development
                </td>
                <td>
                  4
                </td>
                <td class="text-right">
                  $9,750
                </td>
              </tr>
              <tr>
                <td>
                  Widgets and Plugins
                </td>
                <td>
                  1
                </td>
                <td class="text-right">
                  $1,240
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  Total
                </td>
                <td class="text-right" colspan="2">
                  {{ this.order.value_fiat | integer }}
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="terms">
            <div class="terms-header">
              Payment
            </div>
            <div class="terms-content">
              <a class="btn btn-primary btn-sm" href="#" v-on:click.prevent="pay"><i class="os-icon os-icon-ui-22"></i><span>Pay</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="invoice-footer">
        <div class="invoice-logo">
          <img alt="" src="img/logo.png"><span>Paper Inc</span>
        </div>
        <div class="invoice-info">
          <span>hello@paper.inc</span><span>858.757.4455</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      order: null
    }
  },
  created () {
    console.log(this.$route.params);
    this.$http.get('order/' + this.id).then(response => {
      this.order = response.data;
      console.log(this.order);
    })
  },
  methods: {
    pay: function () {
      this.$http.put('order/pay/' + this.order.id).then(response => {
        console.log(response.data);
      }, error => {
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: error.data.error
        })
      })
    }
  }
}

</script>
