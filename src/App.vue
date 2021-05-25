<template>
  <nav>
    <router-link :to="{ name: 'home', params: { id: 1, message: 'Home' } }">Home</router-link> |
    <router-link :to="{ name: 'about', params: { id: 2, message: 'About' } }">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const route = useRoute();

    const id = computed(() => route.params.id);
    return {
      id,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
