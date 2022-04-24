<template>
  <router-view />
</template>

<script lang="ts" setup>
/* import axios from 'axios' */
import { LocalStorage, useQuasar } from 'quasar'
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { userDto } from './dtos/user'
import { useUser } from './helpers/userRequest'
import { useGeneralStore } from './stores/generalStore'

const $s = useGeneralStore()
const $q = useQuasar()
const router = useRouter()

/* const triggerMessage = (message: string | null, type: string | null) => {
  if (!message) {
    message = 'Not Found'
  }
  $q.notify({
    type: type || 'negative',
    message
  })
}

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      triggerMessage(response.data.message, 'blue')
    }
    return response
  },
  (error) => {
    if (error.response.status === 500) {
      console.log(error.response)
      triggerMessage(error.response.data.message, 'negative')
    } else if (error.response.status === 404 || error.response.status === 403 || error.response.status === 401 || error.response.status === 400) {
      triggerMessage(error.response.data.message, 'warning')
    } else {
      triggerMessage(null, 'negative')
    }
  }
) */
watch(() => $s.darkMode, (newValue) => {
  $q.dark.set(newValue)
})

const browserStorage = LocalStorage.getAll()

onMounted(async () => {
  $s.darkMode = browserStorage.darkMode || false

  if (!browserStorage.token) {
    LocalStorage.clear()
    await router.push('/login/access')
  } else if ($s.user.infos === {}) {
    const result = await useUser.get()
    const infos: userDto = result.content
    $s.setUserInfo(infos)
  } else if ($s.token === '') {
    $s.setToken(browserStorage.token)
  }
})

</script>

<style>
body.body--dark {
  background: rgb(55, 55, 55)
}
</style>
