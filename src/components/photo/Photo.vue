<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>
        {{ photo.title }}
      </v-card-title>
      <v-card-text>
        <v-img width="200" height="200" :src="photo.url"></v-img>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setCurrentPhoto", "showDialog"]),
    openPhoto() {
      this.showDialog();
      this.setCurrentPhoto(this.photo);
    },
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
