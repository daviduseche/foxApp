<template>
  <div id="app" class="small-container">
    <h1>Choose your character</h1>
    <character-list :characters="characters" />
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList.vue';

export default {
  name: 'app',
  components: {
    CharacterList
  },
  data() {
    return {
      characters: [
        {
          id: 1,
          name: 'Luke Skywalker'
        },
        {
          id: 4,
          name: 'Darth Vader'
        },
        {
          id: 3,
          name: 'R2-D2'
        },
        {
          id: 10,
          name: 'Obi-Wan Kenobi'
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch('GET_PERSON');
  }
};
</script>

<style>
@import './assets/css/fonts.css';

body {
  background-color: #fafafa;
}

h1 {
  text-align: left;
}

button {
  background-color: #ffe81f;
  border: 1px solid #000000;
  font-family: 'SfDistant';
  color: #000000;
  margin: 10px;
}

button:hover {
  background: #000000;
  border: 1px solid #ffe81f;
}

button:focus {
  background: #000000;
  color: #ffffff;
}

.small-container {
  max-width: 1024px;
  text-align: left;
}

#app,
h1 {
  font-family: 'SfDistant', monospace;
}
</style>
