<template>
  <head>
    <NavBar />
    <SearchBar />
    <!-- <test /> -->
    <MenuBar style="z-index: 1" />
  </head>
  <SideBarLeft />
  <CarouselPhoto />
  <SideBarMiddle />
  <SideBarRight />
</template>
<script setup>
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import MenuBar from "../components/MenuBar.vue";
import SideBarLeft from "../components/SideBarLeft.vue";
import SideBarMiddle from "../components/SideBarMiddle.vue";
import CarouselPhoto from "../components/CarouselPhoto.vue";
import SideBarRight from "../components/SideBarRight.vue";
import test from "../components/test.vue";
</script>
<style scoped>
* {
  display: grid;
  grid-template-areas:
    "header header header"
    "searchbar searchbar searchbar"
    "menubar menubar "
    "sideleft middleup  sideright"
    "sideleft middledown  sideright";
  /* grid-column-gap: 5px;
    grid-row-gap: 5px; */
}

#NavBar {
  grid-area: header;
}
#SearchBar {
  grid-area: searchbar;
}
#MenuBar {
  grid-area: menubar;
}
#SideBarLeft {
  grid-area: sideleft;
}
#CarouselPhoto {
  grid-area: middleup;
}
#SideBarMiddle {
  grid-area: middledown;
}
#SideBarRight {
  grid-area: sideright;
}
</style>
