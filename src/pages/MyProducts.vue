<template>
  <div class="q-pa-md">
    <q-table no-data-label="You not have products, add one !" grid :visible-columns="visibleColumns" separator="none"
      :rows="rows" row-key="id" :selected-rows-label="getSelectedString" :selection="toggleDelete ? 'multiple' : 'none'"
      v-model:selected="selected" :filter="filter" hide-heade>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card" flat bordered>
            <div v-if="toggleDelete" class="absolute-bottom-right text-subtitle2">
              <q-checkbox v-model="props.selected" />
            </div>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs"> {{ props.row.name }}</div>
                <div class="text-caption text-grey">
                  {{ props.row.description }}
                </div>
              </q-card-section>

              <q-card-section class="col-7 flex flex-center">
                <q-img class="rounded-borders"
                  src="https://s2.glbimg.com/d8aMotGsi_GuzD1yjI_UdgiI3rg=/0x0:1080x718/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/y/z/644eBtTeSihz98yBg95w/redmi-g-2021.jpg" />
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-btn icon="add_shopping_cart" flat color="primary">
                Add to cart
              </q-btn>
              <q-btn flat icon="shopping_bag" color="primary">
                Buy
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
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
import { useProduct } from 'src/helpers/productRequest'
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
      try {
        const ids = selected.value.map((product: Record<string, string>) => product.id)
        await useProduct.deleteBulk({ ids })
        toggleDelete.value = !toggleDelete.value
        await getProducts()
      } catch (err) {
        console.log(err)
      }
    })
  }
}

const onToggleDelete = () => {
  toggleDelete.value = !toggleDelete.value
  if (toggleDelete.value) {
    selected.value = []
  }
}

const selected = ref([])

const getSelectedString = () => {
  return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.value.length}`
}

const visibleColumns = ref(['name', 'description', 'price'])

const rows = ref<[]>([])

const getProducts = async () => {
  const result = await useRequest.get('products')
  rows.value = result.data.content
}

onMounted(async () => {
  await getProducts()
})

</script>
