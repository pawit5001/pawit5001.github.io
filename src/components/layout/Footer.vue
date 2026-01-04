<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p class="text-center text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} {{ lang === 'th' ? 'Pawit Weerakoop' : 'Pawit Weerakoop' }}
      </p>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  lang: String
});
</script>
