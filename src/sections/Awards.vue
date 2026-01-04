<template>
  <section id="awards" class="max-w-3xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold mb-8">{{ (lang?.value === 'th' || lang === 'th') ? 'รางวัล/การแข่งขัน' : 'Competitions & Awards' }}</h2>
    <ul class="space-y-6">
      <li class="flex justify-between items-baseline">
        <div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'นักศึกษาผลการเรียนดีเยี่ยม ปีการศึกษา 2567' : 'Outstanding Academic Achievement, Academic Year 2024' }}</div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์' : 'Bachelor of Science in Computer Science' }}</div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก' : 'Rajamangala University of Technology Tawan-ok' }}
          <a href="https://www.facebook.com/share/p/1G3pQymtxh/" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">({{ (lang?.value === 'th' || lang === 'th') ? 'ดูโพสต์' : 'View Post' }})</a>
          </div>
        </div>
        <div class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'สิงหาคม 2568' : 'August 2025' }}</div>
      </li>
      <li class="flex justify-between items-baseline">
        <div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'นักศึกษาผลการเรียนดีเยี่ยม สาขาการจัดการโลจิสติกส์และซัพพลายเชน' : 'Outstanding Academic, Logistics and Supply Chain Management' }}</div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'วิทยาลัยเทคนิคพัทยา' : 'Pattaya Technical College' }}</div>
        </div>
        <div class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'มีนาคม 2567' : 'March 2024' }}</div>
      </li>
      <li class="flex justify-between items-baseline">
        <div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'รางวัลชนะเลิศ การแข่งขัน Beer Game ระดับจังหวัด' : '1st Place, Beer Game Competition, Chonburi Province' }}</div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'การแข่งขันทักษะวิชาชีพแห่งชาติ' : 'National Vocational Skills Competition' }}
          <a href="http://www2.chainat.ac.th/vecskills/pages/my_cert_college_show_l3.php?y_id=2565&l_id=3&p_id=20&s_id=3&c_id=1320046401&ch_id=1320016201" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">({{ (lang?.value === 'th' || lang === 'th') ? 'ดูผลลัพธ์' : 'View Result' }})</a>
          </div>
        </div>
        <div class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'ตุลาคม 2565' : 'October 2022' }}</div>
      </li>
      <li class="flex justify-between items-baseline">
        <div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'นักศึกษาผลการเรียนดีเยี่ยม สาขาการจัดการธุรกิจค้าปลีก' : 'Award for Outstanding Academic, Retail Management' }}</div>
          <div>{{ (lang?.value === 'th' || lang === 'th') ? 'วิทยาลัยเทคนิคพัทยา' : 'Pattaya Technical College' }}</div>
        </div>
        <div class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'มีนาคม 2565' : 'March 2022' }}</div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang: String
});
</script>
