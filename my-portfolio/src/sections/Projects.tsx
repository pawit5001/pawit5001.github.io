import React from "react";

type Props = { lang?: string };

const Projects: React.FC<Props> = ({ lang = "en" }) => (
  <section id="projects" className="max-w-3xl mx-auto py-12 px-4 scroll-mt-20">
    <h2 className="text-2xl font-bold mb-8">{lang === "th" ? "โปรเจกต์" : "Projects"}</h2>

    <div className="mb-6">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-semibold">Snap Translate</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">{lang === "th" ? "เว็บไซต์แปลภาษาจากรูปภาพ" : "Image Translation Website"}</span>
        <a href="https://github.com/pawit5001/SnapTranslate" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 underline text-sm md:text-base">[GitHub]</a>
      </div>
      <p className="text-gray-600 text-sm mb-1">{lang === "th" ? "เทคโนโลยี: React, FastAPI, MongoDB, YOLOv8, BLIP, Google Translate API" : "Technologies: React, FastAPI, MongoDB, YOLOv8, BLIP, Google Translate API"}</p>
      <p className="text-gray-600 text-sm mb-2">{lang === "th" ? "ระบบแปลภาพด้วย AI สำหรับการเรียนภาษา" : "An AI-powered image translation system for language learning."}</p>

      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>{lang === "th" ? "ตรวจจับวัตถุด้วย YOLOv8 เพื่อทำนายภาพ" : "Object detection with YOLOv8 to locate and classify objects in images"}</li>
        <li>{lang === "th" ? "สร้างคำบรรยายภาพด้วย BLIP เพื่ออธิบายรูปภาพก่อนนำไปแปลภาษา" : "Image captioning using BLIP to generate descriptive captions before translation"}</li>
        <li>{lang === "th" ? "แปลภาพเป็นหลายภาษาได้ เลือกได้มากสุด 5 ภาษาพร้อมกัน" : "Translate image captions into multiple languages (up to 5 simultaneously)"}</li>
        <li>{lang === "th" ? "สร้างภาพจากข้อความ (Stable Diffusion XL)" : "Image generation from text prompts using Stable Diffusion XL"}</li>
        <li>{lang === "th" ? "Discord Log เพื่อดูบันทึกการแปลภาพแบบเรียลไทม์" : "Discord logging to view real-time image translation results"}</li>
      </ul>
    </div>

    <div className="mb-6">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-semibold">Gender & Age Prediction</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">{lang === "th" ? "ระบบทำนายเพศและอายุ" : "Gender & Age Prediction System"}</span>
        <a href="https://github.com/pawit5001/gender-age-prediction" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 underline text-sm md:text-base">[GitHub]</a>
      </div>

      <p className="text-gray-600 text-sm mb-1">{lang === "th" ? "เทคโนโลยี: Python, TensorFlow, Keras, OpenCV, scikit-learn, Gradio, EfficientNetB0" : "Technologies: Python, TensorFlow, Keras, OpenCV, scikit-learn, Gradio, EfficientNetB0"}</p>
      <p className="text-gray-600 text-sm mb-2">{lang === "th" ? "ระบบทำนายเพศและอายุจากภาพใบหน้าด้วยโมเดล ML" : "A machine learning system for predicting gender and age from facial images."}</p>

      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>{lang === "th" ? "ทำนายเพศและอายุจากรูปภาพคน" : "Gender prediction and age estimation"}</li>
        <li>{lang === "th" ? "การเตรียมข้อมูลก่อนนำไปเทรน (ขนาดรูปภาพ, ปรับมุม, การตรวจจับใบหน้า)" : "Uses EfficientNetB0 backbone; implemented with TensorFlow/Keras. OpenCV is used for image preprocessing (face detection, resizing, normalization)."}</li>
        <li>{lang === "th" ? "รองรับการเทรนโมเดลเป็นชุด หลาย batch พร้อมกัน" : "Can process many images at once (batch) or handle single images instantly (real-time)"}</li>
        <li>{lang === "th" ? "เทรนด้วยชุดข้อมูลภาพใบหน้า พร้อมเทคนิคเพิ่มความหลากหลายของข้อมูล" : "Trained on public face datasets with data augmentation for improved robustness"}</li>
        <li>{lang === "th" ? "อินเตอร์เฟซ: Gradio web app" : "Interfaces: Gradio web app"}</li>
      </ul>
    </div>

    <div className="mb-6">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-semibold">TravelBlog</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">{lang === "th" ? "แอปมือถือแนะนำสถานที่ท่องเที่ยว" : "Mobile Travel App"}</span>
        <a href="https://github.com/pawit5001/TravelBlog" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 underline text-sm md:text-base">[GitHub]</a>
        <a href="https://www.mediafire.com/file/v2oec2xoyqh92op/TravelBlog.apk/file" target="_blank" rel="noopener noreferrer" className="ml-3 text-green-600 underline text-sm md:text-base">[Download APK]</a>
      </div>
      <p className="text-gray-600 text-sm mb-1">Technologies: Flutter, Dart | Platform: Android</p>
      <p className="mb-1">{lang === "th" ? "Flutter-based mobile application for discovering and exploring popular travel destinations with travel tips, wishlist functionality, and Thai language support." : "Flutter-based mobile application for discovering and exploring popular travel destinations with travel tips, wishlist functionality, and Thai language support."}</p>
      <ul className="list-disc pl-6 mb-2 text-sm text-gray-700">
        <li>{lang === "th" ? "เลือกดูสถานที่ยอดนิยมพร้อมรายละเอียดของสถานที่" : "Browse popular destinations with detailed information and image galleries"}</li>
        <li>{lang === "th" ? "บันทึกสถานที่ที่ชอบด้วยฟีเจอร์ Wishlist" : "Save favorite places using the wishlist feature"}</li>
        <li>{lang === "th" ? "รองรับภาษาไทยเต็มรูปแบบ" : "Full Thai language support (localization)"}</li>
        <li>{lang === "th" ? "ค้นหาและกรองสถานที่ตามหมวดหมู่" : "Search and filter destinations by category"}</li>
      </ul>
    </div>

    <div className="mb-6">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-semibold">Sport Equipment Booking</span>
        <span className="ml-3 text-sm md:text-base text-gray-600">{lang === "th" ? "ระบบยืม-คืนอุปกรณ์กีฬา" : "Sport Equipment Booking System"}</span>
        <a href="https://github.com/pawit5001/Sport-equipment-booking" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 underline text-sm md:text-base">[GitHub]</a>
      </div>
      <p className="text-gray-600 text-sm mb-1">Technologies: PHP, MySQL, Bootstrap 5 | Server: Apache (XAMPP)</p>
      <p className="text-gray-600 text-sm mb-2">{lang === "th" ? "ระบบยืม-คืนอุปกรณ์กีฬา" : "Web-based sport equipment borrowing & return system"}</p>

      <ul className="list-disc pl-6 text-left mb-2 text-sm text-gray-700">
          <li>{lang === "th" ? "สมัครสมาชิกและเข้าสู่ระบบผู้ใช้ (นักศึกษา/แอดมิน)" : "User signup and login (student/admin)"}</li>
          <li>{lang === "th" ? "เรียกดูอุปกรณ์ จัดใส่ตะกร้า และทำการยืม" : "Browse equipment, add to cart, and borrow items"}</li>
          <li>{lang === "th" ? "การจัดการ: หมวดหมู่, อุปกรณ์, ผู้รับผิดชอบ และการคืนอุปกรณ์ที่ยืม" : "Admin management: categories, equipment, responsible staff, and returns"}</li>
          <li>{lang === "th" ? "ดูประวัติการจอง พิมพ์ใบเสร็จ และสถิติในแดชบอร์ด" : "View booking history, print receipts, and see dashboard statistics"}</li>
          <li>{lang === "th" ? "การตั้งค่าระบบ: ระยะเวลาในการยืมสูงสุดและค่าปรับ" : "System settings: max borrow duration and late fees per day"}</li>
      </ul>
    </div>
  </section>
);

export default Projects;