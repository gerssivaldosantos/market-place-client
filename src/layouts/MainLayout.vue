<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Market Place</q-toolbar-title>

        <div>Username</div>
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
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const routeLinks = [
  {
    title: 'Home',
    caption: '',
    icon: 'home',
    route: '/'
  },
  {
    title: 'My Products',
    caption: 'View your products',
    icon: 'storefront',
    route: '/my-products'
  }
]
</script>
