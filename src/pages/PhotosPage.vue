<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto" />
    <v-row>
      <Photo v-for="photo in photos" :photo="photo" />
    </v-row>
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";
import PhotoForm from "../components/photo/PhotoForm";

export default {
  components: { Photo, PhotoForm },

  data: () => ({
    photos: [],
  }),
  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((resp) => (this.photos = resp.data));
    },

    addPhoto(photo) {
      this.photos.push(photo);
    },
  },
};
</script>

<style lang="scss" scoped></style>
