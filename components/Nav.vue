<script setup lang="ts">

const links = [
  {
    name: "Accueil",
    path: "/"
  },
  {
    name: "Galerie",
    path: "/"
  },
  {
    name: "Contact",
    path: "/"
  }
]

</script>

<template>
  <section class="w-full flex justify-center items-center ">
    <NuxtLink
        v-for="{name, path} in links"
        :to="path"
        class="px-4"
    >
      {{ name }}
      na
    </NuxtLink>
  </section>
</template>
