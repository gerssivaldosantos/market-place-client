<template>
  <router-view />
</template>

<script lang="ts" setup>import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  localStorage.getItem('token') ?? useRouter().push('/login')
})
</script>
