<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">
          Bonus
        </h6>
        <div class="element-box">
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
          <p>{{user.created_at}}</p>
          <binary/>
          <unilevel/>
          <Indicated/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import Indicated from  '../genealogy/indicates.vue'
import Binary from '../dots/binary.vue'
import Unilevel from '../dots/unilevel.vue'

export default {
  data () {
    return {
      user:{},
      indicators: {}
    }
  },
  components: {
    Indicated, Binary, Unilevel
  },

  mounted(){
    this.$http.get('genealogy/show').then( response => {
      this.user = response.data
    });

  }
}
</script>
