import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    charName: '',
    person: []
  },
  mutations: {
    change(state, charName) {
      state.charName = charName;
    },
    SET_PERSON: (state, payload) => {
      console.log(payload);
      state.person = payload;
    }
  },
  getters: {
    charName: state => state.charName,
    PERSON: state => {
      const name = state.charName;
      return state.person.filter(person => {
        return person.name === name;
      });
    }
  },

  actions: {
    GET_PERSON: async context => {
      let { data } = await axios.get('https://swapi.co/api/people/');
      context.commit('SET_PERSON', data.results);
    }
  }
});
