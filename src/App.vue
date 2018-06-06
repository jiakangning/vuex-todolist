<template>
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">
            <img src="./assets/logo.png" alt="Brand">
          </a>
          </div>

           </div>
      </nav>
      <div class="panel panel-primary">
        <div class="panel-heading"> <h2 class="text-center">ToDoList</h2> </div>
        <div class="panel-body">
          <div class="form-group">
            <input type="text" placeholder="你想做什么" class='form-control' @keyup.enter="handleKeyUp">
          </div>
        </div>
        <div class="panel-footer">

        <div class="container">
          <div class="btn-group btn-group-justified" role="group" >
            <router-link to="/" class="btn btn-default">All</router-link>
            <router-link to="/active" class="btn btn-default">Active</router-link>
            <router-link to="/completed" class="btn btn-default">Completed</router-link>
            <button type="button" name="button" class="btn btn-primary">待办事件{{activeNumber}}/{{listNumber}}</button>
          </div>
        </div>


        </div>
            <router-view ></router-view>
      </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data (){
    return {

    }
  },
  methods: {
    handleKeyUp(ev) {
      console.log(ev.target.value);
      this.$store.commit("add",{text:ev.target.value,isChecked:false});
    }
  },
  computed :{
    ...mapGetters(['activeNumber','listNumber'])
  }
}
</script>

<style lang="css">
@import './bootstrap.css'
</style>
