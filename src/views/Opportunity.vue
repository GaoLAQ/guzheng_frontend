<script lang="ts">
import HeaderComponent from "../components/Header.vue";
export default {
  data: () => ({}),
  components: {
    HeaderComponent,
  },
};
</script>

<template>
  <v-row class="ma-2">
    <HeaderComponent :isTextWhite="false" :isHome="false" />
  </v-row>
  <br />
  <v-row class="ma-5" justify="center">
    <v-col v-for="n in 3" :key="n" class="d-flex" cols="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
      </v-img>
    </v-col>
  </v-row>
</template>
<style scoped></style>
