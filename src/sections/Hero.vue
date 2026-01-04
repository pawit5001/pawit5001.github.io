
<template>
  <section id="home" class="max-w-3xl mx-auto py-16 px-4 text-center">
    <h1 class="text-3xl font-bold mb-4">{{ (lang?.value === 'th' || lang === 'th') ? 'สวัสดีครับ' : 'Hello...' }}</h1>
    <p class="text-lg mb-2" v-html="
      (lang?.value === 'th' || lang === 'th')
        ? 'ผมเป็นนักศึกษาชั้นปีที่ 4 สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก<br>มีความสนใจในด้าน AI/ML และการพัฒนาซอฟต์แวร์ ผมชอบที่จะเปลี่ยนไอเดียใหม่ๆให้เป็นโซลูชันที่สามารถใช้งานได้จริง'
        : `I'm a final-year Computer Science student at Rajamangala University of Technology Tawan-ok with an interest in AI/ML and software development. Experienced in turning ideas into practical solutions.`
    "></p>
    <div class="flex flex-wrap justify-center items-center gap-2 text-blue-600 text-base mt-4 select-none">
      <a href="#" class="hover:underline">Resume</a>
      <span>|</span>
      <a href="https://github.com/pawit5001" target="_blank" rel="noopener" class="hover:underline">GitHub</a>
      <span>|</span>
      <a href="mailto:pawit.wee@hotmail.com" class="hover:underline">pawit.wee@hotmail.com</a>
    </div>
  </section>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang: String
});
</script>
