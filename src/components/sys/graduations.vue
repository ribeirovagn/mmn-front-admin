<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <div class="element-actions d-none d-sm-block">
          <button class="btn btn-success" v-on:click.prevent="newForm()"><i class="os-icon os-icon-plus-circle"></i> New Graduation</button>
        </div>
        <h6 class="element-header">
          Graduations
        </h6>
        <div class="element-box" v-show="!showEdit && !showNew">
          <h5 class="form-header"><i class="os-icon os-icon-slack"></i> Graduations</h5>
          <table class="table table-lightborder">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Ordinal</th>
                <th>Name</th>
                <th class="text-right">Limit</th>
                <th class="text-right">Start</th>
                <th class="text-right">End</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="graduation in graduations">
                <td>
                  <button class="mr-2 mb-2 btn btn-outline-primary" v-on:click.prevent="editForm(graduation)"><i class="os-icon os-icon-edit"></i></button>
                </td>
                <td>{{ graduation.ordinal }}</td>
                <td>{{ graduation.name }}</td>
                <td class="text-right">{{ graduation.limit }}</td>
                <td class="text-right">{{ graduation.dots_start }}</td>
                <td class="text-right">{{ graduation.dots_end }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="element-box" v-show="showNew && !showEdit">
          <form v-on:submit.prevent="sendFormNew">
            <h5 class="form-header">New Graduation</h5>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Name</label>
                  <input name="name" type="text" class="form-control" v-model="graduation.name" autocomplete="off">

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Ordinal</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.ordinal" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label>Score Start</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.dots_start" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label>Score End</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.dots_end" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Limit</label>
                  <input name="name" type="text" class="form-control" v-model="graduation.limit" autocomplete="off">
                </div>
              </div>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-primary" type="submit"><i class="os-icon os-icon-share"></i> Submit</button>
              <button class="btn btn-default" v-on:click.prevent="showList()"><i class="os-icon os-icon-arrow-left-circle"></i> Back</button>
            </div>
          </form>
        </div>
        <div class="element-box" v-show="!showNew && showEdit">
          <form v-on:submit.prevent="sendFormEdit">
            <h5 class="form-header">Edit Graduation</h5>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Name</label>
                  <input name="name" type="text" class="form-control" v-model="graduation.name" autocomplete="off">

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Ordinal</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.ordinal" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label>Score Start</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.dots_start" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-2">
                <div class="form-group">
                  <label>Score End</label>
                  <input name="name" type="number" class="form-control" v-model="graduation.dots_end" autocomplete="off">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label>Limit</label>
                  <input name="name" type="text" class="form-control" v-model="graduation.limit" autocomplete="off">
                </div>
              </div>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-primary" type="submit"><i class="os-icon os-icon-share"></i> Submit</button>
              <button class="btn btn-default" v-on:click.prevent="showList()"><i class="os-icon os-icon-arrow-left-circle"></i> Back</button>
            </div>
          </form>
        </div>
        <div class="element-box" v-show="!showNew && showEdit">
          <h5 class="form-header">Rules</h5>
          <table class="table table-lightborder">
            <thead>
              <tr>
                <th>Graduation</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="level in levels">
                <td>{{ level.dependence.name }}</td>
                <td>{{ level.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <form>
            <div class="form-group">
              <label>Graduation</label>
              <div class="row">
                <div class="col-sm-4">
                  <select class="form-control" v-model="graduationLevel.graduation_level">
                    <option v-for="graduation in graduations" :value="graduation.id">{{ graduation.name }}</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <input type="number" class="form-control" placeholder="Quantity"  v-model="graduationLevel.quantity">
                </div>
                <div class="col-sm-3">
                  <button class="btn btn-primary" type="button" v-on:click.prevent="sendGraduationLevel"><i class="os-icon os-icon-share"></i> Submit</button>
                </div>
              </div>
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
      graduations: [],
      graduationLevel: {},
      graduation: {},
      error: false,
      showEdit: false,
      showNew: false,
      levels: []
    }
  },
  created () {
    this.getGraduations()
  },
  methods: {

    getGraduations: function () {
      this.$http.get('sys/graduations').then(response => {
        this.graduations = response.data
      }, error => {
        this.error = error.data
      })
    },

    sendFormNew: function () {
      this.$http.post('sys/graduations', this.graduation).then(response => {
        this.graduations.push(response.data)
        this.showList()
        console.log();
      }, error => {
        this.$swal({
          title: "Error",
          type: 'error',
          text: error.data.message
        })
      })
    },

    sendFormEdit: function () {

      this.$http.put('sys/graduations/' + this.graduation.id, this.graduation).then(response => {
        console.log(response.data);
        this.showList()
      },error => {
        this.$swal({
          title: "Error",
          type: 'error',
          text: error.data.message
        })
      })
    },

    editForm: function (graduation) {
      this.levels = graduation.levels
      this.showNew = false
      this.showEdit = true
      this.graduation = graduation
      console.log("GRADUATION", this.graduation);
    },

    newForm: function () {
      this.showNew = true
      this.showEdit = false
    },


    showList: function () {
      this.showNew = false
      this.showEdit = false
    },

    sendGraduationLevel: function () {
      this.graduationLevel.graduation_id = this.graduation.id
      this.$http.post('sys/graduations/level', this.graduationLevel).then(response => {
        this.levels = response.data
        console.log(response.data);
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
