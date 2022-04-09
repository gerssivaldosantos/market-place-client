<template>
  <q-item :to="route">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  route: {
    type: String,
    default: ''
  }
})
</script>
