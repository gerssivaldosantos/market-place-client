<script lang="ts" setup>

import { ref } from 'vue'

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const submitForm = async () => { console.log('submitForm') }

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
        <div class="text-grey col text-h6 ellipsis flex justify-center"> Create Account</div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="name" v-model="name"></q-input>
        <q-input label="email" v-model="email"></q-input>
        <q-input label="password" type="password" v-model="password"></q-input>
        <div>
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Ok" type="submit" rounded>
          </q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-grey" style="text-decoration: none" to="/login/access">Already have an account?
            </router-link>
          </div>
        </div>
      </q-form>
    </q-card-section></q-card>
</template>
