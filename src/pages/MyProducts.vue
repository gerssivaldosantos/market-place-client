<template>
  <div class="q-pa-md">
    <q-table no-data-label="You not have products, add one !" grid :visible-columns="visibleColumns" separator="none"
      :rows="rows" row-key="id" :selected-rows-label="getSelectedString" :selection="toggleDelete ? 'multiple' : 'none'"
      v-model:selected="selected" :filter="filter" hide-heade>
      <template v-slot:item="props">
        <div class="q-pa-md">
          <q-card style="width: 600px; height: 300px;" class="my-card">
            <q-card-section horizontal>
              <div style="padding: 20px">
                <q-img style="height: auto; width: 300px; border-radius: 5px;"
                  src="https://cdn.quasar.dev/img/parallax1.jpg" />
              </div>
              <div>
                <q-card-section>
                  <h6>{{ props.row.name }}</h6>
                </q-card-section>
                <q-card-section>
                  <p>{{
                      props.row.description.length > 64
                        ? `${props.row.description.slice(0, 64)}...`
                        : props.row.description
                  }}
                  </p>
                </q-card-section>

              </div>
            </q-card-section>
            <q-separator />

            <q-card-actions>
              <q-btn flat round icon="event" />
              <q-btn flat>
                5:30PM
              </q-btn>
              <q-btn flat>
                7:00PM
              </q-btn>
              <q-btn flat color="primary">
                Reserve
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
