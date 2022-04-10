<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../helpers/useRequest'
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')
const submitForm = async () => {
  try {
    const result = await useAuth.login({
      email: email.value,
      password: password.value
    })
    if (result.token) {
      localStorage.setItem('token', result.token)
      await router.push('/')
    }
  } catch (err) {
    alert(err)
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
      <q-avatar size="103px" class="absolute-center shadow-10">
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
        <q-input label="Username" v-model="email"></q-input>
        <q-input label="Password" type="password" v-model="password"></q-input>
        <div>
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Login" type="submit" rounded>
          </q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-grey" style="text-decoration: none" to="/login/rescue">Esqueceu a senha?
            </router-link>
            <router-link class="text-grey" style="text-decoration: none" to="/login/create">Criar conta
            </router-link>
          </div>
        </div>
      </q-form>
    </q-card-section></q-card>
</template>
