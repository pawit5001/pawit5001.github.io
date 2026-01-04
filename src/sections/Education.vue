<template>
  <section id="education" class="max-w-3xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold mb-8">{{ (lang?.value === 'th' || lang === 'th') ? 'ประวัติการศึกษา' : 'Education' }}</h2>
    <!-- Bachelor -->
    <div class="mb-8">
      <div class="flex flex-wrap justify-between items-baseline">
        <p class="font-semibold">
          {{ (lang?.value === 'th' || lang === 'th') ? 'วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)' : 'Bachelor of Science (Computer Science)' }}
        </p>
        <span class="text-sm text-gray-600">
          {{ (lang?.value === 'th' || lang === 'th') ? 'กรกฎาคม 2024 - ปัจจุบัน' : 'July 2024 - Present' }}
        </span>
      </div>
      <p>{{ (lang?.value === 'th' || lang === 'th') ? 'มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก' : 'Rajamangala University of Technology Tawan-ok, Thailand' }}</p>
      <p class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'เกรดเฉลี่ย: 3.76/4.00' : 'GPA: 3.76/4.00' }}</p>
    </div>
    <!-- High Vocational -->
    <div class="mb-8">
      <div class="flex flex-wrap justify-between items-baseline">
        <p class="font-semibold">
          {{ (lang?.value === 'th' || lang === 'th') ? 'ประกาศนียบัตรวิชาชีพชั้นสูง (บริหารธุรกิจ)' : 'High Vocational Certificate in Business Administration' }}
        </p>
        <span class="text-sm text-gray-600">
          {{ (lang?.value === 'th' || lang === 'th') ? 'พฤษภาคม 2022 - มีนาคม 2024' : 'May 2022 - March 2024' }}
        </span>
      </div>
      <p>{{ (lang?.value === 'th' || lang === 'th') ? 'วิทยาลัยเทคนิคพัทยา' : 'Pattaya Technical College, Thailand' }}</p>
      <p class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'สาขา: การจัดการโลจิสติกส์และซัพพลายเชน' : 'Major: Logistics and Supply Chain Management' }}</p>
      <p class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'เกรดเฉลี่ย: 3.81/4.00' : 'GPA: 3.81/4.00' }}</p>
    </div>
    <!-- Vocational -->
    <div class="mb-6">
      <div class="flex flex-wrap justify-between items-baseline">
        <p class="font-semibold">
          {{ (lang?.value === 'th' || lang === 'th') ? 'ประกาศนียบัตรวิชาชีพ (บริหารธุรกิจ)' : 'Vocational Certificate in Business Administration' }}
        </p>
        <span class="text-sm text-gray-600">
          {{ (lang?.value === 'th' || lang === 'th') ? 'พฤษภาคม 2019 - มีนาคม 2022' : 'May 2019 - March 2022' }}
        </span>
      </div>
      <p>{{ (lang?.value === 'th' || lang === 'th') ? 'วิทยาลัยเทคนิคพัทยา' : 'Pattaya Technical College, Thailand' }}</p>
      <p class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'สาขา: การจัดการธุรกิจค้าปลีก' : 'Major: Retail Management' }}</p>
      <p class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'เกรดเฉลี่ย: 3.74/4.00' : 'GPA: 3.74/4.00' }}</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang: String
});
</script>
