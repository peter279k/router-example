<template>
  <h1>{{ message }}</h1>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  name: "About",
  props: {
    message: String,
    id: String,
  },
  mounted() {
  },
};
</script>
