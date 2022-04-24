<script lang="ts" setup>

import { useUser } from 'src/helpers/userRequest'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const isPwd = ref<boolean>(true)
const submitForm = async () => {
  try {
    await useUser.post({
      name: name.value,
      email: email.value,
      password: password.value,
      user_type_id: '83d99bad-73a6-41c5-a19b-f36cdd1b7d31'
    })
    await router.push('/login/access')
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
  <q-card style="padding: 20px" v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
    <q-card-section>
      <q-avatar size="100px" class="absolute-center bg-white shadow-2">
        <img src="../assets/avatar.png" alt="avatar" />
      </q-avatar>
    </q-card-section>
    <q-card-section>
      <div class="q-pt-lg">
        <div class="text-grey col text-h6 ellipsis flex justify-center"> Create Account</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="Your Name" v-model="name">
          <template v-slot:before>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input label="email" v-model="email">
          <template v-slot:before>
            <q-icon name="mail" />
          </template>
        </q-input>
        <q-input label="Password" v-model="password" :type="isPwd ? 'password' : 'text'">
          <template v-slot:before>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>
        <div>
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Ok" type="submit" rounded>
          </q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-grey" style="text-decoration: none" to="/login/access">Already have an account?
            </router-link>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
