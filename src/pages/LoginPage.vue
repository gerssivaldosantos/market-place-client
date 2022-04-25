<script lang="ts" setup>
import { userDto } from 'src/dtos/user'
import { useUser } from 'src/helpers/userRequest'
import { useGeneralStore } from 'src/stores/generalStore'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../helpers/useAuth'
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')
const isPwd = ref<boolean>(true)
const $s = useGeneralStore()
const submitForm = async () => {
  try {
    const result = await useAuth.login({
      email: email.value,
      password: password.value
    })
    if (result.token && result.id) {
      localStorage.setItem('token', result.token)
      const user = await useUser.get()
      const info: userDto = user.content
      $s.setUserInfo(info)
      await router.push('/')
    }
  } catch (err) {
    console.log(err)
  }
}

onMounted(async () => {
  if (localStorage.getItem('token')) {
    await router.push('/')
  }
})

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
        <div class="text-grey col text-h6 ellipsis flex justify-center">
          Access Account
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="Email" v-model="email">
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
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Login" type="submit" rounded>
          </q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-grey" style="text-decoration: none" to="/login/rescue">Forget the password?
            </router-link>
            <router-link class="text-grey" style="text-decoration: none" to="/login/create">Create Account
            </router-link>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
