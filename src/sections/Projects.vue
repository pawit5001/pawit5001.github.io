<template>
  <section id="projects" class="max-w-3xl mx-auto py-12 px-4">
    <h2 class="text-2xl font-bold mb-8">{{ (lang?.value === 'th' || lang === 'th') ? 'โปรเจกต์' : 'Projects' }}</h2>
    <div class="mb-6">
      <div class="font-semibold flex items-center">
        <span>Snap Translate - AI Image Translation System</span>
        <a href="https://github.com/pawit5001/SnapTranslate" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">[GitHub]</a>
      </div>
      <p class="text-gray-600 text-sm mb-1">Technologies: React, FastAPI, MongoDB, YOLOv8, BLIP, Stable Diffusion XL, Google Translate API, Google TTS</p>
      <p class="mb-1">
        {{ (lang?.value === 'th' || lang === 'th') ?
          'ระบบแปลภาพด้วย AI สำหรับการเรียนรู้ภาษาอื่นๆ รองรับการตรวจจับวัตถุ สร้างคำบรรยาย แปลหลายภาษาพร้อมกัน และสามารถฟังเสียงได้' :
          'AI-powered image translation system for language learning with object detection, image captioning, multi-language translation, and text-to-speech capabilities.'
        }}
      </p>
      <ul class="list-disc pl-6 text-left mb-2">
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ตรวจจับวัตถุในภาพด้วย YOLOv8 และสร้างคำบรรยายภาพด้วย BLIP' : 'YOLOv8 object detection and BLIP image captioning' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'รองรับการแปลภาษามากกว่า 50 ภาษาด้วย Google Translate API' : 'Supports 50+ languages via Google Translate API' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'สร้างภาพจากข้อความด้วย Stable Diffusion XL และแปลงข้อความเป็นเสียง' : 'AI image generation with Stable Diffusion XL and text-to-speech' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ระบบจัดการผู้ใช้ แดชบอร์ดแอดมิน และการแจ้งเตือนผ่าน Discord Webhook' : 'User management, admin dashboard, and Discord webhook notifications' }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="font-semibold flex items-center">
        <span>Gender and Age Prediction System</span>
        <a href="https://github.com/pawit5001/gender-age-prediction" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">[GitHub]</a>
      </div>
      <p class="text-gray-600 text-sm mb-1">Technologies: TensorFlow, Keras, OpenCV, EfficientNetB0, Gradio | Dataset: Large facial datasets from Kaggle</p>
      <p class="mb-1">
        {{ (lang?.value === 'th' || lang === 'th') ?
          'ระบบทำนายเพศและอายุจากภาพใบหน้าด้วย Machine Learning พร้อม UI ที่ใช้งานง่าย' :
          'Machine learning-based system for predicting gender and age from facial images with high accuracy, featuring both standalone models and a web interface.'
        }}
      </p>
      <ul class="list-disc pl-6 text-left mb-2">
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ความแม่นยำสูง: 99% สำหรับการทำนายเพศ และ 91-92% สำหรับโมเดลรวม' : 'High accuracy: 99% for gender-only model, 91-92% for combined model' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ใช้ EfficientNetB0 สำหรับการสกัดฟีเจอร์และมี Data Augmentation' : 'EfficientNetB0 backbone for feature extraction with data augmentation' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'รองรับทั้งการทำนายเพศเดี่ยวและการทำนายอายุ+เพศพร้อมกัน' : 'Supports both gender-only and combined gender+age predictions' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'อินเทอร์เฟซ Gradio ที่ใช้งานง่ายพร้อมการแสดงผลแบบเรียลไทม์' : 'User-friendly Gradio web interface with real-time inference' }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="font-semibold flex items-center">
        <span>TravelBlog - Mobile Travel App</span>
        <a href="https://github.com/pawit5001/TravelBlog" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">[GitHub]</a>
        <a href="https://www.mediafire.com/file/v2oec2xoyqh92op/TravelBlog.apk/file" target="_blank" rel="noopener" class="ml-2 text-green-600 underline text-sm">[Download APK]</a>
      </div>
      <p class="text-gray-600 text-sm mb-1">Technologies: Flutter, Dart | Platform: Android 5.0+</p>
      <p class="mb-1">
        {{ (lang?.value === 'th' || lang === 'th') ?
          'แอปมือถือสำหรับค้นหาและสำรวจสถานที่ท่องเที่ยว พร้อมคำแนะนำ และรองรับภาษาไทย' :
          'Flutter-based mobile application for discovering and exploring popular travel destinations with travel tips, wishlist functionality, and Thai language support.'
        }}
      </p>
      <ul class="list-disc pl-6 text-left mb-2">
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'เรียกดูสถานที่ท่องเที่ยวยอดนิยมพร้อมข้อมูลโดยละเอียด' : 'Browse popular destinations with detailed information and tips' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'บันทึกสถานที่โปรดลงใน Wishlist' : 'Wishlist functionality to save favorite places with image galleries' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'UI ภาษาไทยพร้อม Design ที่ทันสมัย' : 'Thai language interface with modern Material Design' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'สร้างด้วย Flutter รองรับหลายแพลตฟอร์ม' : 'Built with Flutter for cross-platform support with downloadable APK' }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="font-semibold flex items-center">
        <span>Sport Equipment Booking System</span>
        <a href="https://github.com/pawit5001/Sport-equipment-booking" target="_blank" rel="noopener" class="ml-2 text-blue-600 underline text-sm">[GitHub]</a>
      </div>
      <p class="text-gray-600 text-sm mb-1">Technologies: PHP, MySQL, Bootstrap 5 | Server: Apache (XAMPP)</p>
      <p class="mb-1">
        {{ (lang?.value === 'th' || lang === 'th') ?
          'ระบบจัดการการยืม-คืนอุปกรณ์กีฬาสำหรับ RMUTTO พร้อมระบบแอดมิน' :
          'Web-based sport equipment borrowing and return management system for RMUTTO with comprehensive admin features.'
        }}
      </p>
      <ul class="list-disc pl-6 text-left mb-2">
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'การจัดการอุปกรณ์กีฬาแบบครบวงจร: หมวดหมู่, อุปกรณ์กีฬา และผู้รับผิดชอบ' : 'Complete equipment management: categories, items, and PIC' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ระบบจองอุปกรณ์กีฬาแบบตะกร้าสินค้า ประวัติการยืม และใบเสร็จ' : 'Booking system with cart, history tracking, and receipt printing' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'แดชบอร์ดแอดมินพร้อมสถิติและการตั้งค่าระบบ (ระยะเวลายืม, ค่าปรับ)' : 'Admin dashboard with statistics and system settings (max days, late fees)' }}</li>
        <li>{{ (lang?.value === 'th' || lang === 'th') ? 'ระบบสมาชิกและการจัดการบทบาทผู้ใช้' : 'User authentication system with role-based access control' }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  lang: String
});
</script>
