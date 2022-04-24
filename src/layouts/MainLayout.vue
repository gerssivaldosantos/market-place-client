<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Market Place</q-toolbar-title>
        <q-btn flat icon="logout" @click="onLogout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <RouteLink v-for="route in routeLinks" :key="route.title" v-bind="route" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import RouteLink from 'components/RouteLink.vue'
import PreferencesDialog from 'components/PreferencesDialog.vue'
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  if (!localStorage.getItem('token')) { useRouter().push('/login/access') }
})
const router = useRouter()
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const onLogout = async () => {
  localStorage.clear()
  await router.push('/login/access')
}

const $q = useQuasar()

const routeLinks = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    route: '/index'
  },
  {
    title: 'My Profile',
    caption: '',
    icon: 'person',
    route: '/profile'
  },
  {
    title: 'My Products',
    caption: 'View your products',
    icon: 'store',
    route: '/products'
  },
  {
    title: 'My Orders',
    caption: 'View your orders',
    icon: 'sell',
    route: '/orders'
  },
  {
    title: 'Preferences',
    caption: 'Change settings',
    icon: 'settings',
    onclick: () => {
      $q.dialog({
        component: PreferencesDialog
      }).onOk(async () => {
        console.log('ok')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Called on OK or Cancel')
      })
    }
  }
]
</script>
