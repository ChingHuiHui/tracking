<template>
  <div class="container mx-auto flex flex-col items-center mt-20">
    <h1 class="text-5xl font-bold mb-4">Tracking</h1>
    <p v-if="isLoading">Loading ... Plz wait ...</p>
    <div v-else-if="info" class="space-y-4">
      <div class="text-center">
        <p class="mb-1">Your Name:</p>
        <h2 class="text-3xl font-bold bg-slate-300 py-1">
          {{ info.displayName }}
        </h2>
      </div>
      <img :src="info.pictureUrl" class="w-52 h-52" />
    </div>
    <div v-else>No any data</div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

const { $liff } = useNuxtApp()

type Profile = {
  displayName: string
  pictureUrl: string
}

const info: Ref<Profile | null> = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true

  const url = useRuntimeConfig().public.apiBaseUrl + '/auth/me'
  info.value = await $fetch(url, {
    headers: {
      Authorization: `Bearer ${$liff.getAccessToken()}`,
    },
  })

  isLoading.value = false
})
</script>
