<template>
  <div
    class="h-screen container mx-auto flex flex-col justify-center items-center"
  >
    <h1 class="text-5xl font-bold mb-4">Tracking</h1>
    <ul>
      <li>
        Version：<span class="font-bold">{{ sdkVersion }}</span>
      </li>
      <li>
        Error：<span :class="{ 'text-red-500': liffError }">{{
          liffError || 'no any error'
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $liffInit, $liff } = useNuxtApp()

const sdkVersion = ref('')
const liffError = ref('')

onMounted(() => {
  $liffInit
    .then(() => {
      sdkVersion.value = $liff.getVersion()
    })
    .catch((error) => {
      liffError.value = error
    })
})
</script>
