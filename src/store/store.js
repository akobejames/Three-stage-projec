import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    getData(state, res) {
      state.data = res;
      console.log(state.data)
    }
  },
  actions: {
    getDataAll(context) {
      axios({
        url: "http://jielinhao.com/indexdata"
      }).then(res => {
        context.commit("getData", res)
      });
    }
  },
})
