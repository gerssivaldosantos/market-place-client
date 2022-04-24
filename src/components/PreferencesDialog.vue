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
import { useDialogPluginComponent } from 'quasar'
// eslint-disable-next-line no-undef
defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()

const onSaveClick = () => {
  onDialogOK()
}

</script>
