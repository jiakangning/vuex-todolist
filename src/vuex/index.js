import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    add: (state,payload)=>{
      // console.log(payload);
      state.list.push(payload);
    }
  },
  getters: {
    listNumber (state){
      return state.list.length
    },
    activeList (state){
      return state.list.filter(item => item.isChecked === false)
    },
    completeList (state){
      return state.list.filter(item => item.isChecked === true)
    },
    activeNumber (state){
      return state.list.filter(item => item.isChecked === false).length
    }
  }
})

export default store;
