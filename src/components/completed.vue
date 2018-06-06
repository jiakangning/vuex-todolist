<template>
  <div id="">
    <ul class="list-group">
      <li class="list-group-item" v-for="data in completeList">
        <input type="checkbox" name="" value="" v-model='data.isChecked'>
        <span :class="{delActive:data.isChecked}">{{data.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: "",
  data: () => ({

  }),
  computed :{
    ...mapGetters(['completeList'])
  }
}
</script>
<style lang="css" scoped>
</style>
