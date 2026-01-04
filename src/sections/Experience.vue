<template>
  <section id="experience" class="max-w-3xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold mb-8">{{ (lang?.value === 'th' || lang === 'th') ? 'ประสบการณ์' : 'Experience' }}</h2>
    <div class="mb-8">
      <div class="flex flex-wrap justify-between items-baseline">
        <p class="font-semibold">{{ (lang?.value === 'th' || lang === 'th') ? 'Customer Service & Documentation – Internship' : 'Customer Service & Documentation – Internship' }}</p>
        <span class="text-sm text-gray-600">{{ (lang?.value === 'th' || lang === 'th') ? 'มีนาคม 2023 - กุมภาพันธ์ 2024' : 'March 2023 - February 2024' }}</span>
      </div>
      <p class="text-sm text-gray-700 mb-1">Laemchabang Inter Trans Co., Ltd.</p>
      <ul class="list-disc pl-6 mt-2 space-y-1">
        <li>
          {{ (lang?.value === 'th' || lang === 'th')
            ? 'ประสานงานกับ Shipping Line, Agent , ขนส่งและลูกค้า สำหรับงาน Import/Export'
            : 'Coordinated with shipping lines, agents, and customers for both import and export shipments.'
          }}
        </li>
        <li>
          {{ (lang?.value === 'th' || lang === 'th')
            ? 'จองเรือและแก้ไขปัญหา Delay, Vessel Omission, Bill of Lading, และอื่นๆที่เกี่ยวข้อง'
            : 'Booked vessels and managed schedules, resolved issues such as delays, vessel omissions, and Bill of Lading corrections.'
          }}
        </li>
        <li>
          {{ (lang?.value === 'th' || lang === 'th')
            ? 'จัดทำ SI/VGM, BL และเอกสารอื่นๆที่เกี่ยวข้อง สำหรับ Import/Export'
            : 'Processed Sea Waybill, Surrendered BL, and Original BL for import and export shipments, ensuring smooth and accurate documentation flow.'
          }}
        </li>
        <li>
          {{ (lang?.value === 'th' || lang === 'th')
            ? 'พัฒนา Google Sheets + App Script เพื่อติดตามวันที่เรือออก และ Deadline ของเอกสาร พร้อมส่ง LINE แจ้งเตือนอัตโนมัติ ป้องกันการส่ง BL ล่าช้าและงานสำคัญอื่นๆ'
            : 'Implemented a Google Sheets + App Script solution to track vessel schedules and document deadlines, sending automated LINE notifications to prevent missed deadlines for BL submission and other critical tasks.'
          }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang: String
});
</script>
