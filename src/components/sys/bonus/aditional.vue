<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">
          Aditional  Bonus
        </h6>
        <div class="element-box">
          <form v-on:submit.prevent="sendform">
            <h5 class="form-header">
              Aditional Bonus
            </h5>
            <div class="form-group">
              <label>Bonus</label>
              <select v-model="bonus.bonus" class="form-control">
                <option v-for="b in bonuses" :value="b.id">
                  {{ b.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for=""> Interval</label>
              <select class="form-control" v-on:change="normalizeInterval" v-model="bonus.interval">
                <option v-for="interval in schedule" :value="interval">{{interval.name}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for=""> Product</label>
              <select class="form-control" v-model="bonus.product" multiple>
                <option v-for="product in products" :value="product.id">{{product.name}} - {{ product.description }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="">Percentage</label>
              <input type="text" v-model="bonus.percentage" class="form-control">
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

export default {
  data () {
    return {
      bonuses: [],
      bonus: {},
      schedule: {},
      products: []
    }
  },
  created () {
    this.$http.get('bonus').then(response => {
      this.bonuses = response.data
      this.getScheduly()
      this.getProducts()
      console.log(response.data);
    })
    console.log("Aditional Bonus");
  },

  methods: {
    getScheduly: function () {
      this.$http.get('sys/business/schedule').then(response => {
        this.schedule = response.data;
        console.log("schedule", response.data);
      })
    },

    getProducts: function () {
      this.$http.get('products').then(response => {
        this.products = response.data;
      })
    },

    sendform: function () {
      console.log(this.bonus);
    }
  }
}

</script>
