<template>
  <q-page class="column items-center justify-evenly">
    <q-page-section>
      <q-avatar size="100px">
        <img src="../assets/avatar.png">
      </q-avatar>
    </q-page-section>
    </q-page>

</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(async () => {
  console.log('ProfilePage mounted')
})

const id: string = localStorage.getItem('userId') || ''

</script>
