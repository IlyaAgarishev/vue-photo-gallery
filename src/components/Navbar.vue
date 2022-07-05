<template>
  <v-container fluid>
    <v-app-bar color="orange" dense dark>
      <v-spacer />
      <v-btn outlined class="ml-3">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photo">Фотографии</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>
