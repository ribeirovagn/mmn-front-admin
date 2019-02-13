<template>
  <div>
    <div class="section-heading centered">
      <h1>Pricing Plans</h1>
      <p><button class="btn btn-success" v-on:click.prevent="setShowNew">+ Add New Product</button></p>
    </div>
    <div class="pricing-plans row no-gutters" v-if="!showNew && products.length">
      <div class="pricing-plan col-sm-2" v-for="product in products">

        <div class="plan-head">
          <div class="plan-name">
            {{ product.name }}
          </div>
        </div>

        <div class="plan-body">
          <div class="plan-price-w">
            <div class="price-value">
              {{ product.value | integer }}
            </div>
            <div class="price-label">
              For Price
            </div>
          </div>
          <div class="plan-btn-w">
            <router-link class="btn btn-primary btn-rounded" :to="{ path: '/products/details/' + product.id}">
              Details
            </router-link>
          </div>
          <div class="plan-description">
            <h6>{{ product.product_type.name }}</h6>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-i">
      <div class="content-box">
        <div class="element-wrapper">
          <h6 class="element-header" v-if="showNew"> Add Product</h6>
          <div class="element-box" v-if="showNew">

            <form v-on:submit.prevent="sendForm">
              <h5 class="form-header"> + Add New Product</h5>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="newProduct.name">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea type="text" class="form-control" v-model="newProduct.description" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label>Type</label>
                <select class="form-control" v-model="newProduct.product_type_id">
                  <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Value</label>
                <input type="text" class="form-control" v-model="newProduct.value">
              </div>
              <div class="form-buttons-w">
                <button class="btn btn-primary" type="submit"> Submit</button>
                <button class="btn btn-default" type="button" v-on:click.prevent="setShowNew"> Back</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: [],
      newProduct: {},
      showNew: false,
      types: {}
    }
  },
  mounted () {
    this.getProducts()
    this.getProductTypes()
  },
  methods: {
    getProducts: function () {
      this.$http.get('products').then(response => {
        this.products = response.data;
      })
    },

    getProductTypes: function () {
      this.$http.get('products/type').then(response => {
        this.types = response.data
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data
        })
      })
    },

    sendForm: function () {
      this.$http.post('products', this.newProduct).then(response => {
        console.log("NEW PRODUCT", response.data);
        this.setShowNew()
        this.getProducts()
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        });
      })
    },
    setShowNew: function () {
      this.showNew = !this.showNew
    }
  }
}

</script>
