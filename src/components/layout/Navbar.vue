<template>
  <nav class="fixed top-0 left-0 right-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            {{ lang === 'th' ? 'ปวิช วีรคุปต์' : 'Pawit Weerakoop' }}
          </a>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-1 lg:gap-2">
          <li><a href="#home" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'หน้าแรก' : 'Home' }}</a></li>
          <li><a href="#skills" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'ทักษะ' : 'Skills' }}</a></li>
          <li><a href="#experience" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'ประสบการณ์' : 'Experience' }}</a></li>
          <li><a href="#education" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'การศึกษา' : 'Education' }}</a></li>
          <li><a href="#projects" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'โปรเจกต์' : 'Projects' }}</a></li>
          <li><a href="#awards" class="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-sm lg:text-base font-medium transition-colors">{{ lang === 'th' ? 'รางวัล' : 'Awards' }}</a></li>
        </ul>

        <!-- Language Toggle & Hamburger -->
        <div class="flex items-center gap-3">
          <button 
            @click="toggleLang"
            class="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {{ lang === 'th' ? 'EN' : 'TH' }}
          </button>

          <!-- Hamburger Menu -->
          <button 
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <ul class="px-4 py-3 space-y-2">
            <li><a href="#home" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'หน้าแรก' : 'Home' }}</a></li>
            <li><a href="#skills" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'ทักษะ' : 'Skills' }}</a></li>
            <li><a href="#experience" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'ประสบการณ์' : 'Experience' }}</a></li>
            <li><a href="#education" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'การศึกษา' : 'Education' }}</a></li>
            <li><a href="#projects" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'โปรเจกต์' : 'Projects' }}</a></li>
            <li><a href="#awards" @click="isOpen = false" class="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-colors">{{ lang === 'th' ? 'รางวัล' : 'Awards' }}</a></li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>

  <!-- Spacer to prevent content overlap -->
  <div class="h-16 md:h-20"></div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  lang: String
});

const emit = defineEmits(['toggle-lang']);
const isOpen = ref(false);

const toggleLang = () => {
  emit('toggle-lang');
  isOpen.value = false;
};
</script>
