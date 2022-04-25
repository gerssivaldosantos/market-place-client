<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Market Place</q-toolbar-title>
        <q-btn style="margin-right: 15px;" flat dense round icon="shopping_cart" />
        <q-btn flat icon="keyboard_arrow_down">
          <q-menu :offset="[0, 10]">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle label="Dark Mode" @update:model-value="onDarkModeSelected" v-model="darkMode" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="../assets/avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn @click="onLogout" color="primary" label="Logout" push size="sm" v-close-popup />
              </div>
            </div>
          </q-menu>
        </q-btn>
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
import { LocalStorage, useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGeneralStore } from 'src/stores/generalStore'

/* const cart = ref<string[]>([]) */

onMounted(() => {
  if (!localStorage.getItem('token')) { useRouter().push('/login/access') }
})
const $s = useGeneralStore()
const darkMode = ref<boolean>($s.darkMode)
const router = useRouter()
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const onDarkModeSelected = (value: boolean) => {
  $q.dark.set(value)
  LocalStorage.set('darkMode', value)
}

const onLogout = async () => {
  $q.dialog({
    title: 'Disconnect',
    message: 'Are you sure you want Logout ?',
    ok: 'Yes',
    cancel: 'No'
  }).onOk(async () => {
    localStorage.clear()
    await router.push('/login/access')
  })
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
