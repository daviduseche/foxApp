<template>
  <div id="character-list">
    <button
      v-on:click="getCharName(character.name)"
      v-for="character in characters"
      :key="character.id"
    >
      {{ character.name }}
    </button>
    <div v-if="charId">
      <ul v-for="person in personList" :key="person.name">
        <li>Name: {{ person.name }}</li>
        <li>Height: {{ person.height }}cm</li>
        <li>Weight: {{ person.mass }}kg</li>
      </ul>
      <img :src="require(`../assets/${charId}.png`)" :alt="charId" />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'character-list',
  props: {
    characters: Array
  },
  data() {
    return {
      charId: '',
      PERSON: this.$store.getters.PERSON
    };
  },
  computed: {
    personList() {
      return this.$store.getters.PERSON;
    },
    starWarsImage() {
      const fileName = this.charId;

      return require(`../assets/${fileName}.png`); // the module request
    }
  },
  methods: {
    getCharName: function(name) {
      this.charId = name;

      this.$store.commit('change', name);
    }
  }
};
</script>

<style scoped></style>
