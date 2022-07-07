<template>
  <v-container>
    <PhotoForm v-if="photos.length < 12" @addPhoto="addPhoto" />
    <div v-else>Вы не можете добавить больше фотографий</div>

    <v-row>
      <Photo v-for="photo in $store.getters.getAllPhotos" :photo="photo" />
    </v-row>

    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";
import PhotoForm from "../components/photo/PhotoForm";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
import { mapActions } from "vuex";

export default {
  components: { Photo, PhotoForm, PhotoDialog },

  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false,
  }),
  mounted() {
    // dispatch работатет с асинхронными экшенами
    this.fetchPhotos();
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
    addPhoto(photo) {
      this.photos.push(photo);
    },

    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
