<template>
  <NavBar />
  <SearchBar />
  <MenuBar />
  <LeftBar />
  <CenterBar />
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import MenuBar from "./components/MenuBar.vue";
import LeftBar from "./components/LeftBar.vue";
import CenterBar from "./components/CenterBar.vue";
</script>

<style scoped>
* {
  background-color: #f2f2f2;
}
</style>
