<template>
  <v-dialog v-model="dialogVisible" max-width="600">
    <v-card>
      <v-card-title>
        {{ full_title }}
      </v-card-title>

      <v-card-text>
        <v-img :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    photo: { type: Object, required: true },
    value: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.dialogVisible = this.value;
  },
  data: () => ({
    dialogVisible: false,
  }),

  // отслеживаемые свойства
  watch: {
    value(newValue) {
      this.dialogVisible = newValue;
    },
    dialogVisible(newValue) {
      this.$emit("input", newValue);
    },
  },

  // вычисляемые свойства
  computed: {
    // ф-ия будет вызываться только тогда, когда изменилось какое-то из полей, используемое внутри самой ф-ии
    full_title() {
      return `Название фотографии - ${this.photo.title}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
