<script setup lang="ts">
import img from "../assets/background.jpg";
import Contact from "../components/Contact.vue";
import HeaderComponent from "../components/Header.vue";
</script>

<template>
  <v-app>
    <v-row class="mb-1">
      <img :src="img" class="background" />
      <HeaderComponent
        class="header-component"
        :isTextWhite="true"
        :isHome="true"
      />
    </v-row>
    <br />

    <v-row class="mt-1">
      <Contact />
    </v-row>
  </v-app>
</template>

<style scoped>
.background {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
</style>
