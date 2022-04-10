<template>
  <img src="../assets/wave.png" class="wave" alt="login-wave" />
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <!-- <img src="../assets/login.svg" class="responsive" alt="login-image" /> -->
    </div>
    <div v-bind:class="{ 'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs }"
      class="col-12 col-md-6 flex content-center">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
