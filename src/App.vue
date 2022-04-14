<template>
  <router-view />
</template>

<script lang="ts" setup>
import axios from 'axios'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const triggerError = (message: string | null) => {
  if (!message) {
    message = 'Não foi possível efetuar o login, por favor contate um administrador do sistema'
  }
  $q.notify({
    type: 'negative',
    message
  })
}
axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 404 || error.response.status === 403 || error.response.status === 401 || error.response.status === 400) {
      console.log(error.response)
      triggerError(error.response.data.message)
    }
  }
)
$q.dark.set(true)
</script>

<style>
body.body--dark {
  background: rgb(32, 32, 32)
}
</style>
