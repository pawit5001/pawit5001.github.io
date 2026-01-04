<template>
  <section id="skills" class="max-w-3xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold mb-8">{{ (lang?.value === 'th' || lang === 'th') ? 'ทักษะ' : 'Skills' }}</h2>
    <div class="mb-6">
      <p><strong>Programming:</strong> Python, JavaScript, HTML, CSS, PHP, Dart, SQL, Lua, C</p>
    </div>
    <div class="mb-6">
      <p><strong>Frameworks & Libraries:</strong> React, FastAPI, Flutter, Bootstrap, Tailwind CSS</p>
    </div>
    <div class="mb-6">
      <p><strong>ML/AI:</strong> TensorFlow, Keras, OpenCV</p>
    </div>
    <div class="mb-6">
      <p><strong>Database:</strong> MySQL, MongoDB</p>
    </div>
    <div class="mb-6">
      <p><strong>Tools:</strong> Git, GitHub, VS Code, Jupyter Notebook, Figma</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  lang: String
});
</script>
