<template>
  <div>{{ photo.id + photo.title }}</div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
