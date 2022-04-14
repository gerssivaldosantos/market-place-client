<script lang="ts" setup>
</script>

<template>
  <q-card style="padding: 20px" v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
    <q-card-section>
      <h4 class="Headline-1 text-grey-7">Congratulations ! Your email are actived.
      </h4>
      <q-btn to="/login/access" icon="key" padding="10px" color="blue">Login</q-btn>
    </q-card-section>
  </q-card>
</template>
