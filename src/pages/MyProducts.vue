<template>
  <div class="q-pa-md">

    <q-table grid :visible-columns="visibleColumns" separator="none" :rows="rows" row-key="name"
      :selected-rows-label="getSelectedString" :selection="toggleDelete ? 'multiple' : 'none'"
      v-model:selected="selected" :filter="filter" hide-heade>
      <template v-slot:body-cell>
        oi
      </template>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:top-left>
        <q-btn style="margin-right: 10px" @click="onClickAddProduct" rounded flat icon="post_add" color="blue">
        </q-btn>
        <q-btn outline style="margin-right: 10px" @click="onToggleDelete" rounded flat
          :icon="toggleDelete ? 'done' : 'checklist'" color="blue">
        </q-btn>
        <q-btn v-show="toggleDelete" style="margin-right: 10px" @click="onDeleteSelected" rounded flat icon="delete"
          color="red">
        </q-btn>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>import { useQuasar } from 'quasar'
import CreateProductVue from 'src/components/CreateProduct.vue'
import { useRequest } from 'src/helpers/useRequest'
import { ref, onMounted } from 'vue'

const filter = ref('')
const $q = useQuasar()

const toggleDelete = ref<boolean>(false)

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

const onDeleteSelected = () => {
  /* Open dialog to show confirmation */
  if (selected.value.length > 0) {
    $q.dialog({
      title: 'Delete Selected',
      message: 'Are you sure you want to delete the selected products?',
      ok: 'Yes',
      cancel: 'No'
    }).onOk(async () => {
      /* Delete selected products */
      console.log(selected.value)
    }).onCancel(() => {
      console.log('Cancel')
    }).onDismiss(() => {
      console.log('Called on OK or Cancel')
    })
  }
}

const onToggleDelete = () => {
  toggleDelete.value = !toggleDelete.value
}

const selected = ref([])

const getSelectedString = () => {
  return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.value.length}`
}

const visibleColumns = ref(['name', 'description', 'price'])

const rows = ref<[]>([])

onMounted(async () => {
  const result = await useRequest.get('products')
  rows.value = result.data.content
})

</script>
