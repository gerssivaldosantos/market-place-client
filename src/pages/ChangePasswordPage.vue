<script lang="ts" setup>

import { useRequest } from 'src/helpers/useRequest'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const password = ref<string>('')
const route = useRoute()
const submitForm = async () => {
  try {
    await useRequest.post('change-password', {
      password: password.value,
      emailToken: route.params.emailToken
    })
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <q-card style="padding: 20px" v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="password" v-model="password"></q-input>
        <div>
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Change" type="submit" rounded>
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
