<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import BackToTop from './components/layout/BackToTop.vue';
import Hero from './sections/Hero.vue';
import Skills from './sections/Skills.vue';
import Experience from './sections/Experience.vue';
import Education from './sections/Education.vue';
import Projects from './sections/Projects.vue';
import Awards from './sections/Awards.vue';

const lang = ref('en');
const toggleLang = () => {
  lang.value = lang.value === 'th' ? 'en' : 'th';
};

// Sync <html lang="..."> with lang value
watchEffect(() => {
  document.documentElement.lang = lang.value;
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans text-lg">
    <Navbar :lang="lang" @toggle-lang="toggleLang" />
    <main>
      <Hero :lang="lang" />
      <Skills :lang="lang" />
      <Experience :lang="lang" />
      <Education :lang="lang" />
      <Projects :lang="lang" />
      <Awards :lang="lang" />
    </main>
    <Footer :lang="lang" />
    <BackToTop />
  </div>
</template>

<style>
body {
  background: #f9fafb;
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  font-size: 1.125rem; /* 18px, Tailwind text-lg */
}

/* Force Noto Sans Thai font for Thai: if html lang is th, use Noto Sans Thai everywhere */
html[lang="th"] body, html[lang="th"] * {
  font-family: 'Noto Sans Thai', ui-sans-serif, system-ui, sans-serif !important;
}
</style>
