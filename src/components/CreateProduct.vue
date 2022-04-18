<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div style="margin-bottom: 10px; display:grid">
          <span class="text-h6">New Product</span>
        </div>
        <q-form @submit="onRegisterClick">
          <div class="q-pa-md">
            <q-input v-model="name" label="Name" type="text" />
            <q-input v-model="description" label="Description" type="text" />
            <q-input v-model="price" label="Price" type="number" />
          </div>
          <q-card-actions align="right">
            <q-btn ref="loginButton" data-cy="login-login-button" type="submit" text-color="white" color="blue"
              label="Register" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar'
import { useRequest } from 'src/helpers/useRequest'
import { ref } from 'vue'
// eslint-disable-next-line no-undef
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()
const name = ref<string>('')
const description = ref<string>('')
const price = ref<number>(0)

const onRegisterClick = async () => {
  try {
    await useRequest.post('products', {
      name: name.value,
      description: description.value,
      price: price.value
    })
    onDialogOK()
  } catch (err) {
    console.log(err)
  }
}

</script>
