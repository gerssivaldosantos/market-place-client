<template>
  <div class="q-pa-md">
    <q-table grid separator="none" :rows="rows" row-key="name" />
    <br>
    <q-btn @click="onClickAddProduct" label="Add New" color="blue"></q-btn>
  </div>
</template>

<script lang="ts" setup>import { useQuasar } from 'quasar'
import CreateProductVue from 'src/components/CreateProduct.vue'
import { useRequest } from 'src/helpers/useRequest'
import { ref, onMounted } from 'vue'

const $q = useQuasar()

const onClickAddProduct = () => {
  $q.dialog({
    component: CreateProductVue
  }).onOk(async () => {
    const result = await useRequest.get('products')
    rows.value = result.data.content
  }).onCancel(() => {
    console.log('Cancel')
  }).onDismiss(() => {
    console.log('Called on OK or Cancel')
  })
}

const rows = ref<[]>([])

onMounted(async () => {
  const result = await useRequest.get('products')
  rows.value = result.data.content
})

</script>
