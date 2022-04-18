<template>
  <div class="q-pa-md">
    <q-table separator="none" :rows="rows" row-key="name" />
  </div>
</template>

<script lang="ts" setup>import { useRequest } from 'src/helpers/useRequest'
import { ref, onMounted } from 'vue'

const rows = ref<[]>([])

onMounted(async () => {
  const result = await useRequest.get('products')
  rows.value = result.data.content
})

</script>
