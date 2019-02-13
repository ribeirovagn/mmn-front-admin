<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper" v-show="!showEdit && !showNew">
        <div class="element-actions d-none d-sm-block">
          <button class="btn btn-success" v-on:click.prevent="setShowNew">+ Add New Bonus</button>
        </div>
        <h6 class="element-header">
          Bonus
        </h6>
        <div class="element-box-tp">
          <div class="post-box" v-for="bonus in bonuses">
            <div class="post-content">
              <h6 class="post-title">
                {{ bonus.name }}
              </h6>
              <div class="post-text">
                {{ bonus.description }}
              </div>
              <div class="post-foot">
                <div class="post-tags">
                  <button class="btn mr-2 mb-2 btn-sm" v-on:click.prevent="setShowEdit(bonus)">Edit</button>
                  <button class="btn mr-2 mb-2 btn-sm" :class="bonus.is_active === (1|true) ? 'btn-success' : 'btn-danger'" v-on:click.prevent="changeActive(bonus)">{{ bonus.is_active === (1|true) ? 'ACTIVE' : 'INACTIVE' }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="element-wrapper" v-show="showNew">
        <h6 class="element-header">
          New Bonus
        </h6>
        <div class="element-box">
          <h5 class="form-header">New bonus</h5>
          <form v-on:submit.prevent="sendForm">
            <div class="form-group">
              <label for=""> Name</label>
              <input class="form-control" placeholder="Enter name" type="text" v-model="bonus.name">
            </div>
            <div class="form-group">
              <label> Description</label>
              <textarea class="form-control" rows="3" v-model="bonus.description"></textarea>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-primary" type="submit"><i class="os-icon os-icon-share"></i>  Submit</button>
              <button class="btn btn-info" v-on:click.prevent="setShowList"><i class="os-icon os-icon-arrow-left-circle"></i> Back to list</button>
            </div>
          </form>
        </div>
      </div>

      <div class="element-wrapper" v-show="showEdit">
        <h6 class="element-header">
          Edit Bonus
        </h6>
        <div class="element-box">
          <h5 class="form-header">New bonus</h5>
          <form v-on:submit.prevent="sendFormEdit">
            <div class="form-group">
              <label for=""> Name</label>
              <input class="form-control" placeholder="Enter name" type="text" v-model="bonus.name">
            </div>
            <div class="form-group">
              <label> Description</label>
              <textarea class="form-control" rows="3" v-model="bonus.description"></textarea>
            </div>
            <div class="form-buttons-w">
              <button class="btn btn-primary" type="submit"><i class="os-icon os-icon-edit"></i>  Submit</button>
              <button class="btn btn-info" v-on:click.prevent="setShowList"> <i class="os-icon os-icon-arrow-left-circle"></i> Back to list</button>
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
      showNew: false,
      showEdit: false
    }
  },
  created () {
    this.$http.get('bonus').then(response => {
      this.bonuses = response.data
      console.log(response.data);
    })
  },
  methods: {
    sendForm: function () {
      this.$http.post('bonus', this.bonus).then(response => {
        this.bonuses.push(response.data)
        this.setShowList()
      })
    },

    sendFormEdit: function () {
      console.log(this.bonus);
      this.$http.put('bonus/' + this.bonus.id, this.bonus).then(response => {
        this.bouns = response.data
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        })
      })
    },

    changeActive: function (bonus) {
      this.$http.put('bonus/is_active/' + bonus.id).then(response => {
        bonus.is_active = response.data.is_active
      })
    },
    setShowNew: function(){
      this.showNew = true,
      this.showEdit = false
      this.bonus = {}
    },
    setShowEdit: function(bonus){
      this.showNew = false,
      this.showEdit = true
      this.bonus = bonus
    },
    setShowList: function () {
      this.showNew = false,
      this.showEdit = false
    }
  }

}

</script>
