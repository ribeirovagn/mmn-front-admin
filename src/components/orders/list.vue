<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Orders</h6>
        <div class="element-box-tp">
          <table class="table table-clean">
            <thead>
              <tr>
                <th>Code</th>
                <th>Value</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Items</th>
                <th>Pay Day</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders">
                <td><router-link :to="'/orders/invoice/' + order.id">{{ order.id }}</router-link></td>
                <td>{{ order.value_fiat }}</td>
                <td>{{ order.created_at | dateFormat }}</td>
                <td>{{ order.status }}</td>
                <td>
                  <div v-for="items in order.items">
                  <p><strong>{{ items.product.name }}</strong></p>
                  <p><small>{{ items.product.product_type.name }}</small></p>
                </div>
                </td>
                <td>{{ order.payday | dateFormat}}</td>
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
      orders: []
    }
  },
  created () {
    this.$http.get('order').then( response => {
      this.orders = response.data
    })
  }
}

</script>
