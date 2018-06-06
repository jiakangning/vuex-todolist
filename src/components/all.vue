<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="data in list">
      <input type="checkbox" name="" value="" v-model='data.isChecked'>
      <span :class="{delActive:data.isChecked}">{{data.text}}</span>
    </li>
  </ul>

</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'appheader',
  data: () => ({

  }),
  computed: {
    ...mapState(['list'])
  }
}
</script>
<style lang="css" scoped>
.delActive{
  text-decoration: line-through;
}
</style>
