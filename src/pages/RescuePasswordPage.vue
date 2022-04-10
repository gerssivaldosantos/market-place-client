<script lang="ts" setup>

import { ref } from 'vue'

const email = ref<string>('')
const submitForm = async () => { console.log('submitForm') }

</script>

<template>
  <q-card style="padding: 20px" v-bind:style="$q.screen.lt.sm ? { 'width': '80%' } : { 'width': '50%' }">
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="submitForm">
        <q-input label="email" v-model="email"></q-input>
        <div>
          <q-btn style="margin-bottom: 10px" class="full-width" color="primary" label="Send Link" type="submit" rounded>
          </q-btn>
          <div class="text-center q-mt-sm q-gutter-lg">
            <router-link class="text-grey" style="text-decoration: none" to="/login/access">
              <q-btn flat icon="vpn_key"> Login </q-btn>
            </router-link>
          </div>
        </div>
      </q-form>
    </q-card-section></q-card>
</template>
