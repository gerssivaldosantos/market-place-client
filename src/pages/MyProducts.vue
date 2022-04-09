<template>
  <div class="q-pa-md">
    <q-table separator="none" :rows="rows" row-key="name" />
  </div>
</template>

<script lang="ts" setup>

const rows = [
  // list of products
  {
    name: 'Notebook',
    price: 100,
    description: 'A very nice notebook'
  },
  {
    name: 'Mouse',
    price: 20,
    description: 'A very nice mouse'
  },
  {
    name: 'Keyboard',
    price: 30,
    description: 'A very nice keyboard'
  },
  {
    name: 'Monitor',
    price: 200,
    description: 'A very nice monitor'
  },
  {
    name: 'Printer',
    price: 50,
    description: 'A very nice printer'
  },
  {
    name: 'Scanner',
    price: 10,
    description: 'A very nice scanner'
  },
  {
    name: 'Speaker',
    price: 40,
    description: 'A very nice speaker'
  },
  {
    name: 'Headphones',
    price: 30,
    description: 'A very nice headphones'
  },
  {
    name: 'Camera',
    price: 150,
    description: 'A very nice camera'
  },
  {
    name: 'Laptop',
    price: 500,
    description: 'A very nice laptop'
  },
  {
    name: 'Smartphone',
    price: 300,
    description: 'A very nice smartphone'
  },
  {
    name: 'Tablet',
    price: 400,
    description: 'A very nice tablet'
  },
  {
    name: 'TV',
    price: 300,
    description: 'A very nice TV'
  },
  {
    name: 'Smartwatch',
    price: 100,
    description: 'A very nice smartwatch'
  },
  {
    name: 'Headset',
    price: 50,
    description: 'A very nice headset'
  },
  {
    name: 'Speaker',
    price: 40,
    description: 'A very nice speaker'
  },
  {
    name: 'Headphones',
    price: 30,
    description: 'A very nice headphones'
  },
  {
    name: 'Camera',
    price: 150,
    description: 'A very nice camera'
  },
  {
    name: 'Laptop',
    price: 500,
    description: 'A very nice laptop'
  },
  {
    name: 'Smartphone',
    price: 300,
    description: 'A very nice smartphone'
  },
  {
    name: 'Tablet',
    price: 400,
    description: 'A very nice tablet'
  },
  {
    name: 'TV',
    price: 300,
    description: 'A very nice TV'
  }
]
</script>
