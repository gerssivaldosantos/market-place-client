<template>
  <q-page class="column items-center justify-center">
    <q-avatar size="100px">
      <img src="../assets/avatar5.png">
    </q-avatar>
    <h4>{{ userInfo?.content.name }}</h4>
    <h6>{{ userInfo?.content.email }}</h6>
    <h8>{{ userInfo?.content.user_type.description }}</h8>
  </q-page>
</template>

<script lang="ts" setup>
import { userResponseDto } from 'src/dtos/user'
import { onMounted, ref } from 'vue'
import { useUser } from '../helpers/userRequest'
const userInfo = ref<userResponseDto>()
onMounted(async () => {
  const response = await useUser.get()
  console.log(response)
  userInfo.value = response
})

</script>
