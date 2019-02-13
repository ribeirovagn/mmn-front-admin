<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">
          Product Details
        </h6>
        <div class="element-box">
          <form>
            <h5 class="form-header">Product</h5>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="">Name</label>
                  <input class="form-control" placeholder="Name" type="text" v-model="product.name">
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="">Type</label>
                  <select class="form-control" v-model="product.product_type_id">
                    <option v-for="type in types" :value="type.id">{{type.name}}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="">Value</label>
                  <input class="form-control" placeholder="Value" type="text" v-model="product.value | integer">
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea v-model="product.description" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-buttons-w">
                  <button class="btn btn-success" v-on:click.prevent>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="element-box">
          <form>
            <h5 class="form-header" v-show="!editShow">New Level</h5>
            <h5 class="form-header" v-show="editShow">Edit Level</h5>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for=""> Bonus</label>
                  <select class="form-control" v-model="level.bonus_id">
                    <option v-for="bonus in bonuses" :value="bonus.id">{{ bonus.name }}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="">$ Value</label>
                  <input class="form-control" placeholder="Enter value" type="text" v-model="level.amount">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label for=""> Start Level</label><input class="form-control" placeholder="Start Level" type="number" v-model="level.start">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="">End level</label><input class="form-control" placeholder="End level" type="number" v-model="level.end">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for=""> Score</label><input class="form-control" placeholder="Score" type="number" v-model="level.dots">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Genealogy</label>
                  <div class="form-check" v-for="genealogyType in genealogyTypes">
                    <label class="form-check-label"><input class="form-check-input" v-model="level.type" type="radio" :value="genealogyType.id">{{ genealogyType.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-success" v-on:click.prevent="addLevel" v-if="!editShow">Add Level</button>
              <button class="btn btn-success" v-on:click.prevent="sendFormEdit" v-if="editShow">Edit level</button>
              <button class="btn btn-default" v-on:click.prevent="addLevel" v-if="editShow">Add level</button>
            </div>
          </form>
          <table class="table table-lightborder" v-show="product.levels.length">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th class="text-left">Level</th>
                <th>Bonus</th>
                <th>Genealogy</th>
                <th>Value</th>
                <th class="text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="level in product.levels">
                <td>
                  <button class="mr-2 mb-2 btn btn-outline-info btn-sm" type="button" v-on:click.prevent="editLevel(level)"> Edit</button>
                </td>
                <td class="text-left">{{level.start}} to {{level.end}}</td>
                <td>
                  <div v-for="_bonus in bonuses" v-if="level.bonus_id === _bonus.id">
                    {{ _bonus.name }}
                  </div>
                </td>
                <td>
                  <div v-for="genealogyType in genealogyTypes" v-if="genealogyType.id == level.type">
                    {{genealogyType.name}}
                  </div>

                </td>
                <td>{{level.amount}}</td>
                <td class="text-right">{{level.dots}}</td>
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
  props: ['id'],
  data () {
    return {
      types: [],
      product: null,
      level: {},
      bonuses: null,
      genealogyTypes: [],
      editShow: false
    }
  },
  created () {
    this.getProduct();
    this.$http.get('bonus').then(response => {
      this.bonuses = response.data
    })
  },
  methods: {
    getProduct: function() {
      this.$http.get('products/details/' + this.id).then(response => {
        this.product = response.data.products;
        this.types = response.data.types
        this.genealogyTypes = response.data.genealogyType
      })
    },
    editLevel: function (level) {
      console.log(level);
      this.level = level
      this.editShow = true
    },
    addLevel: function () {
      this.level.product_id = this.id
      this.$http.post('levels', this.level).then(response => {
        console.log(response.data);
        this.getProduct()
      })
    },
    sendFormEdit: function () {
      this.$http.put('levels/' + this.level.id, this.level).then(response => {
        console.log(response);
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        })
      })
    },

    removeLevel: function (id) {
      this.$http.delete('levels/' + id).then(response => {
        this.getProduct()
        console.log(response.data);
      })
    }
  }
}

</script>
