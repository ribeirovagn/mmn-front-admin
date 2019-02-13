<template>
  <div>
    <div class="section-heading centered">
      <h1>Products</h1>
    </div>
    <div class="pricing-plans row no-gutters">
      <div class="pricing-plan col-sm-3" v-for="product in products">
        <div class="plan-head">
          <div class="plan-name">{{ product.name }}</div>
        </div>
        <div class="plan-body">
          <div class="plan-price-w">
            <div class="price-value">
              ${{ product.value | integer }}
            </div>
            <div class="price-label">
              For Price
            </div>
          </div>
          <div class="plan-description">
            <h6>{{ product.product_type.name }}</h6>
            <p>{{ product.description }}</p>
            <h6 v-if="product.levels.length">Levels</h6>
            <table class="table" v-if="product.levels.length">
              <thead>
                <th>Level</th>
                <th>Genealogy</th>
                <th>Score</th>
                <th>Value</th>
              </thead>
              <tbody>
                <tr v-for="level in product.levels">
                  <td>{{level.start}} to {{level.end}}</td>
                  <td>{{ Type[level.type] }}</td>
                  <td>{{level.dots}}</td>
                  <td>${{level.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="content-i">
      <div class="content-box">
        <div class="element-wrapper">
          <h6 class="element-header">Graduations</h6>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-sm-2 b-r b-b"  v-for="graduation in graduations">
                <div class="el-tablo centered padded">
                  <h6>{{ graduation.name }}</h6>
                  <div class="label">
                    Score {{ graduation.dots_start }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="element-wrapper compact pt-4">
          <h5 class="element-header">Bonus</h5>
          <div class="element-box-tp">
            <div class="post-box" v-for="bonus in bonuses">
              <div class="post-content">
                <h6 class="post-title">
                  {{ bonus.name }}
                </h6>
                <div class="post-text">
                  {{ bonus.description }}
                </div>
              </div>
            </div>
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
      products: null,
      bonuses: [],
      graduations: [],
      Type: {
        1: 'BINARY',
        2: 'UNILEVEL'
      }
    }
  },

  mounted () {
    this.$http.get('business/plan').then(response => {
      this.products = response.data.products
      this.graduations = response.data.graduations
      this.bonuses = response.data.bonuses
    })
  },

  methods: {

  }
}

</script>
