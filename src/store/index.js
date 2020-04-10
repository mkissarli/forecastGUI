import Vue from "vue";
import Vuex from "vuex";

import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiResult: null
  },
  getters: {
    getStoredApiResult: state => {
      return state.apiResult;
    }
  },
  mutations: {
    async NEW_API_RESULT(state){
      var result;
      await api
	.call().get("/current.json?q=Lancaster,UK&key="+process.env.VUE_APP_API_ID)
	.then(function (response) {
	  console.log(response);
	  result = response.data;
	})
	.catch(function (error) {
	  console.log(error);
	})
	.then(function () {
	  // always executed
	});
      state.apiResult = result;
    }
  },
  actions: {
    newApiResult(context){
      context.commit("NEW_API_RESULT");
    }
  },
  modules: {
    
  }
});
