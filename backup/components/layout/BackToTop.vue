<template>
  <transition name="fade">
    <button v-if="show" @click="scrollToTop" class="fixed bottom-8 right-8 z-50 p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100 shadow hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const show = ref(false);
const handleScroll = () => {
  show.value = window.scrollY > 200;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
