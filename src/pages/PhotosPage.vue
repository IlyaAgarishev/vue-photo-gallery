<template>
  <v-container>
    <Photo v-for="photo in photos" :photo="photo" />
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";

export default {
  components: { Photo },

  data: () => ({
    photos: [
      { id: 1, title: "фото 1" },
      { id: 2, title: "фото 2" },
      { id: 3, title: "фото 3" },
      { id: 4, title: "фото 4" },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
