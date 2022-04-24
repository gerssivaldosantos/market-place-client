<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div style="width: 100%; justify-content: center; margin-bottom: 10px; display:grid">
          <span class="text-h6">Preferences</span>
        </div>
        <q-form @submit="onSaveClick">
          <div class="q-pa-md">
            <!-- Inputs -->
            <q-toggle v-model="darkMode" label="Dark Mode" />
          </div>
          <q-card-actions align="right">
            <q-btn ref="loginButton" data-cy="login-login-button" type="submit" text-color="white" color="blue"
              label="Save" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { LocalStorage, useDialogPluginComponent } from 'quasar'
import { useGeneralStore } from 'src/stores/generalStore'
import { ref } from 'vue'
// eslint-disable-next-line no-undef
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()
const $s = useGeneralStore()
const darkMode = ref<boolean>($s.darkMode)
const onSaveClick = () => {
  $s.darkMode = darkMode.value
  LocalStorage.set('darkMode', true)
  onDialogOK()
}

</script>
