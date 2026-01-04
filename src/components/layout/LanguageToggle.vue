<template>
  <button @click="$emit('toggle-lang')" class="ml-4 px-3 py-1 rounded bg-blue-500 text-white">
    {{ lang === 'th' ? 'EN' : 'TH' }}
  </button>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang: String
});
</script>
